
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5636, hash: '25dfe08578da9f8b6b38163d924a794b2d810043146724ea102ed63134758b9e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: 'f4d946fadffd0e0c2b02471160ed93ceeb088bb8af09f429cd57bd7ecf01b0f3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52918, hash: '4c20fae9e58ddad8c00c17dac5063d1ff262861b399060b366fc8b9ec49febdc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DCBSN3S6.css': {size: 22359, hash: 'o2pS6XjtfA4', text: () => import('./assets-chunks/styles-DCBSN3S6_css.mjs').then(m => m.default)}
  },
};
