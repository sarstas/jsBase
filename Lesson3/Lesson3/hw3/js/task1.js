"use script";
let i = 0;
while (i <= 100 ){
   if (isPrimeNumber(i)){
      console.log(i);
   }
   i++;
}

function isPrimeNumber (number) {
   if (number < 2) {
      return false;
   }
   
   for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0){
         return false;
      }
   }

   return true;
} 
