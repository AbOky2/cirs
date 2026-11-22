import {ContactView} from '@/views/pages';
import {dicts,pageMeta} from '@/lib/i18n';
export const metadata=pageMeta('en','/contact/',dicts.en.meta.contactTitle,dicts.en.meta.contactDesc);
export default function Page(){return <ContactView lang="en"/>}
