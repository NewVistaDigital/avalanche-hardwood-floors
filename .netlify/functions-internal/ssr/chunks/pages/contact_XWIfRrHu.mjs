/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, h as addAttribute, j as renderComponent, u as unescapeHTML, l as Fragment, i as renderSlot } from '../astro_Dhi2w44Q.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './404_CXevywBV.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';
import 'clsx';


const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$4 = createAstro("https://example.com");
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "/Users/jesse/Sites/github/avalanche-hardwood-floors/node_modules/astro-icon/components/Icon.astro", void 0);

const $$Astro$3 = createAstro("https://example.com");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    text,
    href,
    style,
    icon,
    isFilled = true,
    borderVisible = false,
    classes,
    ...rest
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([
    classes,
    "btn-" + style,
    { filled: isFilled, bordered: borderVisible }
  ], "class:list")}${spreadAttributes(rest)}> ${icon && icon.side === "left" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon.name, "class": "inline mr-3 text-xl align-middle" })}`} ${renderSlot($$result, $$slots["default"], renderTemplate`${text}`)} ${icon && icon.side === "right" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon.name, "class": "inline ml-3 text-xl align-middle" })}`} </a>`;
}, "/Users/jesse/Sites/github/avalanche-hardwood-floors/src/components/ui/Button.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$HomeAbout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HomeAbout;
  return renderTemplate`${maybeRenderHead()}<section class="dark:bg-stone-950 py-12"> <div class="container mx-auto px-10 my-20 flex"> <div class="w-1/2"> <h3 class="text-xl font-extrabold">About us</h3> <h2 class="text-4xl font-bold">We’ve been working in the industry for 20 years</h2> </div> <div class="ml-auto"> ${renderComponent($$result, "Button", $$Button, { "text": "About us", "href": "/about", "classes": "btn-secondary" })} </div> </div> </section>`;
}, "/Users/jesse/Sites/github/avalanche-hardwood-floors/src/components/content/HomeAbout.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Form;
  return renderTemplate`${maybeRenderHead()}<section class="bg-white dark:bg-stone-900"> <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-stone-900 dark:text-white">Contact Us</h2> <p class="mb-8 lg:mb-16 font-light text-center text-stone-500 dark:text-stone-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p> <form action="#" class="space-y-8"> <div> <label for="email" class="block mb-2 text-sm font-medium text-stone-900 dark:text-stone-300">Your email</label> <input type="email" id="email" class="shadow-sm bg-stone-50 border border-stone-300 text-stone-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="you@gmail.com" required> </div> <div> <label for="subject" class="block mb-2 text-sm font-medium text-stone-900 dark:text-stone-300">Subject</label> <input type="text" id="subject" class="block p-3 w-full text-sm text-stone-900 bg-stone-50 rounded-lg border border-stone-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required> </div> <div class="sm:col-span-2"> <label for="message" class="block mb-2 text-sm font-medium text-stone-900 dark:text-stone-400">Your message</label> <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-stone-900 bg-stone-50 rounded-lg shadow-sm border border-stone-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea> </div> <button type="submit" class="btn-primary">Send message</button> </form> </div> </section>`;
}, "/Users/jesse/Sites/github/avalanche-hardwood-floors/src/components/ui/Form.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Form", $$Form, {})} ${renderComponent($$result2, "About", $$HomeAbout, {})} ` })}`;
}, "/Users/jesse/Sites/github/avalanche-hardwood-floors/src/pages/contact.astro", void 0);

const $$file = "/Users/jesse/Sites/github/avalanche-hardwood-floors/src/pages/contact.astro";
const $$url = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Button as $, $$HomeAbout as a, contact as c };