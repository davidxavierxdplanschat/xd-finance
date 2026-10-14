import Link from 'next/link';
import { Market, Converter } from '@/components/market';
import { marketAssets } from '@/lib/brapi';
import { guides, catalogAssets } from '@/lib/data';
export default async function Home() {
  const assets = await marketAssets();
  return (
    <main id="main">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="live-dot" /> MERCADO, COM PERSPECTIVA
          </div>
          <h1>
            Seu dinheiro.
            <br />
            Seu mundo.
            <br />
            <span>Um novo olhar.</span>
          </h1>
          <p>
            Moedas, cripto e o mercado brasileiro.
            <br />
            Explore os ativos. Entenda o contexto.
            <br />
            Tudo começa com curiosidade.
          </p>
          <div className="hero-actions">
            <Link href="#explorar" className="button primary">
              Explore os ativos <span>↗</span>
            </Link>
            <Link href="/aprender" className="button secondary">
              Comece pelo básico <span>→</span>
            </Link>
          </div>
          <div className="hero-note">
            <span>◈</span> Dados públicos. Conhecimento aberto.
          </div>
        </div>
        <div
          className="hero-art"
          role="img"
          aria-label="Ilustração das moedas e mercados"
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="orb core">
            XD<span>FINANCE</span>
          </div>
          <div className="orb bitcoin">₿</div>
          <div className="orb dollar">$</div>
          <div className="orb ether">♦</div>
          <div className="orb real">R$</div>
          <div className="art-caption">
            <span className="live-dot" /> UM MUNDO DE POSSIBILIDADES
          </div>
          <div className="art-star star-one">✦</div>
          <div className="art-star star-two">✧</div>
        </div>
      </section>
      <section className="category-strip" aria-label="Categorias">
        <Link href="/moedas">
          <span>01</span>Moedas <b>↗</b>
        </Link>
        <Link href="/cripto">
          <span>02</span>Criptomoedas <b>↗</b>
        </Link>
        <Link href="/acoes">
          <span>03</span>Ações <b>↗</b>
        </Link>
        <Link href="/fiis">
          <span>04</span>FIIs <b>↗</b>
        </Link>
        <Link href="/etfs">
          <span>05</span>ETFs <b>↗</b>
        </Link>
      </section>
      <section className="section" id="explorar">
        <div className="section-heading">
          <div>
            <div className="eyebrow">O SEU PONTO DE PARTIDA</div>
            <h2>
              Explore o mercado<span>.</span>
            </h2>
          </div>
          <p>
            Um lugar para descobrir ativos.
            <br />
            Sem ruído. Com contexto.
          </p>
        </div>
        <Market assets={catalogAssets(assets)} />
      </section>
      <section className="perspective section">
        <div className="perspective-copy">
          <div className="eyebrow">VÁ ALÉM DO SÍMBOLO</div>
          <h2>
            Números contam.
            <br />
            <span>Contexto explica.</span>
          </h2>
          <p>
            Uma moeda conecta países. Uma ação representa uma empresa. Um fundo
            abre novas possibilidades. Entender a diferença é o primeiro passo.
          </p>
          <Link className="inline-link" href="/aprender">
            Conheça os conceitos →
          </Link>
          <div className="concepts">
            <div>
              <span>01 / OBSERVE</span>
              <h4>Encontre o ativo.</h4>
              <p>Busque por nome, símbolo ou categoria.</p>
            </div>
            <div>
              <span>02 / ENTENDA</span>
              <h4>Conheça a origem.</h4>
              <p>Confira cobertura e data antes de comparar.</p>
            </div>
          </div>
        </div>
        <Converter />
      </section>
      <section className="section learn">
        <div className="section-heading">
          <div>
            <div className="eyebrow">CONHECIMENTO É CAPITAL</div>
            <h2>
              Menos dúvidas.
              <br />
              Mais perspectiva<span>.</span>
            </h2>
          </div>
          <Link href="/aprender" className="inline-link">
            Todos os guias ↗
          </Link>
        </div>
        <div className="guide-grid">
          {guides.map((g, i) => (
            <Link
              className="guide-card"
              key={g.slug}
              href={'/aprender/' + g.slug}
            >
              <div className={'guide-art art-' + i}>
                <span>{['⇄', '◈', '↗'][i]}</span>
                <i>{['BRL / USD', 'B3 / MERCADO', 'PREÇO / TEMPO'][i]}</i>
              </div>
              <div className="guide-body">
                <small>{g.category} · LEITURA RÁPIDA</small>
                <h3>{g.title}</h3>
                <span>Entender melhor ↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="closing">
        <div className="eyebrow">CURIOSIDADE MOVE VOCÊ</div>
        <h2>
          O próximo passo
          <br />
          começa com <span>XD.</span>
        </h2>
        <Link href="/moedas" className="button primary">
          Descubra as moedas ↗
        </Link>
      </section>
    </main>
  );
}
