import {Header,Footer,PageHero,ContactForm,ContactList,Dots} from '@/components/site';
import {Reveal} from '@/components/motion';
export const metadata={title:'Contact — CIRS-Conseil Inc.',description:'Écrivez à CIRS-Conseil Inc. ou appelez-nous : stratégie et affaires publiques, Québec, Canada.'};
export default function Page(){return <div id="top"><Header/><main id="main">
<PageHero tag="Contact" title="Parlons de" tone="vos enjeux." crumb={{href:'/',label:'Accueil'}} lead={<p>Affaires publiques, conseil en affaires, relations publiques, environnement stratégique ou management : décrivez votre besoin, nous revenons vers vous.</p>}/>
<section className="section container">
  <div className="contact-wrap">
    <Reveal className="contact-card"><Dots/><h2>Une question, un projet ?</h2><p>Écrivez-nous ou appelez-nous directement. Le formulaire prépare un courriel dans votre messagerie.</p><ContactList dark/></Reveal>
    <Reveal delay={.1} className="form-card"><ContactForm/></Reveal>
  </div>
</section>
</main><Footer/></div>}
