//________________________________________________________task#1
//var a = 1, b = 1, c, d;
//c = ++a; alert(c);           // 2 инеремент который стоит перед значением сначала увеличивает на один а потом выводит 
//                             //в консоль
//d = b++; alert(d);           // 1 инкремент который стоит после значения увеличивает на +1 после того как произойдет 
//                             //вывод в консоль
//c = (2+ ++a); alert(c);      // 5 выше уже производился инкремент, и снова инкремент который стоит перед значением в 
//                             //итоге получаем 5
//d = (2+ b++); alert(d);      // 4 тут то же что в примере выше только инкремент стоит после значения b, в итоге = 4
//alert(a);                    // 3 так как инеремент на данное значение производилось дважды в коде выше получем 3
//alert(b);                    // 3 так как инеремент на данное значение производилось дважды в коде выше получем 3

//_________________________________________________________task#2
//var a = 2;
//var x = 1 + (a *= 2);       //5

//_________________________________________________________________task#3
//let  first = 5,   
//    second = 3,
//    answer;

//answer = first >= 0 && second >= 0 ? first + second : first + second;
//console.log(answer);

//_____________________________________________________________________task#4

//let a = +prompt ('Введите число от 1 до 15');

//function count (a) {
//   for (i = a; i <= 15; i++){
//      console.log(i + ' ');
//   }
//}
//if (a <= 0 || a > 15)
//   a = +prompt ('Введите число от 1 до 15');
//   else
//   switch (a) {
//		case 1:
//			alert ( 'Ваше число 1');
//         count(a);
//			break;
//		case 2:
//			alert ( 'Ваше число 2');
//         count(a);
//			break;
//		case 3:
//			alert ( 'Ваше число 3');
//         count(a);
//			break;
//		case 4:
//			alert ( 'Ваше число 4');
//         count(a);
//			break;
//		case 5:
//			alert ( 'Ваше число 5');
//         count(a);
//			break;
//		case 6:
//			alert ( 'Ваше число 6');
//         count(a);
//			break;
//		case 7:
//			alert ( 'Ваше число 7');
//         count(a);
//			break;
//		case 8:
//			alert ( 'Ваше число 8');
//         count(a);
//			break;
//		case 9:
//			alert ( 'Ваше число 9');
//         count(a);
//			break;
//		case 10:
//			alert ( 'Ваше число 10');
//         count(a);
//			break;
//		case 11:
//			alert ( 'Ваше число 11');
//         count(a);
//			break;
//		case 12:
//			alert ( 'Ваше число 12');
//         count(a);
//			break;
//		case 13:
//			alert ( 'Ваше число 13');
//         count(a);
//			break;
//		case 14:
//			alert ( 'Ваше число 14');
//         count(a);
//			break;
//		case 15:
//			alert ( 'Ваше число 15');
//         count(a);
//			break;	
//		}	


//________________________________________________task#5
//let result;

//function sum (a, b) {
//   result = a + b;
//   console.log(result);
//   return result;
//}

//function dif (a, b) {
//   result = a - b;
//   console.log(result);
//   return result;
//}

//function mult (a, b) {
//   result = a * b;
//   console.log(result);
//   return result;
//}

//function div (a, b) {
//   result = a / b;
//   console.log(result);
//   return result;
//}

//sum(2, 4);
//dif(2, 4);
//mult (2, 4);
//div (2, 4);

//______________________________________task#6
//let result;

//mathOperation(2, 4, mult);
   
//function mathOperation (arg1, arg2, operation){
//   switch (operation) {
//      case sum:
//         sum(arg1, arg2);
//         break;
//      case diff:
//         diff(arg1, arg2);
//         break;
//      case mult: 
//         mult(arg1, arg2);
//         break;
//      case div:
//         div(arg1, arg2);
//         break;
//      default:
//         console.log('Другие операции мы проработаем чуть позже, воспользуйтесь возможными из следующих +,-,/,*')
//   }
//}

//function sum (arg1, arg2) {
//   result = arg1 + arg2;
//   console.log(result);
//   return result;
//   }

//function diff (arg1, arg2) {
//   result = arg1 - arg2;
//   console.log(result);
//   return result;
//}

//function mult (arg1, arg2) {
//   result = arg1 * arg2;
//   console.log(result);
//   return result;
//}

//function div (arg1, arg2) {
//   result = arg1 / arg2;
//   console.log(result);
//   return result;
//}


//______________________________________task#7
//alert( null > 0 );  // (1) false
//alert( null == 0 ); // (2) false
//alert( null >= 0 ); // (3) true












