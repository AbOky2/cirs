import {fr,type Dict} from './fr';
import {en} from './en';
import {ar} from './ar';
export type Lang='fr'|'en'|'ar';
export type {Dict};
export const langs:Lang[]=['fr','en','ar'];
export const dicts:Record<Lang,Dict>={fr,en,ar};
export const prefix=(lang:Lang)=>lang==='fr'?'':'/'+lang;
/** Préfixe un chemin interne avec la langue : '/contact/' → '/en/contact/', '/#expertises' → '/en/#expertises'. */
export const L=(lang:Lang,path:string)=>path.startsWith('/')?prefix(lang)+path:path;
/** Langue et chemin neutre d’une URL : '/en/equipe/' → ['en','/equipe/']. */
export function splitPath(pathname:string):[Lang,string]{
  const m=pathname.match(/^\/(en|ar)(\/.*|$)/);
  return m?[m[1] as Lang,m[2]||'/']:['fr',pathname||'/'];
}
/** Remplace {cle} dans une chaîne. */
export const fill=(s:string,v:Record<string,string>)=>s.replace(/\{(\w+)\}/g,(_,k)=>v[k]??'');
/** Métadonnées avec liens hreflang vers les trois versions. */
export function pageMeta(lang:Lang,path:string,title:string,description:string){
  return {title,description,alternates:{canonical:L(lang,path),languages:{'fr-CA':path,'en-CA':L('en',path),ar:L('ar',path),'x-default':path}}};
}
