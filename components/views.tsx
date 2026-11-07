// Pages complètes, partagées entre les trois langues (rendu serveur, export statique).
import type {Metadata} from 'next';
import {MapPin,ShieldCheck,Award,Landmark,ScanSearch,Mic,Video,Users,CalendarDays} from 'lucide-react';
import {Header,Footer,PageHero,Btn,Tag,Dots,ContactList,ContactForm} from '@/components/site';
import {Hero,Marquee,ExpertiseTabs,Method,FounderPortrait,QuoteBlock,Sectors,Faq,SectionHead,Timeline} from '@/components/home';
import {Reveal,ScrollText,CountUp,Float,Title} from '@/components/motion';
import {ArticleCard,ArticlesBrowser,EventCard} from '@/components/articles';
import {contact,figureValues,getDict} from '@/lib/content';
import {getArticles,toCard} from '@/lib/articles';
import {alternates,localize,siteUrl,type Lang} from '@/lib/i18n';

/* ——— Métadonnées localisées ——— */
type MetaKey='home'|'team'|'contact'|'events'|'articles';
const paths:Record<MetaKey,string>={home:'/',team:'/equipe/',contact:'/contact/',events:'/evenements/',articles:'/articles/'};
export function pageMetadata(lang:Lang,key:MetaKey):Metadata{
  const t=getDict(lang);
  const m=key==='home'?t.meta:key==='team'?t.teamPage.meta:key==='contact'?t.contactPage.meta:key==='events'?t.eventsPage.meta:t.articlesPage.meta;
  return {metadataBase:new URL(siteUrl),title:m.title,description:m.description,alternates:alternates(lang,paths[key]),openGraph:{title:m.title,description:m.description,locale:lang==='fr'?'fr_CA':lang==='en'?'en_CA':'ar',type:'website'},icons:{icon:'/cirs-logo.png'}};
}

const Shell=({children}:{children:React.ReactNode})=><div id="top"><Header/><main id="main">{children}</main><Footer/></div>;

