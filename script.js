/* TASK - 1  */
let user = {};

user.name = prompt('Введите ваше имя:', '');

user.age = prompt('Введите ваш возраст:', '');

user.gender = confirm('Вы мужчина?') ? 'Мужчина' : 'Женщина';

console.log('Пользователь:', user.name);
console.log('Возраст:', user.age);
console.log('Пол:', user.gender);


/* Task - 2  */

let number = prompt('Введите число:', '');

if (!isNaN(number)) {
  alert('Введенное число: ' + number);
} else {
  alert('Ошибка: введенное значение не является числом.');
}


/* Task-3 */
let a = +prompt('a?', ''); // преобразуем введенное значение в число

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert('2,3');
    break;
  default:
    // действие по умолчанию, если не совпало ни с одним из case
    alert('Другое значение');
}


/* Task-4 */
let sum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}

console.log('Сумма четных чисел от 1 до 100:', sum);
