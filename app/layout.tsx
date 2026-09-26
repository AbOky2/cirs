import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'CIRS Conseil — Anticiper. Comprendre. Décider.',description:'CIRS-Conseil.Inc, Cercle international de réflexions stratégiques. Firme québécoise de stratégie et d’affaires publiques : veille et intelligence économique, analyse géopolitique, affaires publiques, conseil en affaires et en management.',icons:{icon:'/cirs-logo.png'}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="fr-CA"><body><a className="skip-link" href="#main">Aller au contenu</a>{children}</body></html>}
