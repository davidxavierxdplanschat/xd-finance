import type { MetadataRoute } from 'next';
import { categories, guides } from '@/lib/data';
import { marketAssets } from '@/lib/brapi';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const assets = await marketAssets();
  return [
    '',
    '/sobre',
    '/aprender',
    ...Object.keys(categories).map((c) => '/' + c),
    ...assets.map((a) => '/ativo/' + a.symbol),
    ...guides.map((g) => '/aprender/' + g.slug),
  ].map((p) => ({
    url: base + p,
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.7,
  }));
}
