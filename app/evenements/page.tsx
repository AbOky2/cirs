import Link from 'next/link';
import {Header,Footer,PageIntro,ArrowRight} from '@/components/site';
export const metadata={title:'Conférences & événements — CIRS-Conseil Inc.'};
const formats=[['Conférences & interventions','Un regard stratégique pour éclairer les enjeux internationaux de vos équipes et de vos publics.'],['Webinaires','Un format accessible pour comprendre les évolutions géopolitiques, économiques et institutionnelles.'],['Tables rondes','Croiser les perspectives et mettre les enjeux en discussion.'],['Rencontres CIRS-Conseil','Des rencontres consacrées aux mutations de l’environnement international.']];
export default function Page(){return <div id="top"><Header/><main id="main">
<PageIntro label="Événements" crumb="/" title={<>Faire dialoguer<br/>les idées et l’action.</>}><p>Le programme sera annoncé prochainement. Aucun événement n’est prévu pour le moment.</p></PageIntro>
<section className="block wrap">
  <div className="rail"><span className="label">Formats</span></div>
  <div className="block-body"><ol className="index-list">{formats.map(([t,d],i)=><li key={t}><span className="index-num">{String(i+1).padStart(2,'0')}</span><h3>{t}</h3><p>{d}</p></li>)}</ol><Link className="link block-cta" href="/contact/">Inviter CIRS-Conseil à intervenir <ArrowRight size={17} strokeWidth={1.5}/></Link></div>
</section>
</main><Footer/></div>}
