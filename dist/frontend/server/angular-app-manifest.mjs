
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
    'index.csr.html': {size: 5626, hash: '82d2396abaecac6839486d880fb72246e7a6a4e38ced8214d3ab46598d9ae07f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '80e0bb836bb0c5aa1b651563913aebc392ab88273b56ba61f25e17d67c042099', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 53287, hash: '5bf830326a835c99c3095a3bfe81e38f7b4c8740fb39e8d9a0420e55e64a484d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DCBSN3S6.css': {size: 22359, hash: 'o2pS6XjtfA4', text: () => import('./assets-chunks/styles-DCBSN3S6_css.mjs').then(m => m.default)}
  },
};
