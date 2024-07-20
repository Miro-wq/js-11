export { gallerySetup };

const gallery = document.querySelector('.gallery');

function gallerySetup(images) {
    const createMarkup = ({ id, largeImageURL, webformatURL, tags, likes, views, comments, downloads }) => `
      <a class="gallery__link" href="${largeImageURL}">
      <div class="gallery-item" id="${id}">
        <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
          <p class="info">Likes ${likes}</p>
          <p class="info">Views ${views}</p>
          <p class="info">Comments ${comments}</p>
          <p class="info">Downloads ${downloads}</p>
        </div>
      </div>
    </a>
    `;

    const markup = images.map(createMarkup).join('');
    gallery.insertAdjacentHTML('beforeend', markup);
}


////////////////////////////////DRAFTS////////////////////////////////////////////////////

// webformatURL - un link către imaginea mică.
// largeImageURL - un link către imaginea mare.
// tags - un text care descrie imaginea, potrivit pentru atribut alt.
// likes - numărul de like-uri.
// views - numărul de vizualizări.
// comments - numărul de comentarii.
// downloads - numărul de descărcări.