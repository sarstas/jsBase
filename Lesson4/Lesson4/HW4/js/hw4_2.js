'use scrict';

const basket = {
   product: [
      {
         id_prod: 1,
         name: 'сист. блок',
         price: 30000,
         quantity: 1
      },
      {
         id_prod: 2,
         name: 'монитор 4к',
         price: 10000,
         quantity: 1
      },
      {
         id_prod: 3,
         name: 'клавиатура',
         price: 1500,
         quantity: 1
      },
      {
         id_prod: 4,
         name: 'мыш',
         price: 1500,
         quantity: 1
      }
   ],

   totalPriceBusket() {
      return this.product.reduce((totalPrice, itemCart) => totalPrice + itemCart.price * itemCart.quantity, 0);
   }
};

console.log(basket.totalPriceBusket());