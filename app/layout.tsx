import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'CIRS-Conseil Inc. — Anticiper. Comprendre. Décider.',description:'CIRS-Conseil Inc., cabinet de conseil canado-québécois en stratégie et affaires publiques : veille et intelligence économique, analyse géopolitique, affaires publiques, conseil en affaires et en management.',icons:{icon:'/cirs-logo.png'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="fr-CA"><body><a className="skip-link" href="#main">Aller au contenu</a>{children}</body></html>}
