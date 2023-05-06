import './sass/index.scss';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryCard } from './js/gallery';
import { taceImages } from './js/tace-images';
import { messageImgFound } from './js/message';
import { messageNoSearch } from './js/message';
import { messageNoFound } from './js/message';
import { messageEndSearch } from './js/message';

const searchForm = document.querySelector('#search-form');
const galleryLink = document.querySelector('.gallery');
const btnLoad = document.querySelector('.btn-load-more');
let query = '';
let page = 1;
let simpleLightBox;
const perPage = 40;
searchForm.addEventListener('submit', onSearch);
btnLoad.addEventListener('click', onLoadMoreBtn);
onScroll();
onToTopBtn();
function onSearch(e) {
  e.preventDefault();
  window.scrollTo({ top: 0 });
  page = 1;
  query = e.currentTarget.searchQuery.value.trim();
  galleryLink.innerHTML = '';
  btnLoad.classList.add('is-hidden');
  if (query === '') {
    messageNoSearch();
    return;
  }
  taceImages(query, page, perPage)
    .then(({ data }) => {
      if (data.totalHits === 0) {
        messageNoFound();
      } else {
        galleryCard(data.hits);
        simpleLightBox = new SimpleLightbox('.gallery a').refresh();
        messageImgFound(data);
        if (data.totalHits > perPage) {
          btnLoad.classList.remove('is-hidden');
        }
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      searchForm.reset();
    });
}
function onLoadMoreBtn() {
  page += 1;
  simpleLightBox.destroy();
  taceImages(query, page, perPage)
    .then(({ data }) => {
      galleryCard(data.hits);
      simpleLightBox = new SimpleLightbox('.gallery a').refresh();
      const totalPages = Math.ceil(data.totalHits / perPage);
      if (page > totalPages) {
        loadMoreBtn.classList.add('is-hidden');
        messageEndSearch();
      }
    })
    .catch(error => console.log(error));
}
