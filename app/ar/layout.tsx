import type {Metadata} from 'next';
// Polices arabes auto-hébergées.
import '@fontsource-variable/readex-pro/wght.css';
import '@fontsource-variable/noto-sans-arabic/wght.css';
import {RootShell} from '@/components/root';
import {dicts} from '@/lib/i18n';
export {viewport} from '@/components/root';
export const metadata:Metadata={title:dicts.ar.meta.homeTitle,description:dicts.ar.meta.homeDesc,icons:{icon:'/cirs-logo.png'}};
export default function Layout({children}:Readonly<{children:React.ReactNode}>){return <RootShell lang="ar">{children}</RootShell>}
