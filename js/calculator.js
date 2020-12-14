let userOperator = prompt('Введите оператор для вычисления (+, -, *, /):');

let userFirstOperand = parseInt(prompt('Введите первое целое чило:'));

let userSecondOperand = parseInt(prompt('Введите второе целое чило:'));

let isUserOperator = userOperator.includes('+' || '-' || '*' || '/');

let result = 0;

if (isUserOperator) {
  userFirstOperand;
} else {
  alert('Вы ввели неверный оператор для вычисления');
}

switch (userOperator) {
  case '+':
    result = userFirstOperand + userSecondOperand;
    break;

  case '-':
    result = userFirstOperand - userSecondOperand;
    break;

  case '*':
    result = userFirstOperand * userSecondOperand;
    break;

  case '/':
    result = userFirstOperand / userSecondOperand;
    break;
}

alert(
  `Ваш результат: ${userFirstOperand} ${userOperator} ${userSecondOperand} = ${result}`,
);

// Напишите калькулятор который бы работал с 4 операторами +,-,*,/.
// Через prompt сначала спрашивается оператор потом вызывается ещё 2 промта,
// которые бы спрашивали значения с которыми будет проведена операция.
// После мы просто выводим результат в alert.
