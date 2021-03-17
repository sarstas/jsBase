"use strict";

const catalog = {
   cart: {},
   catalogBlockClass: null,
   list: [
      {
         id_product: 123,
         product_name: 'Системный блок',
         price: 35000,
      },
      {
         id_product: 124,
         product_name: 'Мышь',
         price: 1500,
      },
      {
         id_product: 125,
         product_name: 'Клавиатура',
         price: 2000,
      },
      {
         id_product: 126,
         product_name: 'Монитор 4К',
         price: 9000,
      },
   ],

   init(catalogBlockClass, cart) {
      this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
      this.cart = cart;
      this.render();
      this.addEventHandlers();
   },

   render() {
      if (this.getCatalogListLength() > 0) {
         this.renderCatalogList();
      } else {
         this.renderEmptyCatalog();
      }
   },
   
   addEventHandlers() {
      this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
   },

   addToBasket(event) {
      if (!event.target.classList.contains('product__add-to-cart')) return;
      const id_product =+ event.target.dataset.id_product;
      this.cart.addToBasket(id_product);
   },

   getCatalogListLength() {
      return this.list.length;
   },

   renderCatalogList() {
      this.catalogBlock.innerHTML = '';
      this.list.forEach(item => {
         this.catalogBlock.insertAdjacentHTML('beforeend', this.renderCatalogItem(item));
      });
   },

   renderCatalogItem(item) {
      return   `<div class="product">
                  <h3>${item.product_name}</h3>
                  <p>${item.price} руб.</p>
                  <button class="product__add-to-cart" data-id_product="${item.id_product}">В корзину</button>
               </div>`;
   },

   renderEmptyCatalog() {
      this.catalogBlock.innerHTML = '';
      this.catalogBlock.insertAdjacentHTML('beforeend', 'Каталог товаров пуст.')
   },

};

const cart = {
   cartBlock: null,
   clrCartButton: null,
   catalogList: [],
   products: [
      {
         id_product: 123,
         product_name: 'Системный блок',
         price: 35000,
         quantity: 1,
      },
   ],

   init(cartBlockClass, clrCartButton, catalogList) {
      this.cartBlock = document.querySelector(`.${cartBlockClass}`);
      this.clrCartButton = document.querySelector(`.${clrCartButton}`);
      this.catalogList = catalogList;

      this.addEventHandlers();
      this.render();
   },

   addEventHandlers() {
      this.clrCartButton.addEventListener('click', this.dropCart.bind(this));
   },

   dropCart() {
      this.products = [];
      this.render();
   },

   render() {
      if (this.getCartProductsLength() > 0) {
         this.renderCartList();
      } else {
         this.renderEmptyCart();
      }
   },

   findProductInCatalog (id_product) {
      return this.catalogList.find(product => product.id_product === id_product);
   },

   addToBasket(id_product) {
      const product = this.findProductInCatalog(id_product);

      if (product) {
         const findBasket = this.products.find(({id_product}) => product.id_product === id_product);

         if(findBasket) {
            findBasket.quantity++;
         } else {
            this.products.push({...product, quantity: 1});
         }
         this.render();
      } else {
         alert ('Ошибка добавления!');
      }
   },

   getCartProductsLength() {
      return this.products.length;
   },

   renderEmptyCart() {
      this.cartBlock.innerHTML = '';
      this.cartBlock.insertAdjacentHTML('beforeend', 'Корзина пуста.');
   },

   renderCartList() {
      this.cartBlock.innerHTML = '';
      this.products.forEach(item => {
         this.cartBlock.insertAdjacentHTML('beforeend', this.renderCartItem(item));
      });
      this.cartBlock.insertAdjacentHTML('beforeend', `В корзине <b>${this.products.length}</b> позиций(а) стоимостью <b>${this.getCartPrice()}</b>`);
   },

   renderCartItem(item) {
      return `<div>
               <h3>${item.product_name}</h3>
               <p>${item.price} руб.</p>
               <p>${item.quantity} шт.</p>
            </div>`;
   },

   getCartPrice() {
      return this.products.reduce(function (price, prod) {
          return price + prod.price * prod.quantity;
      }, 0);
   },
};

catalog.init('catalog', cart);
cart.init('cart', 'clr-cart', catalog.list);