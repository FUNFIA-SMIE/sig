
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
    'index.csr.html': {size: 5636, hash: '20423211f4e36bb962cb30a0e0a499ca4f35d10e41cd1e6ad80c2c0df358cedb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: '10e4b3299e5a51c51c3ed5720841478356ad954c54ca363701698a863f0fb53d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52625, hash: '765d6c7b0d0f11c507b25ddd7a3f9a7be0314d6e474ac0b3c5340483096f10b1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-J2P2SHBL.css': {size: 22439, hash: 'lzsWiTCfl7U', text: () => import('./assets-chunks/styles-J2P2SHBL_css.mjs').then(m => m.default)}
  },
};
