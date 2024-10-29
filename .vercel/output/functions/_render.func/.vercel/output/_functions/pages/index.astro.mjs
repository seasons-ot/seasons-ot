import { a as createComponent, r as renderTemplate, b as renderComponent, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_CHVXW16u.mjs';
import 'kleur/colors';
import { c as $$Hero, b as $$PageLayout } from '../chunks/PageLayout_BZpS8jVy.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Seasons Occupational Therapy",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "image": { src: "~/assets/images/seasons-ot-logo.png", alt: "Seasons Occupational Therapy Logo" } }, { "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="text-[#8B3324] uppercase tracking-wider font-bold">Seasons</span><br><span class="uppercase text-[#543710] tracking-wider text-xl md:text-2xl font-bold">Occupational Therapy</span> ` })}` })} ` })}`;
}, "C:/Coding/seasons-ot/src/pages/index.astro", void 0);

const $$file = "C:/Coding/seasons-ot/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
