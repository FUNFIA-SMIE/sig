
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
    'index.csr.html': {size: 5636, hash: '2b0136ba446a418403c6bea392e749632aeae41de4740d98730e20ca6ad5f9bd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: '32cfb9c1c129d1cced690ed10beaf2bbe2f2d2a1f0c5c83f561b5379a5a1e099', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 50184, hash: '75e03a53f8b5695ac7de16ee5de1fb62da7421707144a61c185e102f72521da1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-J2P2SHBL.css': {size: 22439, hash: 'lzsWiTCfl7U', text: () => import('./assets-chunks/styles-J2P2SHBL_css.mjs').then(m => m.default)}
  },
};
