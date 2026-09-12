import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'CIRS Conseil — Anticiper. Comprendre. Décider.',description:'Firme québécoise de conseil stratégique. Analyse internationale, veille stratégique, risques et opportunités pour éclairer vos décisions.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="fr"><body><a className="skip-link" href="#main">Aller au contenu</a>{children}</body></html>}
