const pricePerDroid = 3000;
let credits = 23580;
let message;
let totalPrice;

const CANCELED = 'Отменено пользователем!';
const INSUFFICIENT_FUNDS = 'Недостаточно средств на счету!';
const INVALID_PASSWORD = 'Доступ запрещен, неверный пароль!';

let droidsQuantity = prompt('Введите количество дроидов');

if (droidsQuantity === null) {
  message = CANCELED;
} else if (Number(droidsQuantity) * pricePerDroid >= credits) {
  message = INSUFFICIENT_FUNDS;
  totalPrice = droidsQuantity * pricePerDroid;
} else {
  credits = credits - Number(droidsQuantity) * pricePerDroid;
  message = `Вы купили ${droidsQuantity} дроидов, на счету осталось ${credits} кредитов.`;
}

alert(message);
