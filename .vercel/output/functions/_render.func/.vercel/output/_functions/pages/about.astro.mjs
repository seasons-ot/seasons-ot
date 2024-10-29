import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_CHVXW16u.mjs';
import 'kleur/colors';
import { $ as $$Features3 } from '../chunks/Features3_Cx9fDzyO.mjs';
import { c as $$Hero, b as $$PageLayout } from '../chunks/PageLayout_BZpS8jVy.mjs';
import { $ as $$HeroText } from '../chunks/HeroText_DW8DPR01.mjs';
import { $ as $$Content } from '../chunks/Content_Dr1aNsrG.mjs';
import { $ as $$Headline } from '../chunks/Headline_BTr4FXxG.mjs';
import { $ as $$Steps } from '../chunks/Steps_Cwups08o.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://astrowind.vercel.app");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const metadata = {
    title: "About us"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "bg": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "image": {
    src: "~/assets/images/about-us-header.png",
    alt: "People holding hands"
  } }, { "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="text-[#8B3324] uppercase tracking-[0.4rem]">About Us</span><br> ` })}` })}    ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "image": {
    src: "~/assets/images/occupation-therapy-skills.jpg",
    alt: "Skills that can be achieved via occupational therapy"
  } }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <p class="text-left">
Occupational Therapy (OT) is the art and science that helps individuals find meaning and purpose in their
        everyday activities.
</p><p>Occupation' is defined as the activities that an individual, needs, wants and/or is expected to do.</p><p>
A holistic, evidence-based approach is used to problem-solve areas the individual is having difficulty with -
        i.e. self-care, productivity, and leisure.
</p><p>
OT seeks to find the 'Just Right Challenge' - a combination of personal and environmental factors, as well as
        the activity demands so the individual can achieve full participation and engagement in their chosen
        occupations.
