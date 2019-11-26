/**
 * Подсчитать сумму всех чисел в заданном пользователем диапазоне.
 */

let namber_1 = parseInt(prompt("Задайте диопозон чисел начиная c: "));
let namber_2 = parseInt(prompt("заканчивая числом: "));
let sum = 0
while (namber_1 <= namber_2) {
    sum += namber_1;
    namber_1++;
}
console.log(sum);

/**
 * Запросить 2 числа и найти только наибольший общий делитель.
 */

let a = parseInt(prompt("A?"));
let b = parseInt(prompt("B?"));
let c = Math.min(a, b);
for (; c >= 1; c--) {
    if (a % c == 0 && b % c == 0) {
        console.log("C = ", c);
        break;
    }
}

/**
 * Запросить у пользователя число и вывести все делители этого числа.
 */

let namber = parseInt(prompt("Чичло ?"));
for ( i = 1; i <= namber; i++) {
    if (namber % i == 0) {
        console.log(i);
    }
}

/**
 * Определить количество цифр в введенном числе.
 */

let namber = prompt("Чичло ?");
console.log(namber.length);

/**
 * Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей.
 *  При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран.
 *  Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
 */

let positive = 0,
    negative = 0,
    zeros = 0,
    even = 0,
    odd = 0,
    arr = []
for (i = 0; i < 10; i++) {
    let namber = parseInt(prompt("Введите целое число"));
    if (namber !== 0) { namber % 2 == 0 ? even += 1 : odd += 1 ;
    } 
    namber == 0 ? zeros += 1 : namber > 0 ? positive +=1 : negative += 1;
    arr.push(namber)
}
console.log(arr)
console.log(`положительных=${positive} отрицательных=${negative} нулей=${zeros}  четных=${even} нечетных=${odd}`);

/**
 * Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример,
 *  вывести результат и спросить, хочет ли он решить еще один пример.
 *  И так до тех пор, пока пользователь не откажется.
 */

let end;
do{
let namber1 = parseInt(prompt("Чичло ?"));
let sym = prompt("Математический знак?");
let namber2 = parseInt(prompt("Чичло ?"));
let colc = eval(`${namber1}${sym}${namber2}`)
end = prompt(`Ответ: ${colc}. Продолжим?`)
} while(end !== null);

/**
 * Запросить у пользователя число и на сколько цифр его сдвинуть.
 *  Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
 */

let namber = (prompt("Чичло ?"));
let shift = parseInt(prompt("На сколько цифр его сдвинуть ?"));
let result = '';
for (let i = 0; i < namber.length; i++) {
   let a = parseInt(namber[i]) + shift
   result = result + a
}
console.log(result);

/**
 * Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» 
 * и так до тех пор, пока пользователь нажимает OK.
 */

let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let i = 0;
while (confirm(`${week[i]}: Next day?`)) {
  i++ % week.length;
} 

/**
 * Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
 */

let table = [2, 3, 4, 5, 6, 7, 8, 9]
for (let key in table){
    for (i = 1; i <= 10; i++){
        let namber = table[key] * i
        console.log(`${table[key]}*${i}=${namber}`);
    }
}

/**
 * Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом:
 *  каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя 
 * «Ваше число > N,< N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон.
 *  Начальный диапазон от 0 до 100, поделили пополам и получили 50. Если пользователь указал, что его число > 50,
 *  то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
 */

let namber = alert("Выберите чиcло от 0 до 100 ?"),
    minNamber = +0,
    maxNamber = +100,
    resultN = +50,
    end;

while (end !== 'угадал') {
    end = prompt(`Ваше число = ${resultN.toFixed(0)} ? Напишите один из  вариантов ответов:
    больше; меньше; угадал.`);
    if (end == 'больше') {
        minNamber = resultN;
        resultN = (minNamber + maxNamber) / 2;
    } else if (end == 'меньше') {
        maxNamber = resultN;
        resultN = (minNamber + maxNamber) / 2;
    } else if (end == 'угадал'){
        alert(`Ваше число: ${resultN.toFixed(0)}`);
    } else{
        alert("Некоректный ответ, попробуйте сначала");
        break;
    }
}
