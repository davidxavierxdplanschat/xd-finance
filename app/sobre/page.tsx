export const metadata = {
  title: 'Fontes, cobertura e créditos',
  description:
    'Conheça os dados gratuitos, limites da brapi e créditos do XD Finance.',
  alternates: { canonical: '/sobre' },
};
export default function About() {
  return (
    <main id="main" className="section article">
      <div className="eyebrow">TRANSPARÊNCIA DESDE O COMEÇO</div>
      <h1>
        Um projeto aberto
        <br />à curiosidade<span>.</span>
      </h1>
      <p>
        XD Finance é um projeto de portfólio da Hexed Plans, criado por David
        Xavier. O objetivo é reunir educação financeira e exploração de ativos
        em uma experiência simples.
      </p>
      <h2>O que esta versão oferece</h2>
      <ul>
        <li>
          Catálogo educativo de moedas e criptomoedas com símbolos e descrições.
        </li>
        <li>
          Dados básicos de ações, FIIs e ETFs retornados pela lista pública da
          B3 na brapi.
        </li>
        <li>
          Cotação sandbox de PETR4, VALE3, MGLU3 e ITUB4 nas páginas de
          detalhes.
        </li>
        <li>
          Busca, filtros, favoritos no seu navegador e conversor com taxas
          fictícias.
        </li>
      </ul>
      <h2>O que o Free permite</h2>
      <p>
        O plano informa 15.000 requisições por mês, uma chamada simultânea, uma
        ação por requisição, histórico de até três meses com intervalo diário e
        atualização a cada 30 minutos. São limites do plano, não uma garantia de
        acesso irrestrito a todos os ativos ou módulos.
      </p>
      <h2>Cobertura e limitações</h2>
      <p>
        Câmbio e cripto exigem Startup ou Pro. Relatórios detalhados de FIIs são
        Pro. O resumo da empresa (summaryProfile) está incluído no Free e sua
        integração está preparada. Dados financeiros avançados, indicadores e
        demonstrações não estão incluídos. Cada página identifica o resumo da
        API ou a descrição editorial utilizada.
      </p>
      <p>
        Se a API não responder, o catálogo continua disponível sem valores
        inventados. Os dados públicos são preços de fechamento; na página de um
        ativo sandbox a cotação básica pode ter outra data. A conversão
        interativa é uma simulação identificada e não utiliza câmbio atual.
      </p>
      <h2>Fontes oficiais</h2>
      <ul>
        <li>
          <a href="https://brapi.dev/pricing">Planos e limites da brapi ↗</a>
        </li>
        <li>
          <a href="https://brapi.dev/docs/acoes/list">
            Listagem pública de ativos ↗
          </a>
        </li>
        <li>
          <a href="https://brapi.dev/docs/authentication">
            Autenticação e sandbox ↗
          </a>
        </li>
        <li>
          <a href="https://brapi.dev/docs/moedas">Câmbio ↗</a> ·{' '}
          <a href="https://brapi.dev/docs/criptomoedas">Criptomoedas ↗</a>
        </li>
      </ul>
      <p>
        Pesquisa da documentação em 14 de outubro de 2026. Conteúdo informativo
        e educativo, sem recomendação de investimento.
      </p>
      <div className="panel">
        <div className="eyebrow">CRÉDITOS</div>
        <h2>Hexed Plans</h2>
        <p>
          Concepção e criação: <strong>David Xavier</strong>
          <br />
          Projeto: XD Finance
          <br />
          Fonte de dados de mercado: brapi.dev
        </p>
      </div>
    </main>
  );
}
