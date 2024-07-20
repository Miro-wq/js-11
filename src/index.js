import Notiflix from "notiflix";
import SimpleLightbox from "simplelightbox";
import { gallerySetup } from './js/gallery-setup';
import { getImages } from './js/get-images';
import { onScroll } from './js/scroll-setup';

import "simplelightbox/dist/simple-lightbox.min.css";

const searchForm = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.load-more');
let query = '';
let page = 1;
let simpleLightbox;
const perPage = 40;

searchForm.addEventListener('submit', onSearchForm);
loadMore.addEventListener('click', onLoadMore);

onScroll();

function onSearchForm(e) {
    e.preventDefault();
    initializeSearch(e.currentTarget.searchQuery.value.trim());
}

function onLoadMore() {
    fetchImages();
}

function initializeSearch(searchQuery) {
    query = searchQuery;
    if (!query) return alertNoEmptySearch();
    resetSearch();
    fetchImages();
}

function resetSearch() {
    window.scrollTo({ top: 0 });
    page = 1;
    gallery.innerHTML = '';
    loadMore.classList.add('is-hidden');
}

async function fetchImages() {
    try {
        const { data } = await getImages(query, page, perPage);
        handleFetchResults(data);
    } catch (error) {
        console.error(error);
    }
}

function handleFetchResults(data) {
    if (data.totalHits === 0) return alertNoImagesFound();
    gallerySetup(data.hits);
    simpleLightbox = new SimpleLightbox('.gallery a').refresh();
    alertImagesFound(data);
    if (data.totalHits > page * perPage) loadMore.classList.remove('is-hidden');
    page++;
}

function alertImagesFound(data) {
    Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
}

function alertNoEmptySearch() {
    Notiflix.Notify.failure('The search string cannot be empty. Please specify your search query.');
}

function alertNoImagesFound() {
    Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
}

function alertEndOfSearch() {
    Notiflix.Notify.failure('We\'re sorry, but you\'ve reached the end of search results.');
}
