import { galleryItems } from './gallery-items.js';
// Change code below this line

const makeGalleryElementsMarkup = galleryItems => {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </li>
    `
    }).join('');
};

const onGalleryElementsClick = event => {
    event.preventDefault();

    const instance = basicLightbox.create(`
        <img
            class="gallery__image"
            src="${event.target.dataset.source}"
        />
    `)

    instance.show()

    galleryList.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            instance.close()
        }
    })
};

const galleryList = document.querySelector('.gallery');
galleryList.addEventListener('click', onGalleryElementsClick);

const galleryElementsMarkup = makeGalleryElementsMarkup(galleryItems);

galleryList.innerHTML = galleryElementsMarkup;

// console.log(galleryItems);