
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
    'index.csr.html': {size: 5636, hash: '456e6e99f3a0fac889f498939e3d4818da24b4c51e9ac3f8bbb8e315f2ad1318', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: '3f7e41841e34ad0b336fda8eea50d65787be9b5d65d3234955671d3f3bcf86b6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 52625, hash: '2f9809e7e318a014353a305cdf965218ee7a1658e7f38c7b799d4b45edf6b41a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-J2P2SHBL.css': {size: 22439, hash: 'lzsWiTCfl7U', text: () => import('./assets-chunks/styles-J2P2SHBL_css.mjs').then(m => m.default)}
  },
};
