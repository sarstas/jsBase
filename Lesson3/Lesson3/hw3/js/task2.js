let basket = [
   ['Систю блок', 35000, 1],
   ['Монитор 4К', 20000, 1],
   ['Клавиатура', 3000, 1],   
   ['Мышь', 1500, 1]
];

function countBasketPrice(basket) {
   let totalPrice = 0;
   basket.forEach(element => {
      totalPrice += element[1] * element[2];
   });
   return totalPrice;
}

console.log(countBasketPrice(basket));