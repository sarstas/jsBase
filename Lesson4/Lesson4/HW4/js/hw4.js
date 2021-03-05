"use sctrict";

const enterValue = +prompt('Введите целое число от 0 до 999');

function decompOfNumber(number) {
   if (!Number.isInteger(number) || number < 0 || number > 999){
      console.log('Вы ввели не верное значение отлчное от данного диапазона от 0 до 999.');
      return {};
   }

   return {
      hundreds: number % 10,  
      dozens: Math.floor(number / 10) % 10,
      units: Math.floor(number / 100)
   };
}

console.log(decompOfNumber(enterValue));

   

