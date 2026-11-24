'use client';
import {createContext,useContext} from 'react';
import {MotionConfig} from 'framer-motion';
import {dicts,L,type Lang,type Dict} from '@/lib/i18n';

const LangCtx=createContext<Lang>('fr');
/** Langue courante et dictionnaire, pour les composants clients. */
export function useI18n():{lang:Lang;t:Dict;l:(p:string)=>string}{const lang=useContext(LangCtx);return {lang,t:dicts[lang],l:(p:string)=>L(lang,p)}}

// Respecte la préférence système « réduire les animations » pour toutes les animations Framer Motion.
export function Providers({lang,children}:{lang:Lang;children:React.ReactNode}){return <LangCtx.Provider value={lang}><MotionConfig reducedMotion="user" transition={{type:'spring',stiffness:260,damping:30}}>{children}</MotionConfig></LangCtx.Provider>}
