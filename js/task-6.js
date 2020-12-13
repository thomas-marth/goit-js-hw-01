let userInput;
let total = 0;

do {
  userInput = prompt('Введите число');
  total += Number(userInput);
  if (userInput === null) {
    break;
  }

  userInput = Number(userInput);
} while (true);
alert(`Общая сумма чисел равна ${total}`);
