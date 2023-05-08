import Notiflix from 'notiflix';

export { messageImgFound };
export { messageNoSearch };
export { messageNoFound };
export { messageEndSearch };

function messageImgFound(data) {
  Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
}

function messageNoSearch() {
  Notiflix.Notify.failure(
    'The search string cannot be empty. Please try again.'
  );
}

function messageNoFound() {
  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

function messageEndSearch() {
  Notiflix.Notify.failure(
    "We're sorry, but you've reached the end of search results."
  );
}
