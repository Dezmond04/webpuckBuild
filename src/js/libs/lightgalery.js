import lightGallery from "lightgallery";

// Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const galeryInit = () => {
  const galleries = document.querySelectorAll("[data-gallery]");
  if (galleries.length) {
    galleries.forEach((gallery) => {
      lightGallery(gallery),
        {
          plugins: [lgZoom, lgThumbnail],
          licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
          speed: 500,
        };
    });
  }
};

export default galeryInit;
