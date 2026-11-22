import {ContactView} from '@/views/pages';
import {dicts,pageMeta} from '@/lib/i18n';
export const metadata=pageMeta('fr','/contact/',dicts.fr.meta.contactTitle,dicts.fr.meta.contactDesc);
export default function Page(){return <ContactView lang="fr"/>}
