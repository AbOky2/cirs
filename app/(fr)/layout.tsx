import type {Metadata} from 'next';
import {RootShell} from '@/components/root';
import {dicts} from '@/lib/i18n';
export {viewport} from '@/components/root';
export const metadata:Metadata={title:dicts.fr.meta.homeTitle,description:dicts.fr.meta.homeDesc,icons:{icon:'/cirs-logo.png'}};
export default function Layout({children}:Readonly<{children:React.ReactNode}>){return <RootShell lang="fr">{children}</RootShell>}
