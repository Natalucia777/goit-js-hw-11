import './sass/main.scss';
// Додатковий імпорт стилів
import Notiflix from "notiflix";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryCard } from './js/gallery';
import { taceImages } from './js/tace-images';

const { height: cardHeight } = document
  .querySelector(".gallery")
  .fir
stElementChild.getBoundingClientRect();
window.scrollBy({
  top: cardHeight * 2,
  behavior: "smooth",
});

