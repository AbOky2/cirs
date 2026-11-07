'use client';
import {createContext,useContext} from 'react';
import {getDict} from '@/lib/content';
import {localize,type Lang} from '@/lib/i18n';

const LangContext=createContext<Lang>('fr');
export function LangProvider({lang,children}:{lang:Lang;children:React.ReactNode}){return <LangContext.Provider value={lang}>{children}</LangContext.Provider>}
/** Langue courante, dictionnaire et fonction de lien localisé. */
export function useLang(){
  const lang=useContext(LangContext);
  return {lang,t:getDict(lang),href:(p:string)=>localize(lang,p)};
}
