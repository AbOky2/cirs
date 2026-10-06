import Link from 'next/link';
import {MapPin,ShieldCheck,ArrowUpRight,CalendarDays} from 'lucide-react';
import {Header,Footer,Btn,Tag,Dots,ContactList} from '@/components/site';
import {Hero,Marquee,ExpertiseTabs,ServicesBento,Method,FounderPortrait,QuoteBlock,Sectors,Faq,SectionHead} from '@/components/home';
import {Reveal,ScrollText,CountUp,Float,Title} from '@/components/motion';
import {regions,keyFigures,aboutServices,founder,contact} from '@/lib/content';
import {getArticles,toCard} from '@/lib/articles';
import {ArticleCard} from '@/components/articles';

export default function Home(){
  const latest=getArticles().slice(0,3);
  const places=regions.flatMap(r=>r.countries.split(' · '));
  return <div id="top"><Header/><main id="main">

<Hero/>
<Marquee items={places}/>

{/* ——— À propos ——— */}
<section id="apropos" className="section container">
  <div className="about">
    <Reveal className="about-media">
      <img src="/hero.webp" alt="Globe aux continents dorés sur fond bleu nuit" width="1536" height="1024"/>
      <span className="about-loc"><MapPin size={15} strokeWidth={2}/> Québec, Canada</span>
      <Float className="about-float" amp={8} duration={6.5}><span className="about-float-ico"><ShieldCheck size={18} strokeWidth={1.8}/></span><span><strong>Cabinet indépendant</strong><small>du think tank CIRS</small></span></Float>
    </Reveal>
    <div className="about-copy">
      <Tag>À propos</Tag>
      <ScrollText className="about-statement" text="CIRS-Conseil Inc. est un cabinet de conseil, une firme canado-québécoise en stratégie et affaires publiques. Notre approche s’appuie sur une veille et une intelligence économique rigoureuses pour anticiper, comprendre et décider."/>
      <Reveal delay={.1}><p className="about-note">CIRS-Conseil Inc. est indépendant du think tank Cercle international de réflexions stratégiques (CIRS).</p></Reveal>
      <Reveal delay={.15} className="about-services"><span className="mini">Services</span><ul className="chips">{aboutServices.map(s=><li key={s}>{s}</li>)}</ul></Reveal>
      <Reveal delay={.2} className="about-cta"><Btn href="/equipe/">Rencontrer notre PDG</Btn></Reveal>
    </div>
  </div>
  <dl className="stats">{keyFigures.map(f=><div key={f.label} className="stat"><dt>{f.label}</dt><dd><CountUp value={f.value} pad={f.pad} suffix={f.suffix}/></dd></div>)}</dl>
</section>

{/* ——— Domaines d’expertise ——— */}
<section id="expertises" className="panel panel-sky">
  <div className="container section">
    <SectionHead tag="Nos domaines d’expertise" title="Cinq domaines d’expertise," tone="une même exigence." text={<p>Notre expertise s’inspire notamment d’une expérience développée dans le domaine de la réflexion stratégique internationale, parallèlement aux travaux menés au sein du Cercle international de réflexions stratégiques (CIRS), think tank indépendant à but non lucratif établi en France.</p>}/>
    <ExpertiseTabs/>
  </div>
</section>

{/* ——— Services ——— */}
<section id="services" className="section container">
  <SectionHead tag="Nos services" title="Cinq offres pour passer" tone="de l’analyse à l’action." text={<p>Chaque offre mobilise plusieurs de nos domaines d’expertise, au service des décisions de votre organisation.</p>}/>
  <ServicesBento/>
</section>

{/* ——— Méthode ——— */}
<section id="methode" className="panel panel-navy">
  <div className="container section">
    <SectionHead dark tag="Notre méthode" title="Du bruit" tone="à la décision." text={<p>Une démarche structurée pour rendre l’environnement international lisible et vos choix mieux informés.</p>}/>
    <Method/>
  </div>
</section>

{/* ——— Équipe ——— */}
<section id="equipe" className="section container">
  <div className="team-sec">
    <Reveal><FounderPortrait/></Reveal>
    <div className="team-copy">
      <Tag>Équipe</Tag>
      <Title className="h2" parts={[{t:founder.name,br:true},{t:'PDG de CIRS-Conseil\u00a0Inc.',tone:true}]}/>
      <Reveal delay={.1}><p className="team-lead">Certifié en intelligence économique, en évaluation des politiques publiques et en métiers du pouvoir, formé en administration publique entre l’IEP de Fontainebleau et l’ENAP.</p></Reveal>
      <Reveal delay={.15}><QuoteBlock/></Reveal>
      <Reveal delay={.2} className="team-cta"><Btn href="/equipe/">Découvrir son parcours</Btn></Reveal>
    </div>
  </div>
</section>

{/* ——— Secteurs ——— */}
<section id="secteurs" className="section container section-tight">
  <SectionHead tag="Secteurs d’intervention" title="Vos réalités," tone="notre point de départ." text={<p>Chaque secteur a ses dynamiques. Notre analyse en tient compte.</p>}/>
  <Reveal><Sectors/></Reveal>
</section>

{/* ——— Articles ——— */}
<section id="articles" className="panel panel-sky">
  <div className="container section">
    <SectionHead tag="Articles & analyses" title="Des perspectives" tone="pour mieux comprendre." text={<Btn href="/articles/" variant="light">Tous les articles</Btn>}/>
    <div className="art-grid">
      {latest.map((a,n)=><Reveal key={a.slug} delay={n*.08} className={latest.length<3&&n===0?'art-wrap is-wide':'art-wrap'}><ArticleCard a={toCard(a)}/></Reveal>)}
      {latest.length<3&&<Reveal delay={.12} className="art-wrap"><Link className="evt-card" href="/evenements/"><Dots className="evt-dots"/><span className="evt-ico"><CalendarDays size={22} strokeWidth={1.6}/></span><span><span className="evt-k">Conférences & événements</span><span className="evt-t">Conférences, webinaires, tables rondes et interventions.</span></span><span className="evt-go">Inviter CIRS-Conseil <ArrowUpRight size={16}/></span></Link></Reveal>}
    </div>
  </div>
</section>

{/* ——— FAQ ——— */}
<section id="faq" className="section container">
  <div className="faq-sec">
    <div className="faq-side"><Tag>Questions fréquentes</Tag><Title className="h2" parts={[{t:'Vos questions,'},{t:'nos réponses.',tone:true}]}/><Reveal delay={.1}><p className="faq-text">Une autre question ? Écrivez-nous, nous vous répondons personnellement.</p></Reveal><Reveal delay={.15}><Btn href="/contact/">Poser une question</Btn></Reveal></div>
    <Reveal><Faq/></Reveal>
  </div>
</section>

{/* ——— Contact ——— */}
<section id="contact" className="cta">
  <Dots className="cta-dots"/>
  <div className="container cta-grid">
    <div><Tag dark>Contact</Tag><Title className="h2 on-dark" parts={[{t:'Parlons de vos enjeux.',br:true},{t:'Chaque décision commence par une conversation.',tone:true}]}/><a className="cta-mail" href={'mailto:'+contact.email}>{contact.email}</a><div className="cta-actions"><Btn href="/contact/" variant="gold">Écrire une demande</Btn></div></div>
    <Reveal delay={.1}><ContactList dark/></Reveal>
  </div>
</section>

</main><Footer/></div>;
}
