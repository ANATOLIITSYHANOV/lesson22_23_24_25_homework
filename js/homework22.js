
let name = prompt("What is your name?");
alert ("Your name" +` `+ name);
console.log (name);

//------------------------------------------------------

let a = prompt("What a year of birth?");
const data = 2019;
let age = data - a;
alert("Your age"+` `+age);

//------------------------------------------------------

let perim = prompt("what is the length of the side of the square?");
alert(`Square perimeter= ${perim*4}`);

//------------------------------------------------------

let r = parseInt(prompt("Введите радиус окружности"));
const p = 3.1415;
alert(`площадь окружности = ${p*(r*r)}`);

//------------------------------------------------------

let s = parseInt(prompt("Расстояние в км между двумя городами?"));
let t = parseInt(prompt("За сколько часов ви хотите добраться?"));
alert(`Скорость, с которой необходимо двигаться= ${s/t}`);

//------------------------------------------------------

let kd = parseInt(prompt("Количество dollars?"));
const eur = 28.5;
const dolr = 25;
alert(`Получется euro= ${(dolr/eur)*kd}`);

//------------------------------------------------------

let fleshka = parseInt(prompt("Укажите объем флешки в Гб?"));
let e = fleshka*1024/820
alert(`${e.toFixed(2)} файлов размером в 820 Мб помещается на флешку`);

//------------------------------------------------------

let money = parseInt(prompt("Скільки у вас грошей?"));
let choc = parseInt(prompt("Ціна шоколадки?"));
let number = Math.floor(money/choc);
alert(`${number} шоколадки получиться, і здача ${money-(number*choc)}`);

//------------------------------------------------------

let n = prompt("N =");
console.log(n);
let s = "";
for (let i = n.length - 1; i >= 0; i--) {
  s += n[i];
}
console.log(s);

//------------------------------------------------------

let vklad = parseInt(prompt("Сумма вклада в доларах на 2 месяца, с процентной ставкой депозита 5% годовых?"));
alert(`${((vklad/100*5)/6).toFixed(2)} долара, за вклад ${vklad} доларов на 2 месяца, с процентной ставкой депозита 5% годовых.`);

//------------------------------------------------------

let vklad2 = parseInt(prompt("Сумма вклада в доларах?"));
let month = 2 ;
const procent = 5/12 ;
alert(`${((vklad2/100)*(month*procent)).toFixed(2)} долара, за вклад ${vklad2} доларов на 2 месяца, с процентной ставкой депозита 5% годовых.`);
