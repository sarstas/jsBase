'use strict';
const gallery = {
    settings: {
        previewSelector: '.mySuperGallery',
        openedImageWrapperClass: 'galleryWrapper',
        openedImageClass: 'galleryWrapper__image',
        openedImageScreenClass: 'galleryWrapper__screen',
        openedImageCloseBtnClass: 'galleryWrapper__close',
        openedImageCloseBtnSrc: 'images/gallery/close.png',
    },

    init(userSettings = {}) {
        Object.assign(this.settings, userSettings);

        // document.querySelector(this.settings.previewSelector)
        //     .addEventListener('click', (event) => {
        //         this.containerClickHandler(event);
        //     });
        document.querySelector(this.settings.previewSelector)
            .addEventListener('click', this.containerClickHandler.bind(this));
    },

    containerClickHandler(event) {
        console.log(event.target);
        if (event.target.tagName !== 'IMG') return;

        this.openImage(event.target.dataset.full_image_url);
    },

    openImage(src) {
        this.getScreenContainer().querySelector(`.${this.settings.openedImageClass}`).src = src;
    },

    getScreenContainer() {
        const galleryWrapperElement = document
            .querySelector(`.${this.settings.openedImageWrapperClass}`);

        if (galleryWrapperElement) return galleryWrapperElement;

        return this.createScreenContainer();
    },

    createScreenContainer() {
        const galleryWrapperElement = document.createElement('div');
        galleryWrapperElement.classList.add(this.settings.openedImageWrapperClass);

        const galleryScreenElement = document.createElement('div');
        galleryScreenElement.classList.add(this.settings.openedImageScreenClass);
        galleryWrapperElement.appendChild(galleryScreenElement);

        const closeImageElement = new Image();
        closeImageElement.classList.add(this.settings.openedImageCloseBtnClass);
        closeImageElement.src = this.settings.openedImageCloseBtnSrc;
        closeImageElement.addEventListener('click', () => this.close());
        galleryWrapperElement.appendChild(closeImageElement);

        const image = new Image();
        image.classList.add(this.settings.openedImageClass);
        galleryWrapperElement.appendChild(image);

        document.body.appendChild(galleryWrapperElement);

        return galleryWrapperElement;
    },

    close() {
        document.querySelector(`.${this.settings.openedImageWrapperClass}`).remove();
    },
};

gallery.init({previewSelector: '.galleryPreviewsContainer'});
