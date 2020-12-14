let cost;
let destination = prompt('Введите страну доставки:');
let userValue = destination.toLowerCase();

switch (userValue) {
  case 'китай':
    cost = 100;
    break;

  case 'чили':
    cost = 250;
    break;

  case 'австралия':
    cost = 170;
    break;

  case 'индия':
    cost = 170;
    break;

  case 'ямайка':
    cost = 170;
    break;

  default:
    alert('В вашей стране доставка не доступна');
}

if (cost) {
  alert(
    `Доставка в ${destination.toUpperCase()} будет стоить ${cost} кредитов`,
  );
}
