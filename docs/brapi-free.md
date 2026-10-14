# Análise da brapi Free — XD Finance

Pesquisa em 14/10/2026. Projeto de XD Plans, criado por David Xavier.

## Conclusão

É possível construir gratuitamente um portfólio com catálogo, logos e dados básicos da B3. Câmbio e cripto da brapi exigem Startup ou Pro; portanto a versão gratuita pode ter páginas educativas dessas categorias, mas não prometer suas cotações atuais.

## Cobertura

| Recurso                     | O que foi confirmado                                                                                        | Aplicação                                                                              |
| --------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| Lista B3                    | Endpoint público sem token com ações, FIIs, BDRs, ETFs, preço de fechamento, variação, volume, setor e logo | Explorador com busca, filtros e detalhes básicos                                       |
| Ações sandbox               | PETR4, VALE3, MGLU3 e ITUB4 consultáveis sem token                                                          | Cotação básica em páginas de detalhes                                                  |
| FIIs sandbox                | A autenticação cita MXRF11 e HGLG11 como exemplos de teste em outras seções                                 | Não assumir acesso gratuito a todos os indicadores                                     |
| Histórico Free              | Até 3 meses, intervalo diário                                                                               | Viável em evolução futura; acesso por ativo ainda precisa ser validado                 |
| Logos                       | A listagem pública e cotação básica fornecem URLs                                                           | Logos quando disponíveis, com símbolo de fallback                                      |
| Resumo da empresa           | Incluído no Free, confirmado pelos marcadores visuais da tabela oficial                                     | Integração de perfil preparada; descrição editorial quando a API não fornecer o resumo |
| Dividendos e fundamentos    | Não incluídos no Free; sandbox pode ter exceções de teste                                                   | Não prometer acesso geral no Free; sandbox pode ter exceções                           |
| Câmbio / conversão          | A documentação diz Startup e Pro                                                                            | Catálogo e simulação fictícia, sem preços atuais                                       |
| Cripto                      | A documentação diz Startup e Pro                                                                            | Catálogo educativo e ícones                                                            |
| FIIs detalhados             | Pro                                                                                                         | Sem vacância, carteira, indicadores ou relatórios nesta prévia                         |
| Tesouro / opções / futuros  | Cobertura indicada como Pro                                                                                 | Fora do escopo gratuito                                                                |
| Inflação, Selic e macro BCB | Recursos anunciados nos planos pagos                                                                        | Fora desta primeira versão                                                             |
| MCP                         | Não incluído no Free                                                                                        | Não integrado ao site                                                                  |
| BRAPI AI                    | 50 mensagens/mês no Free                                                                                    | É recurso da conta, não um chatbot incorporado ao site                                 |

## Limites atuais informados

- 15.000 requisições por ciclo mensal; renovação na data do painel, não necessariamente no dia 1.
- 1 requisição simultânea, 1 ação por chamada, 1 token.
- Atualização a cada 30 minutos.
- Histórico de até 3 meses, intervalo 1d.
- Sandbox sem token: 20 requisições/minuto por IP.
- Contas autenticadas: a documentação informa ausência de limite por segundo/minuto, mas continuam sujeitas à cota e concorrência.
- Erros: 401 chave inválida/ausente; 403 cobertura insuficiente; 429 cota/concorrência. Observar Retry-After.

## Cuidados com a interpretação

Blogs antigos da própria brapi descrevem sandbox amplo e outras frequências. A documentação atual de autenticação e os planos atuais são a base dos limites utilizados. A extração inicial em texto perdeu ícones de inclusão/exclusão. A tabela foi conferida diretamente no navegador: ações, ETFs, cotações de FIIs, BDRs, logos e summaryProfile estão incluídos; dados financeiros, indicadores, dividendos, demonstrações e MCP não estão incluídos no Free.

Testes confirmados: a cotação v2 e o perfil empresarial de PETR4 responderam sem chave. O catálogo da prévia recebeu 1.279 ativos, incluindo as moedas educativas e os ativos B3. A compilação Next.js passou; 16 rotas foram verificadas, com sitemap de 1.290 URLs, imagem social PNG e 404 esperado. Busca, favoritos persistidos e conversor foram conferidos no navegador, assim como a largura em celular. A disponibilidade de respostas específicas pode variar. A prévia possui fallback explícito.

Não existe garantia de livre redistribuição comercial somente porque um endpoint dispensa token. Antes do lançamento público, revisar os termos e a cobertura da conta.

## Ideia de produto implementada

XD Finance: uma landing page editorial dark/roxa, com páginas de moedas, cripto, ações, FIIs e ETFs. Explorador com logos, busca, filtros e favoritos no navegador; conversor educativo; guias; detalhes; página de fontes. Sem login, ordens, promessa de retorno ou carteira de investimentos real.

## Fontes oficiais

- [Planos](https://brapi.dev/pricing)
- [Lista pública da B3](https://brapi.dev/docs/acoes/list)
- [Cotação v2](https://brapi.dev/docs/acoes/cotacao)
- [Autenticação, sandbox e limites](https://brapi.dev/docs/authentication)
- [Histórico](https://brapi.dev/docs/acoes)
- [Perfil de empresa](https://brapi.dev/docs/acoes/perfil)
- [Câmbio](https://brapi.dev/docs/moedas)
- [Criptomoedas](https://brapi.dev/docs/criptomoedas)
- [Termos](https://brapi.dev/terms-of-use)
