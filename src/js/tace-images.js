import axios from 'axios';
export { taceImages };
axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '36094261-707a3f1df60011e058a78caa9';

async function taceImages(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response;
}
