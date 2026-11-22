import Link from 'next/link';
import {MapPin,ShieldCheck,ArrowUpRight,CalendarDays} from 'lucide-react';
import {Header,Footer,Btn,Tag,Dots,ContactList} from '@/components/site';
import {Hero,Marquee,ExpertiseTabs,Method,FounderPortrait,QuoteBlock,Sectors,Faq,SectionHead} from '@/components/home';
import {Reveal,ScrollText,CountUp,Float,Title} from '@/components/motion';
import {ArticleCard} from '@/components/articles';
import {keyFigures,founderName,contact} from '@/lib/content';
import {getArticles,toCard} from '@/lib/articles';
import {dicts,L,type Lang} from '@/lib/i18n';

// Ordre stratégique : compétences (expertises & services), preuve (analyses), méthode et terrains, puis l’institutionnel.
export function HomeView({lang}:{lang:Lang}){
  const t=dicts[lang];
  const latest=getArticles().slice(0,3);
  return <div id="top"><Header/><main id="main">

<Hero/>
<Marquee/>

<section id="expertises" className="panel panel-sky">
  <div className="container section">
    <SectionHead tag={t.exp.tag} title={t.exp.title} tone={t.exp.tone} text={<p>{t.exp.text}</p>}/>
    <ExpertiseTabs/>
  </div>
</section>

<section id="articles" className="section container">
  <SectionHead tag={t.analyses.tag} title={t.analyses.title} tone={t.analyses.tone} text={<><p>{t.analyses.text}{t.analyses.frNote&&<> <strong>{t.analyses.frNote}</strong></>}</p><div style={{marginTop:20}}><Btn href="/articles/" variant="light">{t.analyses.cta}</Btn></div></>}/>
  <div className="art-grid">
    {latest.map((a,n)=><Reveal key={a.slug} delay={n*.08} className={latest.length<3&&n===0?'art-wrap is-wide':'art-wrap'}><ArticleCard a={toCard(a,lang)}/></Reveal>)}
    {latest.length<3&&<Reveal delay={.12} className="art-wrap"><Link className="evt-card" href={L(lang,'/evenements/')}><Dots className="evt-dots"/><span className="evt-ico"><CalendarDays size={22} strokeWidth={1.6}/></span><span><span className="evt-k">{t.eventsCard.k}</span><span className="evt-t">{t.eventsCard.t}</span></span><span className="evt-go">{t.eventsCard.go} <ArrowUpRight size={16} className="flip-rtl"/></span></Link></Reveal>}
  </div>
</section>

<section id="methode" className="panel panel-navy">
  <div className="container section">
    <SectionHead dark tag={t.method.tag} title={t.method.title} tone={t.method.tone} text={<p>{t.method.text}</p>}/>
    <Method/>
  </div>
</section>

<section id="secteurs" className="section container">
  <SectionHead tag={t.sectors.tag} title={t.sectors.title} tone={t.sectors.tone} text={<p>{t.sectors.text}</p>}/>
  <Reveal><Sectors/></Reveal>
</section>

<section id="apropos" className="section container section-tight">
  <div className="about">
    <Reveal className="about-media">
      <img src="/hero.webp" alt={t.about.imgAlt} width="1536" height="1024"/>
      <span className="about-loc"><MapPin size={15} strokeWidth={2}/> {t.about.loc}</span>
      <Float className="about-float" amp={8} duration={6.5}><span className="about-float-ico"><ShieldCheck size={18} strokeWidth={1.8}/></span><span><strong>{t.about.floatTitle}</strong><small>{t.about.floatSub}</small></span></Float>
    </Reveal>
    <div className="about-copy">
      <Tag>{t.about.tag}</Tag>
      <ScrollText className="about-statement" text={t.about.statement}/>
      <Reveal delay={.1}><p className="about-note">{t.about.note}</p></Reveal>
      <Reveal delay={.15} className="about-services"><span className="mini">{t.about.servicesLabel}</span><ul className="chips">{t.exp.items.map(s=><li key={s.title}><a href="#expertises">{s.title}</a></li>)}</ul></Reveal>
      <Reveal delay={.2} className="about-cta"><Btn href="/equipe/">{t.about.cta}</Btn></Reveal>
    </div>
  </div>
  <dl className="stats">{keyFigures.map((f,n)=><div key={n} className="stat"><dt>{t.about.figures[n]}</dt><dd dir="ltr"><CountUp value={f.value} pad={f.pad}/></dd></div>)}</dl>
</section>

<section id="equipe" className="section container section-tight">
  <div className="team-sec">
    <Reveal><FounderPortrait/></Reveal>
    <div className="team-copy">
      <Tag>{t.team.tag}</Tag>
      <Title className="h2" parts={[{t:founderName,br:true},{t:t.team.role,tone:true}]}/>
      <Reveal delay={.1}><p className="team-lead">{t.team.lead}</p></Reveal>
      <Reveal delay={.15}><QuoteBlock/></Reveal>
      <Reveal delay={.2} className="team-cta"><Btn href="/equipe/">{t.team.cta}</Btn></Reveal>
    </div>
  </div>
</section>

<section id="faq" className="section container">
  <div className="faq-sec">
    <div className="faq-side"><Tag>{t.faq.tag}</Tag><Title className="h2" parts={[{t:t.faq.title},{t:t.faq.tone,tone:true}]}/><Reveal delay={.1}><p className="faq-text">{t.faq.text}</p></Reveal><Reveal delay={.15}><Btn href="/contact/">{t.faq.cta}</Btn></Reveal></div>
    <Reveal><Faq/></Reveal>
  </div>
</section>

<section id="contact" className="cta">
  <Dots className="cta-dots"/>
  <div className="container cta-grid">
    <div><Tag dark>{t.cta.tag}</Tag><Title className="h2 on-dark" parts={[{t:t.cta.title,br:true},{t:t.cta.tone,tone:true}]}/><a className="cta-mail" href={'mailto:'+contact.email}>{contact.email}</a><div className="cta-actions"><Btn href="/contact/" variant="gold">{t.cta.write}</Btn></div></div>
    <Reveal delay={.1}><ContactList dark/></Reveal>
  </div>
</section>

</main><Footer/></div>;
}
