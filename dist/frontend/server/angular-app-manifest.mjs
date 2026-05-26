
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
    'index.csr.html': {size: 4029, hash: '710d8abd509eb8e9a3e04b9e10a17f1d7589408a54524334c72fad8f53d46a8c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 997, hash: '63ab07514601d8e58b8763066d58198c27a2afeffd2938cff9f9a469a59b37a9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 34462, hash: '877dbf6ddb3ad282d931af47ee3d8f5814a4f4d2be2d779f02178a23f9fb5f88', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-SPS2HT3Y.css': {size: 18795, hash: '9EkyHqMrp/4', text: () => import('./assets-chunks/styles-SPS2HT3Y_css.mjs').then(m => m.default)}
  },
};
