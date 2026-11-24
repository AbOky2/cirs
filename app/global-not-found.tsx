// Page 404 globale (plusieurs racines linguistiques : aucune mise en page commune à réutiliser).
import type {Metadata} from 'next';
import {RootShell} from '@/components/root';
import {NotFoundView} from '@/views/pages';
export const metadata:Metadata={title:'404 — CIRS-Conseil Inc.'};
export default function GlobalNotFound(){return <RootShell lang="fr"><NotFoundView lang="fr"/></RootShell>}
