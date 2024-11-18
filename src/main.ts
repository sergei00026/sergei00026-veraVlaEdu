

import Swiper from "swiper";
import { Navigation } from "swiper/modules";


document.querySelectorAll('.accordion-header').forEach(header => {
   header.addEventListener('click', () => {
      const content = header.nextElementSibling as HTMLElement;

      // Закрытие, если уже открыто
      if (content && content.classList.contains('open')) {
         content.style.maxHeight = '';
         content.classList.remove('open');
      } else {
         // Закрываем все открытые элементы
         document.querySelectorAll('.accordion-content.open').forEach(openContent => {
            (openContent as HTMLElement).style.maxHeight = '';
            openContent.classList.remove('open');
         });

         // Открытие текущего элемента
         content.style.maxHeight = content.scrollHeight + 'px';
         content.classList.add('open');
      }
   });
});



Swiper.use([Navigation]);

const swiper = new Swiper('.mySwiper', {
   direction: 'horizontal', // Горизонтальное перемещение
   slidesPerView: 4, // Показывать один слайд за раз
   spaceBetween: 10, // Отступы между слайдами (необязательно)
   loop: true, // Отключить зацикливание (по желанию)
   navigation: {
      nextEl: '.custom-swiper-button-next',
      prevEl: '.custom-swiper-button-prev',
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      400: {
         slidesPerView: 2,
      },
      640: {
         slidesPerView: 3,
      },
      1024: {
         slidesPerView: 4,
      },
      1400: {
         slidesPerView: 4,
      },
   },

});

// swiper.enable();

const updateDots = () => {
   const dotsContainers = document.querySelectorAll('.dots-js'); // Получаем все элементы с классом .dots-js

   dotsContainers.forEach(dotsContainer => {
      if (!(dotsContainer instanceof HTMLElement) || !dotsContainer.parentElement) return; // Проверка на правильный тип и родительский элемент

      dotsContainer.innerHTML = ''; // Очистить точки

      const parent = dotsContainer.parentElement as HTMLElement; // Родительский элемент
      const label = parent.querySelector('.label') as HTMLElement | null; // Элемент с классом .label
      const details = parent.querySelector('.details') as HTMLElement | null; // Элемент с классом .details

      if (!label || !details) return; // Если элементы не найдены, пропускаем

      const parentWidth = parent.offsetWidth; // Ширина родителя
      const labelWidth = label.offsetWidth; // Ширина "Опыт работы"
      const detailsWidth = details.offsetWidth; // Ширина "от 1 года"
      const availableWidth = parentWidth - labelWidth - detailsWidth - 16; // Доступное пространство (минус отступы)

      if (availableWidth > 0) {
         const dotSize =  4; // Размер точки + отступ (в пикселях)
         const dotsCount = Math.floor(availableWidth / dotSize); // Рассчитать количество точек
         for (let i = 0; i < dotsCount; i++) {
            const dot = document.createElement('span');
            dot.textContent = '.'; // Добавить точку
            dotsContainer.appendChild(dot);
         }
      }
   });
};

// Обновление точек при изменении размера окна
window.addEventListener('resize', updateDots);
updateDots();




// Получаем элементы на странице
const scrollButton = document.getElementById("scrollButton") as HTMLButtonElement;
const targetSection = document.getElementById("targetSection") as HTMLElement;

if (scrollButton && targetSection) {
   // Устанавливаем обработчик клика на кнопку
   scrollButton.addEventListener("click", () => {
      // Плавная прокрутка к целевой секции
      targetSection.scrollIntoView({ behavior: "smooth" });
   });
}