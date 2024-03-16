/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, j as renderComponent } from '../astro_Dhi2w44Q.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './404_CXevywBV.mjs';
import 'clsx';
import { $ as $$Button } from './contact_XWIfRrHu.mjs';

const $$Astro$2 = createAstro("https://example.com");
const $$Gallery$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Gallery$1;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"> <div class="grid gap-4"> <div> <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""> </div> <div> <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""> </div> <div> <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""> </div> </div> <div class="grid gap-4"> <div> <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""> </div> <div> <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""> </div> <div> <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""> </div> </div> <div class="grid gap-4"> <div> <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""> </div> <div> <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""> </div> <div> <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""> </div> </div> <div class="grid gap-4"> <div> <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""> </div> <div> <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""> </div> <div> <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""> </div> </div> </div>`;
}, "/Users/jesse/Sites/github/avalanche-hardwood-floors/src/components/content/Gallery.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CallToAction;
  return renderTemplate`${maybeRenderHead()}<div class="text-center"> <section class="bg-white shadow-xl dark:shadow-red-800/25 dark:bg-red-950 -mb-20 rounded-3xl mt-12 z-10 inline-block"> <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"> <div class="max-w-screen-md text-center"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-stone-900 dark:text-white">Let's find more that brings us together.</h2> <p class="mb-8 font-light text-stone-500 sm:text-xl dark:text-stone-400">Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups, Watch and Marketplace.</p> ${renderComponent($$result, "Button", $$Button, { "text": "Schedule your free estimate", "href": "/contact", "style": "primary", "icon": { name: "tabler:arrow-right", side: "right" } })} </div> </div> </section> </div>`;
}, "/Users/jesse/Sites/github/avalanche-hardwood-floors/src/components/ui/CallToAction.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gallery;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="container mx-auto lg:px-16"> <h1>Our projects</h1> <p>Below are just a few images from jobs we've done. These include hardwood floor repairs, wood floor site sand and refinishes, fresh installs, and more.</p> ${renderComponent($$result2, "ImageGallery", $$Gallery$1, {})} <div class="text-center"> ${renderComponent($$result2, "CTA", $$CallToAction, { "class": "-mb-16" })}</div> </article> ` })}`;
}, "/Users/jesse/Sites/github/avalanche-hardwood-floors/src/pages/gallery.astro", void 0);

const $$file = "/Users/jesse/Sites/github/avalanche-hardwood-floors/src/pages/gallery.astro";
const $$url = "/gallery";

const gallery = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Gallery,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CallToAction as $, gallery as g };
