// Coquille HTML commune aux trois langues (racines « (fr) » et « [lang] », page 404 globale).
// Polices auto-hébergées : aucune requête vers un service tiers (Loi 25 / RGPD).
import '@fontsource-variable/outfit/wght.css';
import '@fontsource-variable/instrument-sans/wght.css';
import '@fontsource-variable/noto-kufi-arabic/wght.css';
import '@fontsource-variable/noto-sans-arabic/wght.css';
import '@/app/globals.css';
import {Providers} from '@/components/providers';
import {LangProvider} from '@/components/i18n';
import {getDict} from '@/lib/content';
import {dirOf,htmlLang,type Lang} from '@/lib/i18n';

export function Document({lang,children}:{lang:Lang;children:React.ReactNode}){
  return <html lang={htmlLang[lang]} dir={dirOf(lang)}><body><a className="skip-link" href="#main">{getDict(lang).ui.skip}</a><LangProvider lang={lang}><Providers>{children}</Providers></LangProvider></body></html>;
}
