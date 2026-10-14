import Link from 'next/link';
export default function NotFound() {
  return (
    <main id="main" className="section category-page">
      <div className="eyebrow">404 / FORA DO CATÁLOGO</div>
      <h1>
        Vamos encontrar
        <br />
        outro caminho.
      </h1>
      <p className="page-intro">Esta página ou ativo não está disponível.</p>
      <Link href="/" className="button primary">
        Voltar ao início →
      </Link>
    </main>
  );
}
