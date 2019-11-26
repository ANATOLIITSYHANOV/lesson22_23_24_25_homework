/**
 * 
 * Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше,
 *  чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны. 
 */
let nam = (a, b) => {
    while (a < b) {
        return -1;
    }
    if (b < a) {
        return 1;
    }
    return 0;
}
console.log(nam(2, 2));  

/**
 * 
 * Написать функцию, которая вычисляет факториал переданного ей числа.
 */

let factorAnyNamber = (a) => {
    let sum = 0
    a = String(a)
    for (let i = 0; i < a.length; i++) {
        let b = factorOneNamber(a[i]);
        sum += b
    }
    return sum;
}

let factorOneNamber = (a) => {
    let sum = 1;
    for (let i = a; i > 1; i--) {
        if (i == 0){
            return  i == 1;
        }
        sum *= i
    }
    return sum;
}
console.log(factorOneNamber(6))
console.log(factorAnyNamber(6))
console.log(factorAnyNamber(300))

/**
 * 
 * Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например:
 *  цифры 1, 4, 9 превратятся в число 149.
 */

let nam2 = (a, b ,c) => {
    let x = parseInt(`${a}${b}${c}`)
    return console.log(x)
}
 nam2(24, 4, 0)

 /**
 * 
 * Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
 *  Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
 */

let S = (a, b) => {
    let s = a * b
    if (b == undefined) {
        s = a * a
    }
    return s;
}
console.log(S(2)); 

/**
 * 
 * Написать функцию, которая проверяет, является ли переданное ей число совершенным.
 *  Совершенное число – это число, равное сумме всех своих собственных делителей.
 */

let nam3 = (a) => {
    mas = []
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            mas.push(i)
        }
    }
    let sum = mas.reduce((total, e) => {
        return total + e;
    }, 0);
    sum = sum - a;
    if (a == sum) {
        console.log("Совершенное число");
    } else {
        console.log("Не совершенное число");
    }
}
nam3(45) 

/**
 * 
 * Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
 *  и выводит только те числа из диапазона, которые являются совершенными.
 *  Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.  
 */

let nam4 = (a) => {
    mas = []
    for (let i = 1; i <= a; i++) {
        if (a % i == 0) {
            mas.push(i)
        }
    }
    let sum = mas.reduce((total, e) => {
        return total + e;
    }, 0);
    sum = sum - a;
    if (a == sum) {
        console.log(sum);
    }
}
let range = (start, end) => {
    while (start <= end) {
        start++;
        nam4(start)
    }
}
range(4, 30)

/**
 * 
 * Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
 * Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
 */

let clock = (hour, minutes, seconds) => {
     let hours = (a) => {
        if (a !== Number(a) || a > 24) {
            return "Ошибка";
        } else if (a > 9) {
            return a
        } else {
            return `0${a}`
        }
    }
    let minutesSeconds = (a) => {
        if (a == undefined) {
            return "00"
        } else if (a !== Number(a) || a > 60) {
            return "Ошибка";
        } else if (a > 9) {
            return a
        } else {
            return `0${a}`
        }
    }
    console.log(`«${hours(hour)}:${minutesSeconds(minutes)}:${minutesSeconds(seconds)}»`);
}
clock(24,);

/**
 * 
 * Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
 */


let time = (hours, minutes, seconds) => {
    hours = hours * 3600;
    minutes = minutes * 60;
    return hours + minutes + seconds;
}
console.log(time(2, 12, 35));

/**
 * 
 * Написать функцию, которая принимает количество секунд, переводит их в часы,
 *  минуты и секунды и возвращает в виде строки «чч:мм:сс».
 *
 */

let timeRevers = (seconds) => {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - (hours * 3600)) / 60)
    let secondss = seconds - (hours * 3600) - (minutes * 60)
    return `«${hours}:${minutes}:${secondss}»`;
}
console.log(timeRevers(7955));

/**
 * 
 * Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров,
 *  которые описывают 2 даты,и возвращает результат в виде строки «чч:мм:сс».
 *  При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды,
 *  узнайте разницу в секундах,а потом разницу переведите обратно в «чч:мм:сс»
 * 
 */

let gives = (a, b, c, a2, b2, c2) => {
    let give = time(a, b, c);
    let give2 = time(a2, b2, c2);
    let differenceGive = Math.max(give, give2) - Math.min(give, give2);
    return timeRevers(differenceGive);
}

console.log(gives(2, 12, 35, 2, 12, 37));
