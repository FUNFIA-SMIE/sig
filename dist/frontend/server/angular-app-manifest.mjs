
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
    'index.csr.html': {size: 5636, hash: '4f19ba78ec9665de7992517d85ca0c8bb6700ef3a30551f49a8556b8194ecb22', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: '41df206f7d899751bf03a2ca69cc3da81decb5f7b6e91fdfcfe67056c3b17f3f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52625, hash: '00c1882d1c82dd502366db21a1c82370f42327d18935ce53efd3a06783ffa0e4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-J2P2SHBL.css': {size: 22439, hash: 'lzsWiTCfl7U', text: () => import('./assets-chunks/styles-J2P2SHBL_css.mjs').then(m => m.default)}
  },
};
