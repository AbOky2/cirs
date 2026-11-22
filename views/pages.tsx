import {Award,Landmark,ScanSearch,Mic,Video,Users,CalendarDays} from 'lucide-react';
import {Header,Footer,PageHero,Btn,Tag,Dots,ContactForm,ContactList} from '@/components/site';
import {FounderPortrait,QuoteBlock,Timeline} from '@/components/home';
import {ArticlesBrowser} from '@/components/articles';
import {Reveal,Title} from '@/components/motion';
import {founderName} from '@/lib/content';
import {getArticles,toCard} from '@/lib/articles';
import {dicts,type Lang} from '@/lib/i18n';

const certIcons=[ScanSearch,Award,Landmark];
export function TeamView({lang}:{lang:Lang}){
  const t=dicts[lang];const p=t.teamPage;
  return <div id="top"><Header/><main id="main">
<PageHero size="md" tag={p.tag} title={founderName} tone={t.team.role} crumb={{href:'/',label:p.crumb}} lead={<p>{t.firm}</p>}/>
<section className="section container">
  <div className="team-page">
    <div className="team-aside"><FounderPortrait/><QuoteBlock/></div>
    <div>
      <Tag>{p.pathTag}</Tag>
      <Reveal><p className="prose-lead" style={{marginTop:24}}>{p.lead}</p></Reveal>
      <div className="cert-grid">{p.certs.map((c,n)=>{const Icon=certIcons[n]??Award;return <Reveal key={c} delay={n*.08}><div className="cert"><span className="cert-ico"><Icon size={20} strokeWidth={1.7}/></span><small>{p.certSmall}</small><strong>{c}</strong></div></Reveal>})}</div>
      <Reveal className="prose" delay={.05}><p style={{marginTop:36}}>{p.p1}</p><p>{p.p2}</p></Reveal>
      <h2 className="block-title">{p.pathTitle}</h2>
      <Timeline items={p.path}/>
      <div style={{marginTop:44}}><Btn href="/contact/">{p.cta}</Btn></div>
    </div>
  </div>
</section>
</main><Footer/></div>;
}

export function ContactView({lang}:{lang:Lang}){
  const t=dicts[lang];const p=t.contactPage;
  return <div id="top"><Header/><main id="main">
<PageHero tag={p.tag} title={p.title} tone={p.tone} crumb={{href:'/',label:t.teamPage.crumb}} lead={<p>{p.lead}</p>}/>
<section className="section container">
  <div className="contact-wrap">
    <Reveal className="contact-card"><Dots/><h2>{p.cardTitle}</h2><p>{p.cardText}</p><ContactList dark/></Reveal>
    <Reveal delay={.1} className="form-card"><ContactForm/></Reveal>
  </div>
</section>
</main><Footer/></div>;
}

const fmtIcons=[Mic,Video,Users,CalendarDays];
export function EventsView({lang}:{lang:Lang}){
  const t=dicts[lang];const p=t.eventsPage;
  return <div id="top"><Header/><main id="main">
<PageHero tag={p.tag} title={p.title} tone={p.tone} crumb={{href:'/',label:t.teamPage.crumb}} lead={<><p>{p.lead}</p><span className="soon"><i/>{p.soon}</span></>}/>
<section className="section container">
  <div className="fmt-grid">{p.formats.map(({t:ti,d},n)=>{const Icon=fmtIcons[n]??Mic;return <Reveal key={ti} delay={n*.07} className="fmt-wrap"><div className="fmt"><div className="svc-notch"><span className="svc-ico"><Icon size={22} strokeWidth={1.7}/></span></div><h3>{ti}</h3><p>{d}</p></div></Reveal>})}</div>
</section>
<section className="cta" style={{marginBottom:0}}>
  <Dots className="cta-dots"/>
  <div className="container cta-grid">
    <div><Tag dark>{p.inviteTag}</Tag><Title className="h2 on-dark" parts={[{t:p.inviteTitle,br:true},{t:p.inviteTone,tone:true}]}/></div>
    <div><Btn href="/contact/" variant="gold">{p.inviteCta}</Btn></div>
  </div>
</section>
</main><Footer/></div>;
}

export function ArticlesView({lang}:{lang:Lang}){
  const t=dicts[lang];const p=t.articlesPage;const articles=getArticles().map(a=>toCard(a,lang));
  return <div id="top"><Header/><main id="main">
<PageHero tag={p.tag} title={p.title} tone={p.tone} crumb={{href:'/',label:t.teamPage.crumb}} lead={<p>{p.lead}</p>}/>
<section className="section container">{articles.length?<ArticlesBrowser articles={articles}/>:<div className="empty"><h2>{p.emptyTitle}</h2><p>{p.emptyText}</p></div>}</section>
</main><Footer/></div>;
}

export function NotFoundView({lang}:{lang:Lang}){
  const n=dicts[lang].notFound;
  return <><Header/><main id="main"><PageHero tag={n.tag} title={n.title} tone={n.tone} lead={<><p>{n.lead}</p><div style={{marginTop:28}}><Btn href="/" variant="gold">{n.cta}</Btn></div></>}/></main><Footer/></>;
}
