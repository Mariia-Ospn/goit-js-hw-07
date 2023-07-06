import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryElement = document.querySelector(".gallery");

function createGalleryCard({ preview, original, description }) {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
}

function createListMarkup(Items) {
  return (galleryElement.innerHTML = Items.map((item) =>
    createGalleryCard(item)
  ).join(""));
}

function onImgClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  createLigthBoxView(event.target.dataset.source);
}

function createLigthBoxView(imageUrl) {
  const instance = basicLightbox.create(`
    <img src="${imageUrl}" width="800" height="600">
`);

  instance.show();

  galleryElement.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

createListMarkup(galleryItems);
galleryElement.addEventListener("click", onImgClick);

// console.log(galleryItems);
