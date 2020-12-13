const pricePerDroid = 3000;
let credits = 23580;
let message;

const CANCELED = 'Отменено пользователем!';
const INSUFFICIENT_FUNDS = 'Недостаточно средств на счету!';
const INVALID_PASSWORD = 'Доступ запрещен, неверный пароль!';

let droidsQuantity = prompt('Введите количество дроидов');
let totalPrice = Number(droidsQuantity) * pricePerDroid;

if (droidsQuantity === null) {
  message = CANCELED;
} else if (totalPrice > credits) {
  message = INSUFFICIENT_FUNDS;
} else {
  credits = credits - totalPrice;
  message = `Вы купили ${droidsQuantity} дроидов, на счету осталось ${credits} кредитов.`;
}

alert(message);
