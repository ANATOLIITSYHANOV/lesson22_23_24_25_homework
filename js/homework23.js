let age = parseInt(prompt("Введите возраст"));
if (isNaN(age)) {
    console.log("Неправильно введен возраст!");
  } else {
    if (age >=0 && age < 12) {
      console.log("Ребенок");
    } else if (age < 18) {
      console.log("Подросток");
    } else if (age < 60) {
      console.log("Взрослый");
    } else {
      console.log("Пенсионер");
    }
  }

//------------------------------------------------------

let s = ")!@#$%^&*(";
let x = parseInt(prompt("X = "));
console.log(x);
console.log(s[x]);

//------------------------------------------------------

let namber_3 = parseInt(prompt("Введите трехзначное число"));
let a1 = Math.floor(namber_3/100);
console.log(a1);
let a2 = Math.floor(namber_3/10) - (a1*10);
console.log(a2);
let a3 = namber_3 - (a1*100) - (a2*10);
console.log(a3);
if ( a1 == a2 ){
  console.log("есть одинаковые цифры");
} else if ( a1 == a3 ){
  console.log("есть одинаковые цифры");
}  else if ( a2 == a3 ){
  console.log("есть одинаковые цифры");
} else {
  console.log("нету одинаковых цифр");
}

//------------------------------------------------------

let year = parseInt(prompt("Введите год"));
if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)){
  console.log("Год високосный");
} else {
  console.log("Год невисокосный");
}

//------------------------------------------------------

let money = parseInt(prompt("Введите количество USD"));
let currency = (prompt("Выбирете, в какую валюту хочете перевести EUR, UAN или AZN"));
if (currency == "EUR") {
  console.log(money * 2);
} else if (currency == "UAN"){
  console.log(money * 3);
} else if (currency == "AZN"){
  console.log(money * 4);
}

//------------------------------------------------------

let money = parseInt(prompt("Введите сумму к оплате"));
if ( money >= 200 && money <= 300 ){
  console.log(`сумму к оплате ${money-(money*0.03)}`);
} else if ( money >= 300 && money <= 500 ){
  console.log(`сумму к оплате ${money-(money*0.05)}`);
}  else if ( money > 500 ){
  console.log(`сумму к оплате ${money-(money*0.07)}`);
}

//------------------------------------------------------

let perim = prompt("Введите периметр квадрата");
console.log(`площадь квадрата= ${(perim / 4)*(perim / 4)}`);
let L = parseInt(prompt("Введите длину окружности"));
const p = 3.1415;
console.log(`площадь окружности = ${((L*L) / (4*p)).toFixed(2)}`);
if  (L <= perim) {
  console.log("окружность поместиться в указанный квадрат");
} else{
  console.log("окружность не поместиться в указанный квадрат");
}

//------------------------------------------------------

let A = prompt("Вопрос A? Варианты ответов A, B и С");
let B = prompt("Вопрос B? Варианты ответов A, B и С");
let C = prompt("Вопрос C? ВариантЫ ответов A, B и С");
let mark = 0 ;
if (A == "A") {
  mark += 2;
}
if (B == "B") {
  mark += 2;
}
if (C == "C") {
  mark += 2;
}
console.log(`Ваш бал= ${mark}`);

//------------------------------------------------------

let day = parseInt(prompt("Enter the day"));
let month = parseInt(prompt("Enter the month"));
let year = parseInt(prompt("Enter the year"));
let nextDay = day,
  nextMonth = month,
  nextYear = year;
switch (month) {
  case 2:
    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
      if (day == 29) {
        nextDay = 1;
        nextMonth++;
      } else {
        nextDay++;
      }
    } else {
      if (day == 28) {
        nextDay = 1;
        nextMonth++;
      } else {
        nextDay++;
      }
    }
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    if (day == 30) {
      nextDay = 1;
      nextMonth++;
    } else {
      nextDay++;
    }
    break;
  default:
    if (day == 31) {
      nextDay = 1;
      nextMonth++;
    } else {
      nextDay++;
    }
}
if (nextMonth > 12) {
  nextMonth = 1;
  nextYear++;
}
console.log(`${nextDay}.${nextMonth}.${nextYear}`);
