/**
 * [INPUT]: Current pathname and sanitized refreshed, KM, Campaign and general application entries.
 * [OUTPUT]: Loads the refreshed library and ten modules; preserves accepted KM, Voice/SMS and other existing modules.
 * [POS]: GitHub Pages entry boundary; cross-module navigation starts a fresh document.
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
const legacy = {"js": "/cxportal-campaign-demo/assets/index-3303c8ea22.js", "css": ["/cxportal-campaign-demo/assets/index-YAGsJC08.css"]};
const knowledge = {"js": "/cxportal-campaign-demo/assets/index-6ada951632.js", "css": ["/cxportal-campaign-demo/assets/index-BtyoLLG9.css"]};
const campaign = {"js": "/cxportal-campaign-demo/assets/index-72b1feae75.js", "css": ["/cxportal-campaign-demo/assets/index-DOhPUeDh.css"]};
const refreshed = {"js": "/cxportal-campaign-demo/assets/editorial-20260929/index-fbae797b0d.js", "css": ["/cxportal-campaign-demo/assets/editorial-20260929/index-BSRo4wjN.css"]};
const refreshedSlugs = new Set(["campaign-management", "access-management", "user-management", "bulk-agent-management", "cases", "change-management-audit-log", "dynamic-flow-configurator", "flow-analyzer", "proficiency-based-routing", "q-in-connect"]);
const entryFor = pathname => {
  const slug = pathname.match(/^\/cxportal-campaign-demo\/demo\/([^/]+)/)?.[1];
  if (!slug || refreshedSlugs.has(slug)) return refreshed;
  if (slug === 'knowledge-management') return knowledge;
  if (slug === 'campaign-management-voice-sms') return campaign;
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
