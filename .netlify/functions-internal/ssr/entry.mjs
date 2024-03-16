import { renderers } from './renderers.mjs';
import { manifest } from './manifest_B_UlmMhM.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_2ONfLqD_.mjs');
const _page1 = () => import('./chunks/404_BT9i9S54.mjs');
const _page2 = () => import('./chunks/about_CtZJjViJ.mjs');
const _page3 = () => import('./chunks/contact_Cw-bQwNt.mjs');
const _page4 = () => import('./chunks/gallery_C5B7wSOD.mjs');
const _page5 = () => import('./chunks/services_qBWG3zIJ.mjs');
const _page6 = () => import('./chunks/index_C5gGlwbB.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/gallery.astro", _page4],
    ["src/pages/services.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "c4d86993-5b49-4f20-86ad-a093b6da7694"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
