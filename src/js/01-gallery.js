import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

// console.log(galleryItems);
// находим div куда будем записывать галлерею
const gallaryEL = document.querySelector('.gallery');
console.log(gallaryEL);
// создаём переменную для функции которя перебирает и возвращает масив строк.
const markup = createMarkup(galleryItems);
// добавляем в разметку строку(с галереей)
// console.log(markup)
gallaryEL.insertAdjacentHTML('beforeend', markup);
//  вешаем слушателя событий на галерею и добавляем коллбэк функции.

// создём функцию c параметром items для перебора обьекта с фотографиями и значениями.
function createMarkup(items) {
  return items
    .map(item => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`;
    })
    .join('');
}
// подключам лайф бокс
const lightbox = new SimpleLightbox('.gallery a', {
  // подключаем функции
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(lightbox);
