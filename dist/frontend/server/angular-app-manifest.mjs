
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
    'index.csr.html': {size: 5615, hash: '3dda0f205dd9376b104f83632eeedc68ca975c815d2d238126d25bafab6799d1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 997, hash: 'dff8fbfaada9fcc1610ceabddd4dfeee6afd698fa5072cf006317a06dd8a5cac', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 36129, hash: 'd5e7486b4c34464e76e68fa5ef5f9945b69672442563695e2bfd942ea303b327', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DCBSN3S6.css': {size: 22359, hash: 'o2pS6XjtfA4', text: () => import('./assets-chunks/styles-DCBSN3S6_css.mjs').then(m => m.default)}
  },
};
