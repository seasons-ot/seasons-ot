import { a as createComponent, r as renderTemplate, b as renderComponent, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_CHVXW16u.mjs';
import 'kleur/colors';
import { $ as $$Content } from '../chunks/Content_Dr1aNsrG.mjs';
import { c as $$Hero, b as $$PageLayout } from '../chunks/PageLayout_BZpS8jVy.mjs';
import { $ as $$HeroText } from '../chunks/HeroText_DW8DPR01.mjs';
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Services"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "image": {
    src: "~/assets/images/about-us-header.png",
    alt: "People holding hands"
  } }, { "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="text-[#8B3324] uppercase tracking-[0.4rem]">Services</span> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "image": {
    src: "~/assets/images/child-climbing-ladder.jpg",
    alt: "Child climbing ladder"
  } }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <p class="text-left">
A holistic and comprehensive assessment includes parent interviews and questionnaires, standardized assessments
        and clinical observations of the child, and a written recommendations report.
</p><p>
The entire assessment will take <i>up to 2 hours</i>, consisting of assessment tasks and clinical observations
        (90 minutes), then followed by a parent discussion about the assessment findings, goalsetting, and potential
        treatment plan (30 minutes).
</p><p>
Key areas addressed: self-care skills, written output, fine motor skills, gross motor skills, primitive reflex
        integration, visual perception, functional vision screening, sensory processing and modulation, play and
        socioemotional skills, executive functioning.
</p> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="text-[#8B3324] uppercase tracking-[0.4rem] font-special text-3xl md:text4xl">Occupational Therapy Assessment
</span> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "image": {
    src: "~/assets/images/child-climbing-ladder.jpg",
    alt: "Child climbing ladder"
  } }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <p class="text-left">
Direct 1:1 OT sessions, with an OT or a supervised OTA (Occupational Therapy Assistant) in the child's home,
        community or preschool/daycare setting.
</p><p>
Session frequency will depend on the child's need, progress, and carryover of recommendations into the child's
        everyday life. Our treatments will often look like play, but embedded with therapeutic benefits of the
        'just-right challenge' to motivate and support the child's development toward their goals.
</p> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="text-[#8B3324] uppercase tracking-[0.4rem] font-special text-3xl md:text4xl">Occupational Therapy Treatment
</span> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "image": {
    src: "~/assets/images/children-playing-jenga.jpg",
    alt: "Children playing jenga"
  } }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <p class="text-left">
Do you have burning questions or pain points about your child, or want to improve your relationship with your
        child? Is your child struggling with a new skill and becoming avoidant or frustrated when you try to teach them?
</p><p>
Gain an even better understanding of your child to help them thrive with Parent Coaching and Consultation -
        where your questions can be addressed with insightful conversations, relevant education on your child's
        development, practical therapeutic strategies and customized action plans.
</p> <p>Examples of topics during Parent Coaching and Consultation:</p> <ul> <li>Anxiety/Stress management</li> <li>Sleep hygiene</li> <li>Toilet training</li> <li>Picky eating</li> <li>Family routines and transitions</li> <li>Self-regulation and Co-regulation</li> <li>Parent-child relationship</li> </ul> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="text-[#8B3324] uppercase tracking-[0.4rem] font-special text-3xl md:text4xl">Parent Coaching and Consultation
</span> ` })}` })}  ${renderComponent($$result2, "Hero", $$Hero, { "image": {
    src: "~/assets/images/child-coloring.jpg",
    alt: "Child coloring"
  } }, { "default": ($$result3) => renderTemplate`  ` })} ${renderComponent($$result2, "HeroText", $$HeroText, { "textOnly": true }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <div class="text-left max-w-3xl m-auto"> <p> <strong>In-person services</strong> are offered via community visits (at the child/youth's home, school/daycare,
          and local playground/parks) to families living in the Greater Vancouver region.
</p> <p> <strong>Teletherapy (online)</strong> is offered through a secure video or voice calling platform (based on client
          preference).
</p><p>
Online OT can be just as effective and engaging as in-person sessions and helps to reduce travel costs as
          well. Parent support for 1:1 online OT is recommended as a helping hand in session.
</p> </div> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="text-[#8B3324] uppercase tracking-[0.4rem] font-special text-3xl md:text4xl">service delivery </span> ` })}` })} ` })}`;
}, "C:/Coding/seasons-ot/src/pages/services.astro", void 0);

const $$file = "C:/Coding/seasons-ot/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
