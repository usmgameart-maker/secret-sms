// НАСТРОЙКИ ИГРЫ — редактируйте этот файл в текстовом редакторе.
// GIFTS: name — подпись на полке и слово для шифрования; acc — «получит ...»;
// img — имя картинки в папке files/img. Код SMS вычисляется автоматически.
// LETTERS: name — имя ребёнка, gift — ключ подарка в GIFTS. Порядок строк = порядок SMS.
// 6 подарков — шум, их никто не заказывает.
window.GAME = {
  "title": "Секретные SMS Деду Морозу",
  "tagline": "Расшифруй 15 SMS и узнай, о каких подарках мечтают дети.",
  "subtitle": "Зашифрованные SMS"
};
window.PHONE_KEYS = [
  {
    "digit": "1",
    "letters": "АБВ"
  },
  {
    "digit": "2",
    "letters": "ГДЕЁ"
  },
  {
    "digit": "3",
    "letters": "ЖЗИЙ"
  },
  {
    "digit": "4",
    "letters": "КЛМ"
  },
  {
    "digit": "5",
    "letters": "НОП"
  },
  {
    "digit": "6",
    "letters": "РСТ"
  },
  {
    "digit": "7",
    "letters": "УФХЦ"
  },
  {
    "digit": "8",
    "letters": "ЧШЩ"
  },
  {
    "digit": "9",
    "letters": "ЪЫЬ"
  },
  {
    "digit": "0",
    "letters": "ЭЮЯ"
  }
];
window.GIFTS = {
  "bricks": {
    "name": "Конструктор",
    "acc": "конструктор",
    "img": "bricks.png"
  },
  "bear": {
    "name": "Мишка",
    "acc": "мишку",
    "img": "bear.png"
  },
  "skates": {
    "name": "Коньки",
    "acc": "коньки",
    "img": "skates.png"
  },
  "puzzles": {
    "name": "Пазлы",
    "acc": "пазлы",
    "img": "puzzles.png"
  },
  "easel": {
    "name": "Мольберт",
    "acc": "мольберт",
    "img": "easel.png"
  },
  "computer": {
    "name": "Компьютер",
    "acc": "компьютер",
    "img": "computer.png"
  },
  "robot": {
    "name": "Робот",
    "acc": "робота",
    "img": "robot.png"
  },   
  "sled": {
    "name": "Санки",
    "acc": "санки",
    "img": "sled.png"
  },
  "book": {
    "name": "Книга",
    "acc": "книгу",
    "img": "book.png"
  },
  "doll": {
    "name": "Кукла",
    "acc": "куклу",
    "img": "doll.png"
  },
  "guitar": {
    "name": "Гитара",
    "acc": "гитару",
    "img": "guitar.png"
  },
  "rollers": {
    "name": "Ролики",
    "acc": "ролики",
    "img": "rollers.png"
  },
  "tablet": {
    "name": "Планшет",
    "acc": "планшет",
    "img": "tablet.png"
  },
  "scooter": {
    "name": "Самокат",
    "acc": "самокат",
    "img": "scooter.png"
  },
  "drum": {
    "name": "Барабан",
    "acc": "барабан",
    "img": "drum.png"
  },
  "rcCar": {
    "name": "Машинка",
    "acc": "машинку",
    "img": "rc-car.png"
  },
  "rope": {
    "name": "Скакалка",
    "acc": "скакалку",
    "img": "rope.png"
  },
  "console": {
    "name": "Приставка",
    "acc": "приставку",
    "img": "console.png"
  },
  "skateboard": {
    "name": "Скейтборд",
    "acc": "скейтборд",
    "img": "skateboard.png"
  },
  "bike": {
    "name": "Велосипед",
    "acc": "велосипед",
    "img": "bike.png"
  },
  "paints": {
    "name": "Краски",
    "acc": "краски",
    "img": "paints.png"
  }
};
window.LETTERS = [
  {
    "name": "Вера",
    "gift": "puzzles"
  },
  {
    "name": "Борис",
    "gift": "book"
  },
  {
    "name": "Рита",
    "gift": "doll"
  },
  {
    "name": "Соня",
    "gift": "robot"
  },
  {
    "name": "Даша",
    "gift": "guitar"
  },
  {
    "name": "Ирина",
    "gift": "rollers"
  },
  {
    "name": "Маша",
    "gift": "tablet"
  },
  {
    "name": "Диана",
    "gift": "scooter"
  },
  {
    "name": "Игорь",
    "gift": "drum"
  },
  {
    "name": "Кирилл",
    "gift": "rcCar"
  },
  {
    "name": "Марина",
    "gift": "rope"
  },
  {
    "name": "Денис",
    "gift": "console"
  },
  {
    "name": "Зоя",
    "gift": "skateboard"
  },
  {
    "name": "Никита",
    "gift": "bike"
  },
  {
    "name": "Вероника",
    "gift": "bricks"
  }
];
