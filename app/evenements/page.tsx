import {Mic,Video,Users,CalendarDays} from 'lucide-react';
import {Header,Footer,PageHero,Btn,Tag,Dots} from '@/components/site';
import {Reveal,Title} from '@/components/motion';
export const metadata={title:'Conférences & événements — CIRS-Conseil Inc.'};
const formats=[{icon:Mic,t:'Conférences & interventions',d:'Un regard stratégique pour éclairer les enjeux internationaux de vos équipes et de vos publics.'},{icon:Video,t:'Webinaires',d:'Un format accessible pour comprendre les évolutions géopolitiques, économiques et institutionnelles.'},{icon:Users,t:'Tables rondes',d:'Croiser les perspectives et mettre les enjeux en discussion.'},{icon:CalendarDays,t:'Rencontres CIRS-Conseil',d:'Des rencontres consacrées aux mutations de l’environnement international.'}];
export default function Page(){return <div id="top"><Header/><main id="main">
<PageHero tag="Événements" title="Faire dialoguer" tone="les idées et l’action." crumb={{href:'/',label:'Accueil'}} lead={<><p>Conférences, webinaires et tables rondes : faire dialoguer l’analyse et les réalités des organisations.</p><span className="soon"><i/>Programme annoncé prochainement</span></>}/>
<section className="section container">
  <div className="fmt-grid">{formats.map(({icon:Icon,t,d},n)=><Reveal key={t} delay={n*.07} className="fmt-wrap"><div className="fmt"><div className="svc-notch"><span className="svc-ico"><Icon size={22} strokeWidth={1.7}/></span></div><h3>{t}</h3><p>{d}</p></div></Reveal>)}</div>
</section>
<section className="cta" style={{marginBottom:0}}>
  <Dots className="cta-dots"/>
  <div className="container cta-grid">
    <div><Tag dark>Invitation</Tag><Title className="h2 on-dark" parts={[{t:'Inviter CIRS-Conseil',br:true},{t:'à intervenir.',tone:true}]}/></div>
    <div><Btn href="/contact/" variant="gold">Proposer une intervention</Btn></div>
  </div>
</section>
</main><Footer/></div>}
