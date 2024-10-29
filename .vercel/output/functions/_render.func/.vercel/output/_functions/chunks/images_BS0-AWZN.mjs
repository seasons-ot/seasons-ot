import { g as getImage } from './_astro_assets_C77rvaKZ.mjs';

const load = async function() {
  let images = void 0;
  try {
    images = /* #__PURE__ */ Object.assign({"/src/assets/images/about-us-header.png": () => import('./about-us-header_jogzmSBy.mjs'),"/src/assets/images/app-store.png": () => import('./app-store_B5MbzOMt.mjs'),"/src/assets/images/child-climbing-ladder.jpg": () => import('./child-climbing-ladder_ErlCqXGY.mjs'),"/src/assets/images/child-coloring.jpg": () => import('./child-coloring_DiXUiYtT.mjs'),"/src/assets/images/children-playing-jenga.jpg": () => import('./children-playing-jenga_Cd2vYQud.mjs'),"/src/assets/images/children-playing-with-blocks.jpg": () => import('./children-playing-with-blocks_DB889gm-.mjs'),"/src/assets/images/children-running.jpg": () => import('./children-running_R8EfaVO6.mjs'),"/src/assets/images/default.png": () => import('./default_DV_zznsT.mjs'),"/src/assets/images/google-play.png": () => import('./google-play_BsAENDzK.mjs'),"/src/assets/images/hero-image.png": () => import('./hero-image_D7nX7LPh.mjs'),"/src/assets/images/occupation-therapy-skills.jpg": () => import('./occupation-therapy-skills_z-IyFXUz.mjs'),"/src/assets/images/seasons-ot-bg.jpg": () => import('./seasons-ot-bg_DM_HKzSh.mjs'),"/src/assets/images/seasons-ot-logo.png": () => import('./seasons-ot-logo_DJMXlz60.mjs')});
  } catch (error) {
  }
  return images;
};
let _images = void 0;
const fetchLocalImages = async () => {
  _images = _images || await load();
  return _images;
};
const findImage = async (imagePath) => {
  if (typeof imagePath !== "string") {
    return imagePath;
  }
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://") || imagePath.startsWith("/")) {
    return imagePath;
  }
  if (!imagePath.startsWith("~/assets/images")) {
    return imagePath;
  }
  const images = await fetchLocalImages();
  const key = imagePath.replace("~/", "/src/");
  return images && typeof images[key] === "function" ? (await images[key]())["default"] : null;
};
const adaptOpenGraphImages = async (openGraph = {}, astroSite = new URL("")) => {
  if (!openGraph?.images?.length) {
    return openGraph;
  }
  const images = openGraph.images;
  const defaultWidth = 1200;
  const defaultHeight = 626;
  const adaptedImages = await Promise.all(
    images.map(async (image) => {
      if (image?.url) {
        const resolvedImage = await findImage(image.url);
        if (!resolvedImage) {
          return {
            url: ""
          };
        }
        const _image = await getImage({
          src: resolvedImage,
          alt: "Placeholder alt",
          width: image?.width || defaultWidth,
          height: image?.height || defaultHeight
        });
        if (typeof _image === "object") {
          return {
            url: "src" in _image && typeof _image.src === "string" ? String(new URL(_image.src, astroSite)) : "pepe",
            width: "width" in _image && typeof _image.width === "number" ? _image.width : void 0,
            height: "height" in _image && typeof _image.height === "number" ? _image.height : void 0
          };
        }
        return {
          url: ""
        };
      }
      return {
        url: ""
      };
    })
  );
  return { ...openGraph, ...adaptedImages ? { images: adaptedImages } : {} };
};

export { adaptOpenGraphImages as a, findImage as f };
