import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ),
  title: {
    default: 'XD Finance — Seu próximo olhar sobre o mercado',
    template: '%s | XD Finance',
  },
  alternates: { canonical: '/' },
  description:
    'Explore moedas, criptomoedas e ativos da B3 com o XD Finance. Um projeto de Hexed Plans, criado por David Xavier.',
  robots: process.env.NEXT_PUBLIC_SITE_URL?.startsWith('https://')
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: { locale: 'pt_BR', type: 'website', siteName: 'XD Finance' },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'XD Finance',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
              inLanguage: 'pt-BR',
              author: { '@type': 'Person', name: 'David Xavier' },
              publisher: { '@type': 'Organization', name: 'Hexed Plans' },
            }).replace(/</g, String.fromCharCode(92) + 'u003c'),
          }}
        />
        <a className="skip" href="#main">
          Pular para o conteúdo
        </a>
        <header className="nav">
          <Link className="brand" href="/">
            <span className="brand-mark">XD</span>finance
            <span className="brand-dot">.</span>
          </Link>
          <nav aria-label="Navegação principal">
            <Link href="/moedas">Moedas</Link>
            <Link href="/cripto">Cripto</Link>
            <Link href="/acoes">Ações</Link>
            <Link href="/fiis">FIIs</Link>
            <Link href="/etfs">ETFs</Link>
            <Link href="/aprender">Aprender ↗</Link>
          </nav>
          <Link className="nav-cta" href="/acoes">
            Explorar mercado <span>↗</span>
          </Link>
        </header>
        {children}
        <footer>
          <div className="footer-top">
            <Link className="brand" href="/">
              <span className="brand-mark">XD</span>finance.
            </Link>
            <p>
              Mais contexto.
              <br />
              Um novo olhar sobre o dinheiro.
            </p>
            <Link href="/sobre">Sobre o projeto ↗</Link>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} XD Finance · Hexed Plans</span>
            <span>
              Criado por <strong>David Xavier</strong>
            </span>
            <span>Dados: brapi · Conteúdo educativo</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
