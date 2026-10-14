export type Asset = {
  symbol: string;
  name: string;
  kind: string;
  icon: string;
  color: string;
  description: string;
  price?: number;
  change?: number;
  logo?: string;
  time?: string;
  source?: string;
  profileSource?: string;
};
export const assets: Asset[] = [
  {
    symbol: 'BRL',
    name: 'Real brasileiro',
    kind: 'moedas',
    icon: 'R$',
    color: '#51c5a5',
    description:
      'A moeda oficial do Brasil. É a referência monetária deste projeto.',
  },
  {
    symbol: 'USD',
    name: 'Dólar americano',
    kind: 'moedas',
    icon: '$',
    color: '#72a0eb',
    description:
      'Moeda dos Estados Unidos. O par USD/BRL expressa o valor de um dólar em reais.',
  },
  {
    symbol: 'EUR',
    name: 'Euro',
    kind: 'moedas',
    icon: '€',
    color: '#9481ef',
    description:
      'Moeda utilizada por países da zona do euro. O par EUR/BRL expressa seu valor em reais.',
  },
  {
    symbol: 'GBP',
    name: 'Libra esterlina',
    kind: 'moedas',
    icon: '£',
    color: '#d890bc',
    description:
      'Moeda do Reino Unido. Sua cotação em reais é representada pelo par GBP/BRL.',
  },
  {
    symbol: 'JPY',
    name: 'Iene japonês',
    kind: 'moedas',
    icon: '¥',
    color: '#ed787c',
    description:
      'Moeda do Japão. Observe a unidade e o sentido do par ao comparar taxas de câmbio.',
  },
  {
    symbol: 'BTC',
    logo: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/btc.svg',
    name: 'Bitcoin',
    kind: 'cripto',
    icon: '₿',
    color: '#f5a742',
    description:
      'Criptomoeda que utiliza uma rede descentralizada e um registro público de transações.',
  },
  {
    symbol: 'ETH',
    logo: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/eth.svg',
    name: 'Ethereum',
    kind: 'cripto',
    icon: '♦',
    color: '#a39feb',
    description:
      'Rede de blockchain que permite executar contratos inteligentes. Ether é seu ativo nativo.',
  },
  {
    symbol: 'SOL',
    logo: 'https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/sol.svg',
    name: 'Solana',
    kind: 'cripto',
    icon: '≋',
    color: '#ac79ec',
    description:
      'Rede de blockchain utilizada por aplicações e transações com seu ativo nativo SOL.',
  },
  {
    symbol: 'PETR4',
    name: 'Petrobras',
    kind: 'acoes',
    icon: 'P',
    color: '#64b89d',
    description:
      'Ação preferencial da Petrobras. Cotação básica disponível no sandbox da brapi.',
  },
  {
    symbol: 'VALE3',
    name: 'Vale',
    kind: 'acoes',
    icon: 'V',
    color: '#71b6bc',
    description:
      'Ação ordinária da Vale. Cotação básica disponível no sandbox da brapi.',
  },
  {
    symbol: 'ITUB4',
    name: 'Itaú Unibanco',
    kind: 'acoes',
    icon: 'I',
    color: '#f0a26c',
    description:
      'Ação preferencial do Itaú Unibanco. Cotação básica disponível no sandbox da brapi.',
  },
  {
    symbol: 'MGLU3',
    name: 'Magazine Luiza',
    kind: 'acoes',
    icon: 'M',
    color: '#81b7ee',
    description:
      'Ação ordinária do Magazine Luiza. Cotação básica disponível no sandbox da brapi.',
  },
  {
    symbol: 'MXRF11',
    name: 'Maxi Renda',
    kind: 'fiis',
    icon: 'MX',
    color: '#b999f1',
    description:
      'Fundo imobiliário negociado na B3. A listagem pública fornece dados básicos, sem indicadores detalhados.',
  },
  {
    symbol: 'HGLG11',
    name: 'Pátria Log',
    kind: 'fiis',
    icon: 'HG',
    color: '#8ea4df',
    description:
      'Fundo imobiliário negociado na B3. Dados detalhados de FIIs exigem cobertura específica do plano.',
  },
  {
    symbol: 'BOVA11',
    name: 'iShares Ibovespa',
    kind: 'etfs',
    icon: 'B',
    color: '#93bda3',
    description:
      'ETF que busca acompanhar o Ibovespa. O catálogo público permite consultar seus dados básicos.',
  },
  {
    symbol: 'IVVB11',
    name: 'iShares S&P 500',
    kind: 'etfs',
    icon: 'IV',
    color: '#b692d4',
    description:
      'ETF negociado na B3 que oferece exposição ao S&P 500. Considere também o efeito do câmbio.',
  },
];
export const categories: Record<
  string,
  { title: string; eyebrow: string; description: string }
