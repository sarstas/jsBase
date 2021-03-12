'use sctrict';

const cartItem = {
   render(prod) {
      return   `<div class="prod">
                  <div><b>Наименование</b>: ${prod.product_name}</div>
                  <div><b>Цена за шт</b>: ${prod.price}</div>
                  <div><b>Кол-во</b>: ${prod.quantity}</div>
                  <div><b>Стоимость</b>: ${prod.quantity * prod.price}</div>
               </div>`;
   }
}

const cart = {
   cartListBlock: null,
   cartButton: null,
   cartItem,
   prods: [
      {
         id_product: 123,
         product_name: 'Ноутбук',
         price: 45000,
         quantity: 1
      },
      {
         id_product: 234,
         product_name: 'Клава',
         price: 2000,
         quantity: 1
      },
      {
         id_product: 345,
         product_name: 'Мышь',
         price: 1500,
         quantity: 1
      }
   ],
   init() {
      this.cartListBlock = document.querySelector('.cart-list');
      this.cartButton = document.querySelector('.cart-btn');
      this.cartButton.addEventListener('click', this.clearCart.bind(this));

      this.render();
   },

   render() {
      if (this.prods.length) {
         this.prods.forEach(prod => {
            this.cartListBlock.insertAdjacentHTML('beforeend', this.cartItem.render(prod));
         });
         this.cartListBlock.insertAdjacentHTML('beforeend', `В корзине <b>${this.prods.length}</b> позиций(и) стоимостью <b>${this.getCartPrice()}</b>`);
      }else {
         this.cartListBlock.textContent = 'Корзина пуста';
      }
   },

   getCartPrice() {
      return this.prods.reduce(function (price, prod){
         return price + prod.price * prod.quantity;
      }, 0);
   }, 

   clearCart(){
      this.prods = [],
      this.render();
   },
};

cart.init();