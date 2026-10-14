import 'server-only';
import { assets, type Asset } from './data';
async function request(path: string, authenticated = false, ttl = 1800) {
  const headers: Record<string, string> = {};
  if (authenticated && process.env.BRAPI_API_KEY)
    headers.Authorization = `Bearer ${process.env.BRAPI_API_KEY}`;
  const response = await fetch(`https://brapi.dev${path}`, {
    headers,
    next: { revalidate: ttl },
    signal: AbortSignal.timeout(7000),
  });
  if (!response.ok) throw new Error(`BRAPI ${response.status}`);
  return response.json();
}
export async function marketAssets(): Promise<Asset[]> {
  try {
    const data = await request('/api/quote/list?limit=2000');
    const rows = Array.isArray(data.stocks) ? data.stocks : [];
    const result: Asset[] = assets.filter(
      (a) => a.kind === 'moedas' || a.kind === 'cripto',
    );
    for (const row of rows) {
      if (typeof row.stock !== 'string') continue;
      const kind =
        row.subType === 'fii'
          ? 'fiis'
          : row.subType === 'etf'
            ? 'etfs'
            : row.type === 'stock'
              ? 'acoes'
              : undefined;
      if (!kind) continue;
      const known = assets.find((a) => a.symbol === row.stock);
      result.push({
        symbol: row.stock,
        name: known?.name || row.name || row.stock,
        kind,
        icon: known?.icon || row.stock.slice(0, 2),
        color: known?.color || '#a97bff',
        description:
          known?.description ||
          `${row.name || row.stock} é um ativo negociado na B3. Este catálogo apresenta os dados básicos fornecidos pela listagem pública da brapi; não inclui análise ou recomendação de investimento.`,
        price:
          typeof row.close === 'number' && Number.isFinite(row.close)
            ? row.close
            : undefined,
        change:
          typeof row.change === 'number' && Number.isFinite(row.change)
            ? row.change
            : undefined,
        logo:
          typeof row.logo === 'string' && row.logo.startsWith('https://')
            ? row.logo
            : undefined,
        source: 'Listagem pública brapi · preço de fechamento',
        time:
          typeof data.requestedAt === 'string' ? data.requestedAt : undefined,
      });
    }
    for (const a of assets.filter((a) =>
      ['acoes', 'fiis', 'etfs'].includes(a.kind),
    ))
      if (!result.some((r) => r.symbol === a.symbol)) result.push(a);
    return result;
  } catch {
    return assets;
  }
}
export async function assetQuote(symbol: string): Promise<Asset | undefined> {
  let asset = (await marketAssets()).find((a) => a.symbol === symbol);
  if (!asset) return;
  if (!['acoes', 'fiis', 'etfs'].includes(asset.kind)) return asset;
  const sandbox = ['PETR4', 'VALE3', 'MGLU3', 'ITUB4'].includes(symbol);
  if (!sandbox && !process.env.BRAPI_API_KEY) return asset;
  try {
    const json = await request(
      '/api/v2/stocks/quote?symbols=' + encodeURIComponent(symbol),
      !sandbox,
    );
    const d = json.results?.[0]?.data;
    if (d)
      asset = {
        ...asset,
        price:
          typeof d.regularMarketPrice === 'number'
            ? d.regularMarketPrice
            : asset.price,
        change:
          typeof d.regularMarketChangePercent === 'number'
            ? d.regularMarketChangePercent
            : asset.change,
        logo: d.logourl || asset.logo,
        time: d.regularMarketTime,
        source: sandbox
          ? 'brapi · cotação básica sandbox'
          : 'brapi · cotação básica',
      };
  } catch {}
  if (asset.kind === 'acoes') {
    try {
      const json = await request(
        '/api/v2/stocks/profile?symbols=' + encodeURIComponent(symbol),
        true,
        86400,
      );
      const profile = json.results?.[0]?.data;
      if (
        typeof profile?.longBusinessSummary === 'string' &&
        profile.longBusinessSummary.trim()
      )
        asset = {
          ...asset,
          description: profile.longBusinessSummary,
          profileSource: 'Perfil de empresa · brapi',
        };
    } catch {}
  }
  return asset;
}
