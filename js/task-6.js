let input;
let total = 0;

do {
  input = prompt('Введите число');
  total += Number(input);
  if (input === null) {
    break;
  }

  input = Number(input);
} while (true);
alert(`Общая сумма чисел равна ${total}`);
