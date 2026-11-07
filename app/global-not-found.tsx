import type {Metadata} from 'next';
import {Document} from '@/components/document';
import {NotFoundView} from '@/components/views';
// Page 404 commune aux racines française et traduites (plusieurs layouts racines).
export const metadata:Metadata={title:'Page introuvable — CIRS-Conseil Inc.',icons:{icon:'/cirs-logo.png'}};
export default function GlobalNotFound(){return <Document lang="fr"><NotFoundView lang="fr"/></Document>}
