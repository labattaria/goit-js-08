import { galleryItems } from './gallery-items.js';
// Change code below this line

const makeGalleryElementsMarkup = galleryItems => {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>
    `
    }).join('');
};

const onGalleryElementsClick = event => {
    event.preventDefault();

    const lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt', captionPosition: 'bottom', animationSpeed: 250  });
}

const galleryList = document.querySelector('.gallery');
galleryList.addEventListener('click', onGalleryElementsClick);

const galleryElementsMarkup = makeGalleryElementsMarkup(galleryItems);

galleryList.innerHTML = galleryElementsMarkup;

// console.log(galleryItems);