> = {
  moedas: {
    title: 'O mundo, em moedas.',
    eyebrow: 'CÂMBIO & MOEDAS',
    description:
      'Explore as moedas que conectam economias. Catálogo educativo: as cotações de câmbio da brapi exigem Startup ou Pro.',
  },
  cripto: {
    title: 'Conheça o universo cripto.',
    eyebrow: 'ATIVOS DIGITAIS',
    description:
      'Bitcoin, Ethereum e novas redes. Catálogo educativo: cotações e histórico de cripto da brapi exigem Startup ou Pro.',
  },
  acoes: {
    title: 'Empresas que movem o Brasil.',
    eyebrow: 'MERCADO BRASILEIRO',
    description:
      'Explore ações da B3. A lista pública traz dados básicos; quatro ativos também têm cotação no sandbox sem chave.',
  },
  fiis: {
    title: 'Imóveis, em outra dimensão.',
    eyebrow: 'FUNDOS IMOBILIÁRIOS',
    description:
      'Conheça FIIs pela listagem pública da B3. Indicadores, vacância e relatórios detalhados não estão incluídos nesta prévia gratuita.',
  },
  etfs: {
    title: 'Um ativo. Muitos caminhos.',
    eyebrow: 'FUNDOS DE ÍNDICE',
    description:
      'Explore fundos negociados em bolsa com dados básicos do catálogo público. Sem promessas de retorno.',
  },
};
export const guides = [
  {
    slug: 'entenda-o-cambio',
    category: 'MOEDAS',
    title: 'Como ler uma cotação de câmbio?',
    text: 'Em USD/BRL, a primeira sigla é a moeda de origem e a segunda é a moeda de destino. Uma taxa de 5 significa que um dólar corresponde a cinco reais. Essa taxa é um exemplo, não uma cotação atual. A PTAX é uma taxa de referência do Banco Central. O valor cobrado por uma instituição pode incluir spread e tributos, por isso uma conversão de referência não representa o custo final de uma operação.',
  },
  {
    slug: 'acoes-fiis-etfs',
    category: 'PRIMEIROS PASSOS',
    title: 'Ações, FIIs e ETFs: o que muda?',
    text: 'Ações representam participação em uma empresa. Fundos imobiliários reúnem recursos para investir conforme sua política, que pode incluir imóveis e títulos relacionados ao setor. ETFs são fundos negociados em bolsa que normalmente buscam acompanhar um índice. Todos apresentam riscos. A cotação isolada não explica qualidade, custos ou adequação de um investimento. Este site é educativo e não recomenda compra ou venda.',
  },
  {
    slug: 'entenda-a-variacao',
    category: 'LEITURA DE MERCADO',
    title: 'O que a variação de preço revela?',
    text: 'A variação percentual compara um preço com uma referência. Uma mudança de 100 para 102 corresponde a 2%. Em ações, a referência costuma ser o fechamento anterior; em cripto, pode ser uma janela móvel de 24 horas. Sempre confira a data e a origem do dado. Variação passada não garante resultado futuro, e mercados diferentes não devem ser comparados sem observar suas janelas de tempo.',
  },
];

export type CatalogAsset = Omit<
  Asset,
  'description' | 'time' | 'profileSource'
>;
export function catalogAssets(assets: Asset[]): CatalogAsset[] {
  return assets.map(
    ({ symbol, name, kind, icon, color, price, change, logo, source }) => ({
      symbol,
      name,
      kind,
      icon,
      color,
      price,
      change,
      logo,
      source: source ? 'public' : undefined,
    }),
  );
}
