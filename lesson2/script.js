/*1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
d = b++; alert(d);           // 1 
c = (2+ ++a); alert(c);      // 5
d = (2+ b++); alert(d);      // 4
alert(a);                    // 3
alert(b);                    // 3
Почему код даёт именно такие результаты?*/

//var a = 1, b = 1, c, d;

//c = ++a; alert(c);           // 2 (префиксный операнд возвращает значение операнда увеличивая на 1 - новое значение alert(a++)); 
//d = b++; alert(d);           // 1 (постфиксная форма возвращает старое значение alert(b++));
//c = (2+ ++a); alert(c);      // 5 (Приоритет префиксного интремента выше чем операция сложения с=2+(2+1))
//d = (2+ b++); alert(d);      // 4 (Приоритет префиксного интремента выше чем операция сложения с=2+2)
//alert(a);                    // 3 (префиксный операнд возвращает новое значение a=2+1)
//alert(b);                    // 3 (Возвращается старое значение b только затем увеличивается на 1 то есть 2, и после 2++ возвращает 2  старое значение и увеливает на 1 то есть 3?)


/*2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); */

// '*=' : a=a*2 таким образом выражение принимает вид: var x = 1 + (a = a * 2); x=1+(2*2)
// Ответ: x=5;
var a = 2;
var x = 1 + (a *= 2);
console.log(x);

/*3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.*/

var a = parseInt(prompt('Введите целое число a?'));
var b = parseInt(prompt('Введите целое число b?'));
if (a>0, b>0){
    console.log(a-b)
} else {
    console.log('Числа не соответствуют условию!')
};

if (a<0, b<0){
    console.log(a*b)
} else{
    console.log('Числа не соответствуют условию!')
};

if(((a>=0)&&(b<0))||((a<0)&&(b>=0))){
    console.log((a)+(b));
}else{
    console.log('Числа не соответствуют условию!')
};

/*4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.*/

var a = parseInt(prompt('Введите значение a?'))
switch(a){
    case 1:
    console.log(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);
    break;
    case 2:
    console.log(2,3,4,5,6,7,8,9,10,11,12,13,14,15);
    break;
    case 3:
    console.log(3,4,5,6,7,8,9,10,11,12,13,14,15);
    break;
    case 4:
    console.log(4,5,6,7,8,9,10,11,12,13,14,15);
    break;
    case 5:
    console.log(5,6,7,8,9,10,11,12,13,14,15);
    break;
    case 6:
    console.log(6,7,8,9,10,11,12,13,14,15);
    break;
    case 7:
    console.log(7,8,9,10,11,12,13,14,15);
    break;
    case 8:
    console.log(8,9,10,11,12,13,14,15);
    break;
    case 9:
    console.log(9,10,11,12,13,14,15);
    break;
    case 10:
    console.log(10,11,12,13,14,15);
    break;
    case 11:
    console.log(11,12,13,14,15);
    break;
    case 12:
    console.log(12,13,14,15);
    break;
    case 13:
    console.log(13,14,15);
    break;
    case 14:
    console.log(14,15);
    break;
    case 15:
    console.log(15);
    break;
    default:
    console.log('Значение не соответствует указанным параметрам');
    break;
}

/*5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.*/

var a = 5;
var b = 3;

function summ(a, b){
    return a + b;
}
var c = summ;
console.log(c);


function subtraction(a, b){
    return a - b;
}
var d = subtraction;
console.log(d);


function division(a, b){
    return a / b;
}
var f = division;
console.log(f);


function mult(a, b){
    return a * b;
}
var m = mult;
console.log(m);

/*function calc(a) {
    return a * a;
  }
   
  var x = calc(5);
  alert(x);   */



  /*6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
  где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
  В зависимости от переданного значения операции выполнить одну из арифметических операций 
  (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).*/


function mathOperation(arg1, arg2, operation){
    switch(operation){
       	case 'summ':
            return arg1 + arg2;
            break;
       	case 'subtraction':
            return arg1 - arg2;
            break;
        case 'division':
            return arg1 / arg2;
            break;
       	case 'mult':
            return arg1 * arg2;
            break;
   		}
};


/*7) *Сравнить null и 0. Попробуйте объяснить результат.*/
//null - тир даннх означает неизвестно, но если привести null к числовому значение то:
if (+null>0, +null<0){
    console.log('Преобразованное null в чило и 0 не равны')
}else{
    console.log('Преобразованное null в чило и 0 равны')
}

/*8) *С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val – заданное число, pow – степень.*/

//xn = x * xn-1.


function power(val, pow){
    if (pow===1){
        return val;
    }else {
        return val * power(pow-1);
    }
}
console.log(power)
