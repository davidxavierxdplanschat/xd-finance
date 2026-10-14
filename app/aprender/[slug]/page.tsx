import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guides } from '@/lib/data';
export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = guides.find((g) => g.slug === slug);
  return {
    title: g?.title,
    description: g?.text.slice(0, 150),
    alternates: { canonical: '/aprender/' + slug },
  };
}
export default async function Guide({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = guides.find((g) => g.slug === slug);
  if (!g) notFound();
  return (
    <main id="main" className="section article">
      <Link href="/aprender" className="inline-link">
        ← Todos os guias
      </Link>
      <div className="eyebrow">{g.category}</div>
      <h1>{g.title}</h1>
      <div className="article-meta">
        Por David Xavier · XD Finance / XD Plans
      </div>
      <p>{g.text}</p>
      <div className="panel">
        <h3>Confira a fonte e a data.</h3>
        <p>
          Dados de mercado podem ser atrasados ou indisponíveis. No XD Finance,
          moedas e cripto são catálogos educativos sem cotação atual.
        </p>
        <Link className="inline-link" href="/sobre">
          Como o projeto utiliza os dados →
        </Link>
      </div>
      <Link href="/acoes" className="button primary">
        Explorar ativos ↗
      </Link>
    </main>
  );
}
