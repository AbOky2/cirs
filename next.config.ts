import type { NextConfig } from 'next';
// globalNotFound : la 404 globale est nécessaire avec plusieurs racines (français, /en, /ar).
const config: NextConfig = {output:'export', trailingSlash:true, images:{unoptimized:true}, experimental:{globalNotFound:true}};
export default config;