/* ——— Accueil ——— */
export function HomeView({lang}:{lang:Lang}){
  const t=getDict(lang);const href=(p:string)=>localize(lang,p);
  const latest=getArticles().slice(0,3).map(a=>toCard(a,lang));
  return <Shell>
<Hero/>
<Marquee/>

{/* ——— À propos ——— */}
<section id="apropos" className="section container">
  <div className="about">
    <Reveal className="about-media">
      <img src="/hero.webp" alt={t.about.imgAlt} width="1536" height="1024"/>
      <span className="about-loc"><MapPin size={15} strokeWidth={2}/> {t.locations}</span>
      <Float className="about-float" amp={8} duration={6.5}><span className="about-float-ico"><ShieldCheck size={18} strokeWidth={1.8}/></span><span><strong>{t.about.floatTitle}</strong><small>{t.about.floatSub}</small></span></Float>
    </Reveal>
    <div className="about-copy">
      <Tag>{t.about.tag}</Tag>
      <ScrollText className="about-statement" text={t.about.statement}/>
      <Reveal delay={.1}><p className="about-note">{t.about.note}</p></Reveal>
      {/* Les services listés correspondent exactement aux cinq domaines d’expertise. */}
      <Reveal delay={.15} className="about-services"><span className="mini">{t.about.services}</span><ul className="chips">{t.expertises.map(s=><li key={s.title}><a href="#expertises">{s.title}</a></li>)}</ul></Reveal>
      <Reveal delay={.2} className="about-cta"><Btn href={href('/equipe/')}>{t.about.cta}</Btn></Reveal>
    </div>
  </div>
  <dl className="stats">{figureValues.map((f,n)=><div key={n} className="stat"><dt>{t.figures[n]}</dt><dd><CountUp value={f.value} pad={f.pad}/></dd></div>)}</dl>
</section>

{/* ——— Domaines d’expertise ——— */}
<section id="expertises" className="panel panel-sky">
  <div className="container section">
    <SectionHead tag={t.xpHead.tag} title={t.xpHead.title} tone={t.xpHead.tone} text={<p>{t.xpHead.text}</p>}/>
    <ExpertiseTabs/>
  </div>
</section>

{/* ——— Méthode ——— */}
<section id="methode" className="panel panel-navy panel-gap">
  <div className="container section">
    <SectionHead dark tag={t.method.tag} title={t.method.title} tone={t.method.tone} text={<p>{t.method.text}</p>}/>
    <Method/>
  </div>
</section>

{/* ——— Équipe ——— */}
<section id="equipe" className="section container">
  <div className="team-sec">
    <Reveal><FounderPortrait/></Reveal>
    <div className="team-copy">
      <Tag>{t.team.tag}</Tag>
      <Title className="h2" parts={[{t:t.founder.name,br:true},{t:t.founder.role,tone:true}]}/>
      <Reveal delay={.1}><p className="team-lead">{t.team.lead}</p></Reveal>
      <Reveal delay={.15}><QuoteBlock/></Reveal>
      <Reveal delay={.2} className="team-cta"><Btn href={href('/equipe/')}>{t.team.cta}</Btn></Reveal>
    </div>
  </div>
</section>

{/* ——— Secteurs ——— */}
<section id="secteurs" className="section container section-tight">
  <SectionHead tag={t.sectorsHead.tag} title={t.sectorsHead.title} tone={t.sectorsHead.tone} text={<p>{t.sectorsHead.text}</p>}/>
  <Reveal><Sectors/></Reveal>
</section>

{/* ——— Articles ——— */}
<section id="articles" className="panel panel-sky">
  <div className="container section">
    <SectionHead tag={t.articlesHead.tag} title={t.articlesHead.title} tone={t.articlesHead.tone} text={<>{t.articlesPage.note&&<p className="lang-note">{t.articlesPage.note}</p>}<Btn href={href('/articles/')} variant="light">{t.articlesHead.all}</Btn></>}/>
    <div className="art-grid">
      {latest.map((a,n)=><Reveal key={a.slug} delay={n*.08} className={latest.length<3&&n===0?'art-wrap is-wide':'art-wrap'}><ArticleCard a={a}/></Reveal>)}
      {latest.length<3&&<Reveal delay={.12} className="art-wrap"><EventCard/></Reveal>}
    </div>
  </div>
</section>

{/* ——— FAQ ——— */}
<section id="faq" className="section container">
  <div className="faq-sec">
    <div className="faq-side"><Tag>{t.faqHead.tag}</Tag><Title className="h2" parts={[{t:t.faqHead.title},{t:t.faqHead.tone,tone:true}]}/><Reveal delay={.1}><p className="faq-text">{t.faqHead.text}</p></Reveal><Reveal delay={.15}><Btn href={href('/contact/')}>{t.faqHead.cta}</Btn></Reveal></div>
    <Reveal><Faq/></Reveal>
  </div>
</section>

{/* ——— Contact ——— */}
<section id="contact" className="cta">
  <Dots className="cta-dots"/>
  <div className="container cta-grid">
    <div><Tag dark>{t.cta.tag}</Tag><Title className="h2 on-dark" parts={[{t:t.cta.title,br:true},{t:t.cta.tone,tone:true}]}/><a className="cta-mail" href={'mailto:'+contact.email}>{contact.email}</a><div className="cta-actions"><Btn href={href('/contact/')} variant="gold">{t.cta.write}</Btn></div></div>
    <Reveal delay={.1}><ContactList dark/></Reveal>
  </div>
</section>
  </Shell>;
}

