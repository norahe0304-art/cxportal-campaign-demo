/**
 * [INPUT]: One sanitized current app and stylesheet for every module.
 * [OUTPUT]: The current 5180-aligned frontend; no legacy route selection.
 * [POS]: Immutable public entry loader.
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
const css = document.createElement('link');
css.rel = 'stylesheet';
css.href = '/cxportal-campaign-demo/assets/current-ui-complete-20260929/index-BSRo4wjN.css';
await new Promise((resolve, reject) => {
  css.onload = resolve;
  css.onerror = () => reject(new Error('Unable to load demo styles'));
  document.head.append(css);
});
await import('/cxportal-campaign-demo/assets/current-ui-complete-20260929/index-b7e4ff19e9.js');
