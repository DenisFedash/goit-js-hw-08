// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryItemsEl = document.querySelector('.gallery');
const cardsGallery = createImageCards(galleryItems);

galleryItemsEl.insertAdjacentHTML('beforeend', cardsGallery);
galleryItemsEl.addEventListener('click', onPaletteContainer);
function createImageCards(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
      
    return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"   
    />
  </a>
</div>`
  }).join(' ');
};
function onPaletteContainer(evt) {
  evt.preventDefault();  
  if (!evt.target.classList.contains('gallery__image') ) {
    return;
  };  
  
};
let gallery = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: '250',
});
gallery.on('show.simplelightbox', function (e) {	
  console.log(e);
});
gallery.on('close.simplelightbox', function (e) {	
  console.log(e);
});

