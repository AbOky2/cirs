// Fonctions pures, utilisables côté client comme côté serveur.
import {dateLocale,type Lang} from './i18n';
export function formatDate(iso:string,lang:Lang='fr'){return iso?new Intl.DateTimeFormat(dateLocale[lang],{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'}).format(new Date(iso)):''}
export function readingTime(md:string){return Math.max(1,Math.round(md.split(/\s+/).length/220))}
