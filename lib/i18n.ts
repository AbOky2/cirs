// Langues du site : le français est servi à la racine (URL historiques inchangées),
// l’anglais sous /en/ et l’arabe (de droite à gauche) sous /ar/.
export const langs=['fr','en','ar'] as const;
export type Lang=typeof langs[number];
export const intlLangs=['en','ar'] as const;
export const isLang=(v:string):v is Lang=>(langs as readonly string[]).includes(v);
export const htmlLang:Record<Lang,string>={fr:'fr-CA',en:'en-CA',ar:'ar'};
export const dateLocale:Record<Lang,string>={fr:'fr-CA',en:'en-CA',ar:'ar-u-nu-latn'};
export const dirOf=(l:Lang)=>l==='ar'?'rtl':'ltr';
export const langNames:Record<Lang,{short:string;long:string}>={fr:{short:'FR',long:'Français'},en:{short:'EN',long:'English'},ar:{short:'ع',long:'العربية'}};
export const siteUrl='https://cirsconseil.org';

/** Préfixe un chemin interne avec la langue (« /equipe/ » → « /en/equipe/ »). */
export function localize(lang:Lang,path:string){
  if(lang==='fr'||!path.startsWith('/'))return path;
  return `/${lang}${path}`;
}
/** Retire le préfixe de langue d’un chemin (« /ar/contact/ » → « /contact/ »). */
export function stripLang(path:string){
  const m=path.match(/^\/(en|ar)(\/.*|$)/);
  return m?(m[2]||'/'):path;
}
/** Pages qui existent dans toutes les langues (les articles détaillés restent en français). */
export function switchPath(path:string,to:Lang){
  const base=stripLang(path);
  const shared=['/','/equipe/','/contact/','/evenements/','/articles/'];
  const target=shared.includes(base)?base:base.startsWith('/articles/')?(to==='fr'?base:'/articles/'):'/';
  return localize(to,target);
}
/** Métadonnées hreflang d’une page disponible dans les trois langues. */
export function alternates(lang:Lang,path:string){
  return {canonical:localize(lang,path),languages:{'fr-CA':path,'en-CA':`/en${path}`,ar:`/ar${path}`,'x-default':path}};
}
