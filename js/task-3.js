const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const CANCELED = 'Отменено пользователем!';
const SUCCESS = 'Добро пожаловать!';
const INVALID_PASSWORD = 'Доступ запрещен, неверный пароль!';

let password = prompt('Введите пароль:');

if (password === ADMIN_PASSWORD) {
  message = SUCCESS;
} else if (password === null) {
  message = CANCELED;
} else {
  message = INVALID_PASSWORD;
}

alert(message);
