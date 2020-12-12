const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const CANCELED = 'Отменено пользователем!';
const SUCCESS = 'Добро пожаловать!';
const INVALID_PASSWORD = 'Доступ запрещен, неверный пароль!';

let userPassword = prompt('Введите пароль:');

if (userPassword === ADMIN_PASSWORD) {
  message = SUCCESS;
} else if (userPassword === null) {
  message = CANCELED;
} else {
  message = INVALID_PASSWORD;
}

alert(message);
