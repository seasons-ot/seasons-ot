import { a as createComponent, r as renderTemplate, b as renderComponent, F as Fragment, m as maybeRenderHead } from '../chunks/astro/server_CHVXW16u.mjs';
import 'kleur/colors';
import { c as $$Hero, b as $$PageLayout } from '../chunks/PageLayout_BZpS8jVy.mjs';
import { $ as $$Testimonials } from '../chunks/Testimonials_DNqJImzL.mjs';
export { renderers } from '../renderers.mjs';

const $$ClientLove = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Services"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, {}, { "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="text-[#8B3324] uppercase tracking-[0.4rem]">Testimonials</span><br> ` })}` })}  ${renderComponent($$result2, "Testimonials", $$Testimonials, { "testimonials": [
    {
      testimonial: `We are very pleased with Sharon's occupational therapy session with our preschooler son. Sharon is very friendly and has built such a good rapport with our son even on the first day that he is eager to play with Sharon every week in his OT session. Sharon is very understanding, professional, knowledgeable, hands-on, creative, and always gives us good advice and strategies for parents to support our kid at home. I also really like how she shares with us her progress notes and advice so we can easily refer to them when we play and practice with our kid on our own time. For parents looking for an OT, definitely look for someone who is play-based and good with kids, who can build good relationships with them so kids would look forward to seeing the OT in the next session.`,
      name: "Vivian",
      image: {
        src: "https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80",
        alt: "Emily Kennedy Image"
      }
    },
    {
      testimonial: `Throughout regular sessions with Sharon, my 5-year-old has become more regulated and looks forward to seeing her! Sharon is a fun and engaging therapist that demonstrates the ability to keep him on task even during demand avoidance. During our year, he has improved in many areas - balance, core strength, fine motor for school, and self-independence skills. She is also certified in Therapeutic Listening\xAE, a music listening therapy program he enjoyed over 8 weeks that helped with self-regulation. Sharon collaborates well with our team and I like how she accommodate our needs. At the start, it is hard choosing the service provider with the right fit but after a few sessions in and upon a chance for observation, you\u2019ll know if it\u2019s a right fit. If you are looking for OT, I\u2019ll definitely recommend giving Sharon a try!`,
      name: "Ayame",
      image: {
        src: "https://images.unsplash.com/photo-1561406636-b80293969660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
        alt: "Sarah Hansen Image"
      }
    },
    {
      testimonial: `*I am impressed by Sharon\u2019s big flexibility in the sessions. *Sharon has a lot of backup plans when my daughter says \u201Cno\u201D or seems frustrated. Sharon also lets my daughter choose what she wants to do from many offers, so she feels relaxed and comfortable. I think Sharon\u2019s interactions with my daughter are truly good. Sharon gives her a little break or space when she seems tired or frustrated. Sharon deeply observes my daughter\u2019s thinking from her behaviour. Sharon allows her to choose today\u2019s menu and each program is at a good duration because her attention and concentration do not last long. I see that Sharon has a big advantage from her past experiences as an EA and BI. Also, Sharon takes care of me as well, like asking how is everything and if there are any changes. That makes us feel very comfortable and relieved. Most parents do not know what exactly OT does, including me before. Since then, I have been watching OTs work for a while. I can tell that each small and short program within 60 minutes leads to a big step. So I would tell parents - \u2018have OT for their child\u2019s big possibility as soon as possible!\u2019`,
      name: "Akiko",
      image: {
        src: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=824&q=80",
        alt: "Mark Wilkinson Image"
      }
    }
  ] })} ` })}`;
}, "C:/Coding/seasons-ot/src/pages/client-love.astro", void 0);

const $$file = "C:/Coding/seasons-ot/src/pages/client-love.astro";
const $$url = "/client-love";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ClientLove,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
