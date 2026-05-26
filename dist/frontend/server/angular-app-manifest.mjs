
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
    'index.csr.html': {size: 5615, hash: 'afaf7ef830f11642ddd9e30690a9e299573e9b189a336731a8c40fd05756d62e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 997, hash: 'dd5dc2e29d402c97d371f979a738eb2d7ba3146b96760f563b251597d8c99166', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 36129, hash: '87e0d31457116b91f4c94678f5d3d2454c919aa50f1fe0fd3ff146db71935bb4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DCBSN3S6.css': {size: 22359, hash: 'o2pS6XjtfA4', text: () => import('./assets-chunks/styles-DCBSN3S6_css.mjs').then(m => m.default)}
  },
};
