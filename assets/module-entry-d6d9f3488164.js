/**
 * [INPUT]: Current pathname and sanitized KM, Flow Analyzer, Campaign and general application entries.
 * [OUTPUT]: Loads the reviewed KM and Flow Analyzer applications on their own routes; preserves Campaign and general applications elsewhere.
 * [POS]: GitHub Pages entry boundary; cross-module navigation starts a fresh document.
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
const legacy = {"js": "/cxportal-campaign-demo/assets/index-3303c8ea22.js", "css": ["/cxportal-campaign-demo/assets/index-YAGsJC08.css"]};
const knowledge = {"js": "/cxportal-campaign-demo/assets/index-59f84cea4f.js", "css": ["/cxportal-campaign-demo/assets/index-BtyoLLG9.css"]};
const campaign = {"js": "/cxportal-campaign-demo/assets/index-72b1feae75.js", "css": ["/cxportal-campaign-demo/assets/index-DOhPUeDh.css"]};
const analyzer = {"js": "/cxportal-campaign-demo/assets/index-b8cf6b114c.js", "css": ["/cxportal-campaign-demo/assets/index-DOhPUeDh.css"]};
const entryFor = pathname => {
  if (/^\/cxportal-campaign-demo\/demo\/flow-analyzer(?:\/|$)/.test(pathname)) return analyzer;
  if (/^\/cxportal-campaign-demo\/demo\/knowledge-management(?:\/|$)/.test(pathname)) return knowledge;
  if (/^\/cxportal-campaign-demo\/demo\/campaign-management(?:-voice-sms)?(?:\/|$)/.test(pathname)) return campaign;
  return legacy;
};
const selected = entryFor(location.pathname);

for (const method of ['pushState', 'replaceState']) {
  const original = history[method].bind(history);
  history[method] = function(state, title, url) {
    if (url != null) {
      const destination = new URL(url, location.href);
      if (destination.origin === location.origin && entryFor(destination.pathname).js !== selected.js) {
        location[method === 'replaceState' ? 'replace' : 'assign'](destination.href);
        return;
      }
    }
    return original(state, title, url);
  };
}
addEventListener('popstate', () => {
  if (entryFor(location.pathname).js !== selected.js) location.reload();
});

await Promise.all(selected.css.map(href => new Promise((resolve, reject) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.onload = resolve;
  link.onerror = () => reject(new Error('Unable to load demo stylesheet'));
  document.head.append(link);
})));
await import(selected.js);
