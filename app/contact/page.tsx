import {Header,Footer,PageIntro,ContactForm} from '@/components/site';
import {contact} from '@/lib/content';
export const metadata={title:'Contact — CIRS-Conseil Inc.'};
export default function Page(){return <div id="top"><Header/><main id="main">
<PageIntro label="Contact" crumb="/" title={<>Parlons de<br/>vos enjeux.</>}><p>Affaires publiques, conseil en affaires, relations publiques, environnement ou management : décrivez votre besoin, nous revenons vers vous.</p></PageIntro>
<section className="block wrap contact-page">
  <div className="rail"><dl className="contact-facts stacked">
    <div><dt>Courriel</dt><dd><a href={'mailto:'+contact.email}>{contact.email}</a></dd></div>
    <div><dt>Téléphone</dt><dd><a href={contact.phoneHref}>{contact.phone}</a></dd></div>
    <div><dt>WhatsApp</dt><dd><a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer">{contact.whatsapp}</a></dd></div>
    <div><dt>Implantation</dt><dd>{contact.locations.join(' · ')}<br/>{contact.remote}</dd></div>
  </dl></div>
  <div className="block-body"><ContactForm/></div>
</section>
</main><Footer/></div>}
