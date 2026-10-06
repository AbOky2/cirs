import type {Metadata,Viewport} from 'next';
// Polices auto-hébergées : aucune requête vers un service tiers (Loi 25 / RGPD).
import '@fontsource-variable/outfit/wght.css';
import '@fontsource-variable/instrument-sans/wght.css';
import './globals.css';
import {Providers} from '@/components/providers';
export const metadata:Metadata={title:'CIRS-Conseil Inc. — Anticiper. Comprendre. Décider.',description:'CIRS-Conseil Inc., cabinet de conseil canado-québécois en stratégie et affaires publiques : veille stratégique et intelligence économique, analyse géopolitique, analyse des risques, communication stratégique et évaluation des politiques publiques.',icons:{icon:'/cirs-logo.png'}};
export const viewport:Viewport={themeColor:'#081430'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="fr-CA"><body><a className="skip-link" href="#main">Aller au contenu</a><Providers>{children}</Providers></body></html>}
