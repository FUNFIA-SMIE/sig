
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
    'index.csr.html': {size: 5636, hash: '1690623f062a442d477f50d5c48d2fb0673e114d72ce25db14543a886b5d32f9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1018, hash: '51059efaae8cd29b8906806ab6635c34abe37da845fbcd32286b617bb81c14b5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 53296, hash: '1b760e0fc03fa6be3f199b650b9be8b4061a1daf7cd07982da38f6c6aae0a340', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DCBSN3S6.css': {size: 22359, hash: 'o2pS6XjtfA4', text: () => import('./assets-chunks/styles-DCBSN3S6_css.mjs').then(m => m.default)}
  },
};
