'use strict'; 

const gallery = {
   openedImageEl: null,

   settings: {
      previewSelector: '.mySuperGallery',
      openedImageWrapperClass: 'galleryWrapper',
      openedImageClass: 'galleryWrapper__image',
      openedImageScreenClass: 'galleryWrapper__screen',
      openedImageCloseBtnClass: 'galleryWrapper__close',
      openedImageCloseBtnSrc: 'images/gallery/close.png',
      openedImageNextBtnSrc: 'images/gallery/next.png',
      openedImageNextBtnClass: 'galleryWrapper__next',
      openedImageBackBtnSrc: 'images/gallery/back.png',
      openedImageBackBtnClass: 'galleryWrapper__back',
      imageNotFoundSrc: 'images/gallery/duck.gif',
   },

   init(settings) {
      this.settings = Object.assign(this.settings, settings);

      document
      .querySelector(this.settings.previewSelector)
      .addEventListener('click', event => this.containerClickHandler(event));
   },

   ///**
   //* Обработчик события клика для открытия картинки.
   //* @param {MouseEvent} event Событие клики мышью.
   //* @param {HTMLElement} event.target Событие клики мышью.
   //*/

   containerClickHandler(event) {
      if (event.target.tagName != 'IMG') {
         return;
      }

      this.openedImageEl = event.target;

      this.openImage(event.target.dataset.full_image_url);
   },

   openImage(src) {
      const openedImageEl = this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`);
      const img = new Image();
      img.onload = () => openedImageEl.src = src;
      img.onerror = () => openedImageEl.src = this.settings.imageNotFoundSrc;
      img.src = src;
   },

   getScreenContainer() {
      const galleryWrapperElement = document.querySelector(`.${this.settings.openedImageWrapperClass}`);
      if (galleryWrapperElement) {
         return galleryWrapperElement;
      }

      return this.createScreenContainer();
   },

   createScreenContainer() {
   const galleryWrapperElement = document.createElement('div');
   galleryWrapperElement.classList.add(this.settings.openedImageWrapperClass);

   
   const backBtn = new Image();
   backBtn.classList.add(this.settings.openedImageBackBtnClass);
   backBtn.src = this.settings.openedImageBackBtnSrc;
   galleryWrapperElement.appendChild(backBtn);

   // Добавляем обработчик события при клике, ставим новую открытую картинку и открываем ее.
   backBtn.addEventListener('click', () => {
      this.openedImageEl = this.getPrevImage();
      this.openImage(this.openedImageEl.dataset.full_image_url);
   });

   // Добавляем кнопку вперед.
   const nextBtn = new Image();
   nextBtn.classList.add(this.settings.openedImageNextBtnClass);
   nextBtn.src = this.settings.openedImageNextBtnSrc;
   galleryWrapperElement.appendChild(nextBtn);

   // Добавляем обработчик события при клике, ставим новую открытую картинку и открываем ее.
   nextBtn.addEventListener('click', () => {
      this.openedImageEl = this.getNextImage();
      this.openImage(this.openedImageEl.dataset.full_image_url);
   });

   // Создаем контейнер занавеса, ставим ему класс и добавляем в контейнер-обертку.
   const galleryScreenElement = document.createElement('div');
   galleryScreenElement.classList.add(this.settings.openedImageScreenClass);
   galleryWrapperElement.appendChild(galleryScreenElement);

   // Создаем картинку для кнопки закрыть, ставим класс, src и добавляем ее в контейнер-обертку.
   const closeImageElement = new Image();
   closeImageElement.classList.add(this.settings.openedImageCloseBtnClass);
   closeImageElement.src = this.settings.openedImageCloseBtnSrc;
   closeImageElement.addEventListener('click', () => this.close());
   galleryWrapperElement.appendChild(closeImageElement);

   // Создаем картинку, которую хотим открыть, ставим класс и добавляем ее в контейнер-обертку.
   const image = new Image();
   image.classList.add(this.settings.openedImageClass);
   galleryWrapperElement.appendChild(image);

   // Добавляем контейнер-обертку в тег body.
   document.body.appendChild(galleryWrapperElement);

   // Возвращаем добавленный в body элемент, наш контейнер-обертку.
   return galleryWrapperElement;
   },

   getNextImage() {
      // Получаем элемент справа от текущей открытой картинки.
      const nextSibling = this.openedImageEl.nextElementSibling;
      // Если элемент справа есть, его отдаем, если нет, то берем первый элемент в родительском контейнере.
      return nextSibling ? nextSibling : this.openedImageEl.parentElement.firstElementChild;
      },

      /**
       * Возвращает предыдущий элемент (картинку) от открытой или последнюю картинку в контейнере,
       * если текущая открытая картинка первая.
       * @returns {Element} Предыдущую картинку от текущей открытой.
       */
   getPrevImage() {
   // Получаем элемент слева от текущей открытой картинки.
   const prevSibling = this.openedImageEl.previousElementSibling;
   // Если элемент слева есть, его отдаем, если нет, то берем последний элемент в родительском контейнере.
   if (prevSibling) {
      return prevSibling;
   } else {
      return this.openedImageEl.parentElement.lastElementChild;
   }
   },

   /**
    * Закрывает (удаляет) контейнер для открытой картинки.
    */
   close() {
   document.querySelector(`.${this.settings.openedImageWrapperClass}`).remove();
   }
};


window.onload = () => gallery.init({previewSelector: '.galleryPreviewsContainer'});