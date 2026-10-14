import Link from 'next/link';
import { guides } from '@/lib/data';
export const metadata = {
  title: 'Aprender sobre moedas e mercado',
  description:
    'Guias introdutórios de câmbio, ações, FIIs, ETFs e variação de preços.',
  alternates: { canonical: '/aprender' },
};
export default function Learn() {
  return (
    <main id="main" className="section category-page">
      <div className="eyebrow">CONHECIMENTO É CAPITAL</div>
      <h1>
        Entenda antes.
        <br />
        <span>Explore melhor.</span>
      </h1>
      <p className="page-intro">
        Conceitos claros para começar a olhar o mercado com mais contexto.
      </p>
      <div className="guide-grid">
        {guides.map((g) => (
          <Link className="panel" key={g.slug} href={'/aprender/' + g.slug}>
            <div className="eyebrow">{g.category}</div>
            <h2>{g.title}</h2>
            <p>{g.text.slice(0, 150)}…</p>
            <span className="inline-link">Ler guia ↗</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
