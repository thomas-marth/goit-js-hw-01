const pricePerDroid = 3000;
let credits = 23580;
let message;

const CANCELED = 'Отменено пользователем!';
const INSUFFICIENT_FUNDS = 'Недостаточно средств на счету!';

let droidsQuantity = prompt('Введите количество дроидов');
let totalPrice = Number(droidsQuantity) * pricePerDroid;

if (!+droidsQuantity) {
  message = CANCELED;
} else if (totalPrice > credits) {
  message = INSUFFICIENT_FUNDS;
} else {
  credits -= totalPrice;
  message = `Вы купили ${droidsQuantity} дроидов, на счету осталось ${credits} кредитов.`;
}

alert(message);
