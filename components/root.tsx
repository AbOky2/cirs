// Gabarit HTML commun aux trois racines linguistiques (français, anglais, arabe).
import '@fontsource-variable/outfit/wght.css';
import '@fontsource-variable/instrument-sans/wght.css';
import '@/app/globals.css';
import {Providers} from '@/components/providers';
import {dicts,type Lang} from '@/lib/i18n';
export function RootShell({lang,children}:{lang:Lang;children:React.ReactNode}){
  const t=dicts[lang];
  return <html lang={t.htmlLang} dir={t.dir}><body><a className="skip-link" href="#main">{t.nav.skip}</a><Providers lang={lang}>{children}</Providers></body></html>;
}
export const viewport={themeColor:'#081430'};
