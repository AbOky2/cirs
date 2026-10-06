import Link from 'next/link';
import {Header,Footer,PageIntro,ArrowRight} from '@/components/site';
import {founder,quote} from '@/lib/content';
export const metadata={title:'Équipe — CIRS-Conseil Inc.',description:'Hassan Ahmat Djamaladine, PDG de CIRS-Conseil Inc., cabinet de conseil canado-québécois en stratégie et affaires publiques.'};
export default function Page(){return <div id="top"><Header/><main id="main">
<PageIntro label="Équipe" crumb="/" title={<>Hassan Ahmat<br/>Djamaladine</>}><p>{founder.role}</p></PageIntro>
<section className="block wrap team">
  <div className="rail"><img className="team-photo" src="/fondateur.webp" alt={'Portrait de '+founder.name} width="112" height="148"/></div>
  <div className="block-body team-body">
    <div className="team-certs"><span className="sub-label">Certifié en</span><ul className="plain-list">{founder.certifications.map(c=><li key={c}><strong>{c}</strong></li>)}</ul></div>
    <div className="team-text">
      <h2 className="sub-label">Parcours du PDG</h2>
      <p className="lead">Hassan Ahmat Djamaladine est certifié en intelligence économique, en évaluation des politiques publiques et en métiers du pouvoir.</p>
      <p>Il est formé en administration publique entre l’Institut d’études politiques (IEP) de Fontainebleau (France) et l’École nationale d’administration publique (ENAP) au Québec (Canada), où il a suivi une maîtrise, concentration internationale.</p>
      <p>Il dispose d’une large expérience en réflexion stratégique internationale au service des organisations, développée au sein du think tank Cercle international de réflexions stratégiques (CIRS), dont CIRS-Conseil Inc. est indépendant.</p>
      <figure className="inline-quote"><blockquote>« {quote.text} »</blockquote><figcaption>{quote.author}</figcaption></figure>
      <Link className="link" href="/contact/">Échanger avec Hassan Ahmat Djamaladine <ArrowRight size={17} strokeWidth={1.5}/></Link>
    </div>
  </div>
</section>
</main><Footer/></div>}
