// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.esm';

const gallery = document.querySelector('.gallery');
const galleryItem = galleryItems
  .map(({ preview, original, description }, index) => {
    //
    return `
  <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      data-index="${index}"
      alt="${description}"
    />
  </a>
</li>
`;
  })
  .join('');
gallery.insertAdjacentHTML('beforeend', galleryItem);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
