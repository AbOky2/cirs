import {Header,Footer,PageIntro} from '@/components/site';
import {ArticleList} from '@/components/articles';
import {getArticles} from '@/lib/articles';
export const metadata={title:'Articles — CIRS-Conseil Inc.',description:'Analyses stratégiques, notes de politiques publiques et veille internationale de CIRS-Conseil Inc.'};
export default function Page(){const articles=getArticles();return <div id="top"><Header/><main id="main">
<PageIntro label="Articles" crumb="/" title={<>Comprendre aujourd’hui,<br/>éclairer demain.</>}><p>Analyses, notes stratégiques et veille sur les dynamiques qui façonnent votre environnement.</p></PageIntro>
<section className="block wrap"><div className="rail"><span className="label">{articles.length} {articles.length>1?'articles':'article'}</span></div><div className="block-body">{articles.length?<ArticleList articles={articles}/>:<p className="block-intro">Nos premiers articles sont à venir.</p>}</div></section>
</main><Footer/></div>}
