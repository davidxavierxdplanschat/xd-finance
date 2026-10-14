import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { categories, catalogAssets } from '@/lib/data';
import { marketAssets } from '@/lib/brapi';
import { Market } from '@/components/market';
export function generateStaticParams() {
  return Object.keys(categories).map((category) => ({ category }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const c = categories[category];
  return {
    title: c?.eyebrow || 'Mercado',
    description: c?.description,
    alternates: { canonical: '/' + category },
  };
}
export default async function Category({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const c = categories[category];
  if (!c) notFound();
  return (
    <main id="main" className="section category-page">
      <div className="eyebrow">{c.eyebrow}</div>
      <h1>{c.title}</h1>
      <p className="page-intro">{c.description}</p>
      <Market
        assets={catalogAssets(
          (await marketAssets()).filter((a) => a.kind === category),
        )}
        initial={category}
      />
    </main>
  );
}
