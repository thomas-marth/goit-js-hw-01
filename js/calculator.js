let userOperator = prompt('Введите оператор для вычисления (+, -, *, /):');

let userFirstOperand = parseInt(prompt('Введите первое целое чило:'));

let userSecondOperand = parseInt(prompt('Введите второе целое чило:'));

let isUserOperator = userOperator.includes('+' || '-' || '*' || '/');

let result = 0;

if (isUserOperator === true) {
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
