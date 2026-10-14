import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { assets } from '@/lib/data';
import { assetQuote, marketAssets } from '@/lib/brapi';
import { AssetIcon } from '@/components/market';
export function generateStaticParams() {
  return assets.map((a) => ({ symbol: a.symbol }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ symbol: string }>;
}): Promise<Metadata> {
  const { symbol } = await params;
  const a = (await marketAssets()).find((a) => a.symbol === symbol);
  return {
    title: a ? a.name + ' (' + symbol + ')' : 'Ativo',
    description: a?.description,
    alternates: { canonical: '/ativo/' + symbol },
  };
}
export default async function Detail({
  params,
}: {
  params: Promise<{ symbol: string }>;
}) {
  const { symbol } = await params;
  const a = await assetQuote(symbol);
  if (!a) notFound();
  return (
    <main id="main" className="section detail-page">
      <Link className="inline-link" href={'/' + a.kind}>
        ← Voltar ao catálogo
      </Link>
      <div className="detail-title">
        <AssetIcon asset={a} />
        <div>
          <div className="eyebrow">
            {a.symbol} / {a.kind.toUpperCase()}
          </div>
          <h1>
            {a.name}
            <span>.</span>
          </h1>
        </div>
      </div>
      <div className="detail-grid">
        <article className="panel">
          <div className="eyebrow">CONHEÇA O ATIVO</div>
          <h2>Por trás do símbolo.</h2>
          <p>{a.description}</p>
          <p>
            {a.profileSource
              ? 'Resumo fornecido pelo perfil empresarial da brapi. As informações devem ser consultadas junto à fonte original.'
              : 'Descrição editorial do XD Finance. Quando disponível, esta página utiliza o resumo empresarial da brapi.'}
          </p>
          <Link className="inline-link" href="/aprender">
            Aprenda a ler os dados ↗
          </Link>
        </article>
        <aside className="panel quote">
          <span className="eyebrow">PREÇO EM REAIS</span>
          <strong>
            {a.price === undefined
              ? 'Não disponível'
              : a.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
          </strong>
          {a.change !== undefined && (
            <span className={a.change >= 0 ? 'positive' : 'negative'}>
              {a.change.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              % de variação
            </span>
          )}
          <p>
            {a.source ||
              (a.kind === 'moedas' || a.kind === 'cripto'
                ? 'A brapi exige Startup ou Pro para cotações desta categoria.'
                : 'A fonte pública não retornou cotação deste ativo.')}
          </p>
          {a.time && (
            <small>
              {a.source?.startsWith('Listagem')
                ? 'Consulta à listagem:'
                : 'Data da cotação:'}{' '}
              {new Date(a.time).toLocaleString('pt-BR', {
                timeZone: 'America/Sao_Paulo',
              })}{' '}
              (Brasília)
            </small>
          )}
          <Link href="/sobre">Ver fontes e limitações →</Link>
        </aside>
      </div>
    </main>
  );
}