/* ——— Équipe ——— */
const certIcons=[ScanSearch,Award,Landmark];
export function TeamView({lang}:{lang:Lang}){
  const t=getDict(lang);const p=t.teamPage;const href=(x:string)=>localize(lang,x);
  return <Shell>
<PageHero size="md" tag={t.team.tag} title={t.founder.name} tone={t.founder.role} crumb={{href:href('/'),label:t.ui.home}} lead={<p>{t.founder.firm}</p>}/>
<section className="section container">
  <div className="team-page">
    <div className="team-aside"><FounderPortrait/><QuoteBlock/></div>
    <div>
      <Tag>{p.tag}</Tag>
      <Reveal><p className="prose-lead" style={{marginTop:24}}>{p.intro}</p></Reveal>
      <div className="cert-grid">{t.founder.certifications.map((c,n)=>{const Icon=certIcons[n]??Award;return <Reveal key={c} delay={n*.08}><div className="cert"><span className="cert-ico"><Icon size={20} strokeWidth={1.7}/></span><small>{t.founder.certIn}</small><strong>{c}</strong></div></Reveal>})}</div>
      <Reveal className="prose" delay={.05}><p style={{marginTop:36}}>{p.p1}</p><p>{p.p2}</p></Reveal>
      <h2 className="block-title">{p.path}</h2>
      <Timeline items={p.steps}/>
      <div style={{marginTop:44}}><Btn href={href('/contact/')}>{p.cta}</Btn></div>
    </div>
  </div>
</section>
  </Shell>;
}

/* ——— Contact ——— */
export function ContactView({lang}:{lang:Lang}){
  const t=getDict(lang);const p=t.contactPage;
  return <Shell>
<PageHero tag={p.tag} title={p.title} tone={p.tone} crumb={{href:localize(lang,'/'),label:t.ui.home}} lead={<p>{p.lead}</p>}/>
<section className="section container">
  <div className="contact-wrap">
    <Reveal className="contact-card"><Dots/><h2>{p.cardTitle}</h2><p>{p.cardText}</p><ContactList dark/></Reveal>
    <Reveal delay={.1} className="form-card"><ContactForm/></Reveal>
  </div>
</section>
  </Shell>;
}

/* ——— Événements ——— */
const formatIcons=[Mic,Video,Users,CalendarDays];
export function EventsView({lang}:{lang:Lang}){
  const t=getDict(lang);const p=t.eventsPage;
  return <Shell>
<PageHero tag={p.tag} title={p.title} tone={p.tone} crumb={{href:localize(lang,'/'),label:t.ui.home}} lead={<><p>{p.lead}</p><span className="soon"><i/>{p.soon}</span></>}/>
<section className="section container">
  <div className="fmt-grid">{p.formats.map(({t:title,d},n)=>{const Icon=formatIcons[n]??Mic;return <Reveal key={title} delay={n*.07} className="fmt-wrap"><div className="fmt"><div className="fmt-notch"><span className="fmt-ico"><Icon size={22} strokeWidth={1.7}/></span></div><h3>{title}</h3><p>{d}</p></div></Reveal>})}</div>
</section>
<section className="cta" style={{marginBottom:0}}>
  <Dots className="cta-dots"/>
  <div className="container cta-grid">
    <div><Tag dark>{p.inviteTag}</Tag><Title className="h2 on-dark" parts={[{t:p.inviteTitle,br:true},{t:p.inviteTone,tone:true}]}/></div>
    <div><Btn href={localize(lang,'/contact/')} variant="gold">{p.inviteCta}</Btn></div>
  </div>
</section>
  </Shell>;
}

/* ——— Articles ——— */
export function ArticlesView({lang}:{lang:Lang}){
  const t=getDict(lang);const p=t.articlesPage;
  const articles=getArticles().map(a=>toCard(a,lang));
  return <Shell>
<PageHero tag={p.tag} title={p.title} tone={p.tone} crumb={{href:localize(lang,'/'),label:t.ui.home}} lead={<><p>{p.lead}</p>{p.note&&<p className="lang-note lang-note-dark">{p.note}</p>}</>}/>
<section className="section container">{articles.length?<ArticlesBrowser articles={articles}/>:<div className="empty"><h2>{p.emptyTitle}</h2><p>{p.emptyText}</p></div>}</section>
  </Shell>;
}

/* ——— 404 ——— */
export function NotFoundView({lang}:{lang:Lang}){
  const t=getDict(lang);const p=t.notFound;
  return <><Header/><main id="main"><PageHero tag={p.tag} title={p.title} tone={p.tone} lead={<><p>{p.lead}</p><div style={{marginTop:28}}><Btn href={localize(lang,'/')} variant="gold">{p.cta}</Btn></div></>}/></main><Footer/></>;
}
