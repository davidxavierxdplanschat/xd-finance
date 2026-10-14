'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { CatalogAsset } from '@/lib/data';
export function AssetIcon({ asset }: { asset: CatalogAsset }) {
  const [failed, setFailed] = useState(false);
  return (
    <span
      aria-hidden="true"
      className="asset-icon"
      style={{ color: asset.color, background: asset.color + '16' }}
    >
      {asset.logo && !failed ? (
        <img
          src={asset.logo}
          alt=""
          width="30"
          height="30"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        asset.icon
      )}
    </span>
  );
}
export function Market({
  assets,
  initial = 'todos',
}: {
  assets: CatalogAsset[];
  initial?: string;
}) {
  const [kind, setKind] = useState(initial),
    [query, setQuery] = useState(''),
    [favorites, setFavorites] = useState<string[]>([]),
    [only, setOnly] = useState(false),
    [order, setOrder] = useState('default'),
    [page, setPage] = useState(1);
  useEffect(() => setPage(1), [kind, query, only, order]);
  useEffect(() => {
    try {
      setFavorites(JSON.parse(localStorage.getItem('xd-favorites') || '[]'));
    } catch {}
  }, []);
  function toggle(symbol: string) {
    const next = favorites.includes(symbol)
      ? favorites.filter((s) => s !== symbol)
      : [...favorites, symbol];
    setFavorites(next);
    try {
      localStorage.setItem('xd-favorites', JSON.stringify(next));
    } catch {}
  }
  let rows = assets.filter(
    (a) =>
      (kind === 'todos' || a.kind === kind) &&
      (!only || favorites.includes(a.symbol)) &&
      (a.name + ' ' + a.symbol).toLowerCase().includes(query.toLowerCase()),
  );
  if (order === 'name') rows.sort((a, b) => a.name.localeCompare(b.name));
  if (order === 'change')
    rows.sort((a, b) => (b.change ?? -Infinity) - (a.change ?? -Infinity));
  return (
    <div className="market">
      <div className="market-tools">
        <div className="tabs" aria-label="Filtrar por categoria">
          {['todos', 'moedas', 'cripto', 'acoes', 'fiis', 'etfs'].map((k) =>
            initial !== 'todos' ? (
              <Link
                key={k}
                className={k === initial ? 'active' : ''}
                href={k === 'todos' ? '/#explorar' : '/' + k}
              >
                {
                  (
                    {
                      todos: 'Todos',
                      moedas: 'Moedas',
                      cripto: 'Cripto',
                      acoes: 'Ações',
                      fiis: 'FIIs',
                      etfs: 'ETFs',
                    } as Record<string, string>
                  )[k]
                }
              </Link>
            ) : (
              <button
                key={k}
                aria-pressed={kind === k}
                className={kind === k ? 'active' : ''}
                onClick={() => setKind(k)}
              >
                {
                  (
                    {
                      todos: 'Todos',
                      moedas: 'Moedas',
                      cripto: 'Cripto',
                      acoes: 'Ações',
                      fiis: 'FIIs',
                      etfs: 'ETFs',
                    } as Record<string, string>
                  )[k]
                }
              </button>
            ),
          )}
        </div>
        <label className="search">
          <span>⌕</span>
          <input
            aria-label="Buscar ativo"
            placeholder="Buscar nome ou símbolo"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>
      <div className="table-options">
        <span>{rows.length} ativos · Dados públicos ou catálogo educativo</span>
        <div>
          <button
            className={only ? 'text-button selected' : 'text-button'}
            onClick={() => setOnly(!only)}
            aria-pressed={only}
          >
            ☆ Favoritos
          </button>
          <select
            aria-label="Ordenar ativos"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="default">Ordem do catálogo</option>
            <option value="name">Nome A–Z</option>
            <option value="change">Maior variação</option>
          </select>
        </div>
      </div>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Ativo</th>
              <th>Símbolo</th>
              <th>Preço em BRL</th>
              <th>Variação</th>
              <th>Fonte / cobertura</th>
              <th>
                <span className="sr-only">Favoritar</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.slice((page - 1) * 20, page * 20).map((a) => (
              <tr key={a.symbol}>
                <td>
                  <Link href={'/ativo/' + a.symbol} className="asset-name">
                    <AssetIcon asset={a} />
                    <span>
                      {a.name}
                      <small>
                        {
                          (
                            {
                              moedas: 'Moeda fiduciária',
                              cripto: 'Criptomoeda',
                              acoes: 'Ação brasileira',
                              fiis: 'Fundo imobiliário',
                              etfs: 'Fundo de índice',
                            } as Record<string, string>
                          )[a.kind]
                        }
                      </small>
                    </span>
                  </Link>
                </td>
                <td className="muted">{a.symbol}</td>
                <td className="number">
                  {a.price !== undefined
                    ? a.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      })
                    : '—'}
                </td>
                <td
                  className={
                    a.change === undefined
                      ? 'muted'
                      : a.change >= 0
                        ? 'positive'
                        : 'negative'
                  }
                >
                  {a.change === undefined
                    ? '—'
                    : (a.change >= 0 ? '↗ +' : '↘ ') +
                      a.change.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }) +
                      '%'}
                </td>
                <td>
                  <span className="source-tag">
                    {a.source
                      ? 'Lista pública B3'
                      : a.kind === 'moedas' || a.kind === 'cripto'
                        ? 'Catálogo · sem cotação'
                        : 'Dado indisponível'}
                  </span>
                </td>
                <td>
                  <button
                    className={
                      'star ' + (favorites.includes(a.symbol) ? 'selected' : '')
                    }
                    aria-label={
                      favorites.includes(a.symbol)
                        ? 'Remover ' + a.symbol + ' dos favoritos'
                        : 'Adicionar ' + a.symbol + ' aos favoritos'
                    }
                    aria-pressed={favorites.includes(a.symbol)}
                    onClick={() => toggle(a.symbol)}
                  >
                    {favorites.includes(a.symbol) ? '★' : '☆'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {!rows.length && (
        <p className="empty">
          Nenhum ativo encontrado. Tente outra busca ou filtro.
        </p>
      )}
      {rows.length > 20 && (
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            ← Anterior
          </button>
          <span>
            Página {page} de {Math.ceil(rows.length / 20)}
          </span>
          <button
            disabled={page >= Math.ceil(rows.length / 20)}
            onClick={() => setPage(page + 1)}
          >
            Próxima →
          </button>
        </div>
      )}
      <p className="data-note">
        Preços de fechamento quando fornecidos pela listagem pública brapi.
        Câmbio e cripto não estão incluídos no Free.{' '}
        <Link href="/sobre">Entenda a cobertura ↗</Link>
      </p>
    </div>
  );
}
export function Converter() {
  const [amount, setAmount] = useState('1000'),
    [from, setFrom] = useState('USD'),
    [to, setTo] = useState('BRL');
  const rates: Record<string, number> = { USD: 5, EUR: 5.5, BRL: 1, GBP: 6.5 };
  return (
    <div className="converter">
      <div className="mini-eyebrow">FERRAMENTA EDUCATIVA</div>
      <h3>
        De uma moeda
        <br />
        para outra.
      </h3>
      <p>Experimente uma conversão de referência.</p>
      <label>
        Valor
        <input
          type="number"
          min="0"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <div className="converter-pair">
        <label>
          De
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {Object.keys(rates).map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
        <button
          aria-label="Inverter moedas"
          onClick={() => {
            setFrom(to);
            setTo(from);
          }}
        >
          ⇄
        </button>
        <label>
          Para
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {Object.keys(rates).map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>
      </div>
      <output>
        {(Math.max(0, Number(amount) || 0) * rates[from]) / rates[to] ===
        Infinity
          ? '—'
          : (
              (Math.max(0, Number(amount) || 0) * rates[from]) /
              rates[to]
            ).toLocaleString('pt-BR', { style: 'currency', currency: to })}
      </output>
      <small>
        Simulação com taxas fixas fictícias. Não representa uma cotação atual e
        não inclui taxas ou tributos.
      </small>
    </div>
  );
}
