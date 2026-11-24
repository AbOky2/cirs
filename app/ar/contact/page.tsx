import {ContactView} from '@/views/pages';
import {dicts,pageMeta} from '@/lib/i18n';
export const metadata=pageMeta('ar','/contact/',dicts.ar.meta.contactTitle,dicts.ar.meta.contactDesc);
export default function Page(){return <ContactView lang="ar"/>}
