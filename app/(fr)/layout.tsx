import type {Metadata,Viewport} from 'next';
import {Document} from '@/components/document';
import {pageMetadata} from '@/components/views';
// Racine française (URL historiques à la racine du site).
export const metadata:Metadata=pageMetadata('fr','home');
export const viewport:Viewport={themeColor:'#081430'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <Document lang="fr">{children}</Document>}
