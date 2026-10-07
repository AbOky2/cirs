import {Award,Landmark,ScanSearch} from 'lucide-react';
import {Header,Footer,PageHero,Btn,Tag} from '@/components/site';
import {FounderPortrait,QuoteBlock,Timeline} from '@/components/home';
import {Reveal} from '@/components/motion';
import {founder} from '@/lib/content';
export const metadata={title:'Équipe — CIRS-Conseil Inc.',description:'Hassan Ahmat Djamaladine, PDG de CIRS-Conseil Inc., cabinet de conseil canado-québécois en stratégie et affaires publiques.'};
const certIcons=[ScanSearch,Award,Landmark];
const path=[
  {t:'Formation en administration publique',d:'Institut d’études politiques (IEP) de Fontainebleau, France.'},
  {t:'Maîtrise, concentration internationale',d:'École nationale d’administration publique (ENAP), Québec, Canada.'},
  {t:'Réflexion stratégique internationale',d:'Une large expérience au service des organisations, développée au sein du think tank Cercle international de réflexions stratégiques (CIRS).'},
  {t:'PDG de CIRS-Conseil Inc.',d:'Cabinet de conseil canado-québécois en stratégie et affaires publiques, indépendant du think tank CIRS.'}
];
export default function Page(){return <div id="top"><Header/><main id="main">
<PageHero size="md" tag="Équipe" title={founder.name} tone={'PDG de CIRS-Conseil\u00a0Inc.'} crumb={{href:'/',label:'Accueil'}} lead={<p>{founder.firm}</p>}/>
<section className="section container">
  <div className="team-page">
    <div className="team-aside"><FounderPortrait/><QuoteBlock/></div>
    <div>
      <Tag>Parcours du PDG</Tag>
      <Reveal><p className="prose-lead" style={{marginTop:24}}>Hassan Ahmat Djamaladine est certifié en intelligence économique, en évaluation des politiques publiques et en métiers du pouvoir.</p></Reveal>
      <div className="cert-grid">{founder.certifications.map((c,n)=>{const Icon=certIcons[n]??Award;return <Reveal key={c} delay={n*.08}><div className="cert"><span className="cert-ico"><Icon size={20} strokeWidth={1.7}/></span><small>Certifié en</small><strong>{c}</strong></div></Reveal>})}</div>
      <Reveal className="prose" delay={.05}><p style={{marginTop:36}}>Il est formé en administration publique entre l’Institut d’études politiques (IEP) de Fontainebleau (France) et l’École nationale d’administration publique (ENAP) au Québec (Canada), où il a suivi une maîtrise, concentration internationale.</p><p>Il dispose d’une large expérience en réflexion stratégique internationale au service des organisations, développée au sein du think tank Cercle international de réflexions stratégiques (CIRS), dont CIRS-Conseil Inc. est indépendant.</p></Reveal>
      <h2 className="block-title">Parcours</h2>
      <Timeline items={path}/>
      <div style={{marginTop:44}}><Btn href="/contact/">Échanger avec notre PDG</Btn></div>
    </div>
  </div>
</section>
</main><Footer/></div>}
