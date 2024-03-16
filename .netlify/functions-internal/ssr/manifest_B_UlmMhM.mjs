import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_Dhi2w44Q.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.querySelectorAll(\"[data-navLink]\");e.forEach(t=>{t.getAttribute(\"href\")===window.location.pathname&&t.setAttribute(\"aria-current\",\"page\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.DZ6NmSwU.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.querySelectorAll(\"[data-navLink]\");e.forEach(t=>{t.getAttribute(\"href\")===window.location.pathname&&t.setAttribute(\"aria-current\",\"page\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.DZ6NmSwU.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.querySelectorAll(\"[data-navLink]\");e.forEach(t=>{t.getAttribute(\"href\")===window.location.pathname&&t.setAttribute(\"aria-current\",\"page\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.DZ6NmSwU.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.querySelectorAll(\"[data-navLink]\");e.forEach(t=>{t.getAttribute(\"href\")===window.location.pathname&&t.setAttribute(\"aria-current\",\"page\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.DZ6NmSwU.css"}],"routeData":{"route":"/gallery","isIndex":false,"type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery.astro","pathname":"/gallery","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.querySelectorAll(\"[data-navLink]\");e.forEach(t=>{t.getAttribute(\"href\")===window.location.pathname&&t.setAttribute(\"aria-current\",\"page\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.DZ6NmSwU.css"}],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const e=document.querySelectorAll(\"[data-navLink]\");e.forEach(t=>{t.getAttribute(\"href\")===window.location.pathname&&t.setAttribute(\"aria-current\",\"page\")});\n"}],"styles":[{"type":"external","src":"/_astro/about.DZ6NmSwU.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/jesse/Sites/github/avalanche-hardwood-floors/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/jesse/Sites/github/avalanche-hardwood-floors/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/jesse/Sites/github/avalanche-hardwood-floors/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/jesse/Sites/github/avalanche-hardwood-floors/src/pages/gallery.astro",{"propagation":"none","containsHead":true}],["/Users/jesse/Sites/github/avalanche-hardwood-floors/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/jesse/Sites/github/avalanche-hardwood-floors/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/about.astro":"chunks/pages/about_DhtAb1Z9.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_DJxGCZgN.mjs","/src/pages/index.astro":"chunks/pages/index_CvYJmZ-V.mjs","/src/pages/services.astro":"chunks/pages/services_BnGF7d4U.mjs","\u0000@astrojs-manifest":"manifest_B_UlmMhM.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_2ONfLqD_.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_BT9i9S54.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_CtZJjViJ.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_Cw-bQwNt.mjs","\u0000@astro-page:src/pages/gallery@_@astro":"chunks/gallery_C5B7wSOD.mjs","\u0000@astro-page:src/pages/services@_@astro":"chunks/services_qBWG3zIJ.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_C5gGlwbB.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.CYj0Nljy.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/kitchen1.rchL_HY1.jpg","/_astro/logo-white.CGOpAD1V.svg","/_astro/logo.BUNOtshQ.svg","/_astro/about.DZ6NmSwU.css","/blog-placeholder-1.jpg","/blog-placeholder-2.jpg","/blog-placeholder-3.jpg","/blog-placeholder-4.jpg","/blog-placeholder-5.jpg","/blog-placeholder-about.jpg","/favicon.png","/favicon.svg","/logo.png","/new-vista-digital-starterkit.jpg","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff"],"buildFormat":"directory"});

export { manifest };
