
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
    'index.csr.html': {size: 5636, hash: '70d8e2c22136a139cd0b9709ab9eff00f3259f77f6f96e3a77599c76866d6cf6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: 'f886638e48f9bf1565d5241707809fedcfda55c75e9d0d0786cb98947fcd7470', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 50445, hash: '17258aa931199d82dbc97cb5107f93ae7d495753fd398d83362068e0e2dc6bae', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-J2P2SHBL.css': {size: 22439, hash: 'lzsWiTCfl7U', text: () => import('./assets-chunks/styles-J2P2SHBL_css.mjs').then(m => m.default)}
  },
};
