import Link from 'next/link';
import {Header,Footer,ArrowUpRight,ArrowRight,ArrowDown} from '@/components/site';
import {expertises,services,sectors,regions,quote,contact} from '@/lib/content';
import {getArticles,formatDate} from '@/lib/articles';

export default function Home(){const latest=getArticles().slice(0,3);return <div id="top"><Header overlay/><main id="main">

<section className="hero">
  <img className="hero-image" src="/hero.webp" alt="" aria-hidden="true"/>
  <div className="wrap hero-inner">
    <p className="hero-kicker">Cabinet de conseil en stratégie et affaires publiques — Québec, Canada</p>
    <h1 className="hero-title"><span>Anticiper.</span><span>Comprendre.</span><span><em>Décider.</em></span></h1>
    <div className="hero-foot">
      <p>CIRS-Conseil Inc. est un cabinet de conseil canado-québécois en stratégie et affaires publiques.</p>
      <Link className="link-light" href="/contact/">Parlons de vos enjeux <ArrowRight size={18} strokeWidth={1.5}/></Link>
      <a className="hero-scroll" href="#apropos" aria-label="Découvrir le cabinet"><ArrowDown size={18} strokeWidth={1.5}/></a>
    </div>
  </div>
</section>

<section id="apropos" className="block wrap">
  <div className="rail"><span className="label">À propos</span></div>
  <div className="block-body">
    <p className="statement reveal">CIRS-Conseil Inc. est un cabinet de conseil, une firme canado-québécoise en stratégie et affaires publiques. Notre approche s’appuie sur une veille et une intelligence économique rigoureuses pour <em>anticiper, comprendre et décider.</em></p>
    <div className="columns reveal">
      <p><span className="label-inline">Services</span>Veille stratégique, analyse géopolitique, communication de crise, évaluation de politiques publiques, analyse de pays et de marchés, environnement économique et réglementaire, identification des parties prenantes, analyse des risques, opportunités d’implantation et environnement concurrentiel.</p>
      <div><p><span className="label-inline">Indépendance</span>CIRS-Conseil Inc. est indépendant du think tank Cercle international de réflexions stratégiques (CIRS).</p><Link className="link" href="/equipe/">Rencontrer notre PDG <ArrowRight size={17} strokeWidth={1.5}/></Link></div>
    </div>
  </div>
</section>

<section id="expertises" className="block wrap">
  <div className="rail"><span className="label">Expertise</span></div>
  <div className="block-body">
    <h2 className="reveal">Cinq domaines,<br/>une même exigence.</h2>
    <p className="block-intro reveal">Notre expertise s’inspire notamment d’une expérience développée dans le domaine de la réflexion stratégique internationale, parallèlement aux travaux menés au sein du Cercle international de réflexions stratégiques (CIRS), think tank indépendant à but non lucratif établi en France.</p>
    <ol className="index-list">{expertises.map((x,i)=><li key={x.title} className="reveal"><span className="index-num">{String(i+1).padStart(2,'0')}</span><h3>{x.title}</h3><p>{x.text}</p></li>)}</ol>
  </div>
</section>

<section id="services" className="dark">
  <div className="block wrap">
    <div className="rail"><span className="label">Services</span></div>
    <div className="block-body">
      <h2 className="reveal">Un accompagnement<br/>à la mesure de vos enjeux.</h2>
      <div className="service-grid">{services.map(s=><article key={s.title} className="reveal"><h3>{s.title}</h3><p>{s.description}</p><p className="service-uses">{s.items.join(' · ')}</p></article>)}</div>
    </div>
  </div>
</section>

<section className="block wrap method">
  <div className="rail"><span className="label">Méthode</span></div>
  <div className="block-body">
    <p className="method-line reveal">Observer, analyser,<br/>anticiper — puis <em>conseiller.</em></p>
    <p className="block-intro reveal">Une démarche structurée pour rendre l’environnement international lisible : recueillir l’information pertinente, relier les faits et les acteurs, explorer les scénarios, puis traduire l’analyse en orientations adaptées à votre réalité.</p>
  </div>
</section>

<section className="quote-band">
  <figure className="wrap reveal"><blockquote>« {quote.text} »</blockquote><figcaption>{quote.author}</figcaption></figure>
</section>

<section className="block wrap">
  <div className="rail"><span className="label">Terrains</span></div>
  <div className="block-body">
    <h2 className="reveal">Vos réalités sont<br/>notre point de départ.</h2>
    <div className="terrains">
      <div className="reveal"><h3 className="sub-label">Secteurs</h3><ul className="plain-list">{sectors.map(s=><li key={s.title}><strong>{s.title}</strong><span>{s.text}</span></li>)}</ul></div>
      <div className="reveal"><h3 className="sub-label">Horizons</h3><ul className="plain-list">{regions.map(r=><li key={r.name}><strong>{r.name}</strong><span>{r.countries}</span></li>)}</ul><p className="note">Implantés au Québec, nous intervenons aussi à distance.</p></div>
    </div>
  </div>
</section>

<section id="articles" className="block wrap">
  <div className="rail"><span className="label">Articles</span></div>
  <div className="block-body">
    <div className="block-head"><h2 className="reveal">Des perspectives<br/>pour mieux comprendre.</h2><Link className="link" href="/articles/">Tous les articles <ArrowRight size={17} strokeWidth={1.5}/></Link></div>
    {latest.length>0?<ul className="article-list">{latest.map(a=><li key={a.slug} className="reveal"><Link href={`/articles/${a.slug}/`}><time dateTime={a.date}>{formatDate(a.date)}</time><span className="article-list-title">{a.title}</span><span className="article-list-cat">{a.category}</span><ArrowUpRight className="article-list-arrow" size={20} strokeWidth={1.5}/></Link></li>)}</ul>:<p className="block-intro">Nos premiers articles sont à venir.</p>}
    <Link className="events-line reveal" href="/evenements/"><span>Conférences, webinaires, tables rondes</span><span className="link">Inviter CIRS-Conseil <ArrowRight size={17} strokeWidth={1.5}/></span></Link>
  </div>
</section>

<section className="dark contact-band" id="contact">
  <div className="wrap">
    <p className="label">Contact</p>
    <h2 className="contact-title reveal">Parlons de vos enjeux.</h2>
    <a className="contact-mail reveal" href={'mailto:'+contact.email}>{contact.email}</a>
    <dl className="contact-facts">
      <div><dt>Téléphone</dt><dd><a href={contact.phoneHref}>{contact.phone}</a></dd></div>
      <div><dt>WhatsApp</dt><dd><a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">{contact.whatsapp}</a></dd></div>
      <div><dt>Implantation</dt><dd>{contact.locations.join(' · ')}</dd></div>
      <div><dt>Modalités</dt><dd>{contact.remote}</dd></div>
    </dl>
    <Link className="link-light" href="/contact/">Écrire une demande détaillée <ArrowRight size={18} strokeWidth={1.5}/></Link>
  </div>
</section>

</main><Footer/></div>}
