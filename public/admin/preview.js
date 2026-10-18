// Aperçu des articles dans l'espace de rédaction : reprend la page /articles/<slug>/ du site
// (bandeau marine, rubrique, titre, résumé, auteur, date, couverture, texte). Styles : preview.css.
/* global CMS, createClass, h */
CMS.registerPreviewStyle('/admin/preview.css');

function formatDate(value) {
  if (!value) return '';
  const d = new Date(value);
  if (isNaN(d)) return '';
  return new Intl.DateTimeFormat('fr-CA', {day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'}).format(d);
}

function readingTime(md) {
  return Math.max(1, Math.round(String(md || '').split(/\s+/).length / 220));
}

const ArticlePreview = createClass({
  render() {
    const data = this.props.entry.get('data');
    const cover = data.get('cover');
    const coverUrl = cover ? String(this.props.getAsset(cover)) : '';
    const summary = data.get('summary');
    return h('article', {},
      h('section', {className: 'phero'},
        h('div', {className: 'phero-panel'},
          h('a', {className: 'crumb'}, '← Tous les articles'),
          h('span', {className: 'tag'}, h('span', {className: 'tag-dot'}), data.get('category') || 'Rubrique'),
          h('h1', {className: 'phero-title'}, data.get('title') || 'Titre de l’article'),
          summary ? h('p', {className: 'phero-lead'}, summary) : null,
          h('div', {className: 'article-meta'},
            h('span', {}, data.get('author') || ''),
            h('span', {}, formatDate(data.get('date'))),
            h('span', {}, readingTime(data.get('body')) + ' min de lecture')
          ),
          data.get('draft') ? h('span', {className: 'draft'}, 'Brouillon — non publié sur le site') : null
        )
      ),
      coverUrl ? h('div', {className: 'article-cover'}, h('img', {src: coverUrl, alt: ''})) : null,
      h('div', {className: 'article-body'}, this.props.widgetFor('body'))
    );
  }
});

CMS.registerPreviewTemplate('articles', ArticlePreview);
