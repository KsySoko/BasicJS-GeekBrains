// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100
// не равно 1. делиться только на себя и на 1

// с этим заданием я так и не разобралась. Подскажите


// let n=2;
// while (n<=100){ 
//     for (let i = 1; i < n; i++){
//         if(n%i===0){
//             break;
//         }
//     }console.log(n);
//     n++;
// }




// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. 
// Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.


let arr = [200, 300, 550, 150];
let result = arr.reduce(function countBasketPrice(sum, current) {
    return sum + current
});
console.log( result );



// 3*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}

for(n=0; n<=9; n++) console.log(n);


// 4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, 
// только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

let row='x';
for(let i=0; i<20; i++){
    row+='x';
    console.log(row)
}