</p> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="text-[#8B3324] uppercase tracking-[0.4rem] font-special text-3xl md:text4xl">What is Occupational Therapy?
</span> ` })}` })}   ${renderComponent($$result2, "Features3", $$Features3, { "columns": 3, "defaultIcon": "tabler:point-filled", "items": [
    {
      title: "self-help skills"
    },
    {
      title: "fine motor + gross motor skills"
    },
    {
      title: "printing + writing"
    },
    {
      title: "attention + self-regulation"
    },
    {
      title: "sensory processing"
    },
    {
      title: "socioemotional skills"
    },
    {
      title: "play skills"
    },
    {
      title: "organization + planning"
    },
    {
      title: "executive functioning"
    }
  ] }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` <div> <span>If your child is struggling in any of the following areas, or is having difficulty keeping up with their
          same-aged peers, your child may benefit from OT services.
</span> </div> <div><span>What OTs can help with: </span></div> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="text-[#8B3324] uppercase tracking-[0.4rem] font-special text-3xl md:text4xl">Does my child need Occupational Therapy?
</span>` })}` })} ${renderComponent($$result2, "Headline", $$Headline, {}, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` <div> <span>To note, your child does not need a diagnosis or a doctor referral to receive OT services. </span> </div> ` })}` })} ${renderComponent($$result2, "Hero", $$Hero, { "image": {
    src: "~/assets/images/children-playing-with-blocks.jpg",
    alt: "Children playing with blocks"
  } })} ${renderComponent($$result2, "HeroText", $$HeroText, { "textOnly": true }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <div class="text-left max-w-3xl m-auto"> <p>
Our mission is to help children and youth thrive and become <b>more coordinated, calm, connected, and confident</b>.
</p> <p>
We do this in two ways:<br> <b>1. Direct OT assessment and treatment</b><br> <b>2. Parent coaching and consultation</b> </p> <p>
We pride ourselves on using a family-centered, relationship and play-based approach to address your child's
          individual OT goals. Learning through play has been proven to be most effective for children as it facilitates
          engagement, curiosity, and experiential learning.
</p> <p>
Parent implementation of OT strategies is key to a child's progress and success. We also encourage our clients
          to nurture a growth mindset (parents too) and collaborate with the family to create and achieve meaningful
          goals.
</p> </div> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="text-[#8B3324] uppercase tracking-[0.4rem] font-special text-3xl md:text4xl">Our Practice Philosophy
</span> ` })}` })} ${renderComponent($$result2, "Hero", $$Hero, { "image": {
    src: "~/assets/images/children-running.jpg",
    alt: "Children running up a hill"
  } })}  ${renderComponent($$result2, "HeroText", $$HeroText, { "textOnly": true }, { "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <div class="text-left max-w-3xl m-auto"> <p>
Sharon is a registered Occupational Therapist in British Columbia, Canada and a member of the RASP-list
          (Registry of Autism Service Providers).
</p> <p>
With over 10 years of experience, Sharon is passionate about working with children and families. Within a
          variety roles and settings, Sharon continually provides fun and effective research-based treatments and
          collaboration with the child's healthcare and educational teams.
</p> <p>
With a breadth of pediatric experience from ages 2-18, Sharon has worked with children with Autism Spectrum
          Disorder (ASD), Attention Deficit Hyperactivity Disorder (ADHD), Down’s Syndrome, Sensory Processing Disorder
          (SPD), Developmental Coordination Disorder (DCD), Downs Syndrome, Cerebral Palsy (CP), other
          physical/genetic/neurological disorders, developmental delays, and mental health conditions.
</p> <p>
In OT sessions, Sharon utilizes playful child-centered approaches along with developmental, sensory-motor,
          cognitive-emotional, and behavioural evidence-based practice. Sharon also has a strong art background in
          mindfulness, music education and movement practices (yoga, dance).
</p> <p>Sharon is also multilingual and is conversational in Cantonese and Mandarin.</p> <p>
During leisure time, Sharon is a nature lover and enjoys chasing the sun, hiking and camping, scuba diving,
          gardening, and travelling. She loves both cats and dogs, tea and dark chocolate.
</p> </div> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` <span class="text-[#8B3324] uppercase tracking-[0.4rem] font-special text-3xl md:text4xl">Meet our OT - Sharon Yeung (B.A, M.O.T, B.C. Reg. OT)
</span> ` })}` })}  ${renderComponent($$result2, "Steps", $$Steps, { "title": "Training & Qualifications:", "items": [
    {
      title: "Sensory Processing and Integration",
      description: `<ul><li>Therapeutic Listening\xAE</li><li>Building Blocks of Sensory Integration</li><li>Wilbarger Brushing Protocol\xAE</li><li>Astronaut Training Program\xAE</li><li>Sensory modulation approaches to mental health interventions for adults and adolescents</li></ul>`,
      icon: "grommet-icons:assist-listening"
    },
    {
      title: "Mental Health",
      description: `<ul><li>Anxiety Management for Children: Practical Strategies</li><li>Cognitive Behavioural Therapy (CBT): Level 1 for OT</li></ul>`,
      icon: "ri:mental-health-line"
    },
    {
      title: "Handwriting",
      description: `<ul><li>Handwriting Without Tears\xAE</li><li>Printing Like a Pro</li></ul>`,
      icon: "fluent-mdl2:handwriting"
    },
    {
      title: "Rhythmic Movement Training International (RMTi) Level 1 & 2",
      icon: "mdi:human-female-dance"
    },
    {
      title: "DIR 101: An Introduction to DIR\xAE and DIRFloortime\xAE",
      icon: "game-icons:relationship-bounds"
    },
    {
      title: "Emotional Freedom Technique (EFT)/Acupoint Mediated Neural Change Technique for Trauma, Relief and Resiliency",
      icon: "tabler:check"
    },
    {
      title: "Trauma-informed Care and Cultural Safety (Cultural Security, Clinical Yarning)",
      icon: "streamline:health-care-2-solid"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1616198814651-e71f960c3180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    alt: "Steps image"
  } })} ` })}`;
}, "C:/Coding/seasons-ot/src/pages/about.astro", void 0);

const $$file = "C:/Coding/seasons-ot/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
