(function () {
  var FAST_SECONDS = 20;

  var AWARDS = [
    { id: "first",    icon: "🎁", name: "Первый подарок",       desc: "Собран первый подарок" },
    { id: "fast",     icon: "⚡", name: "Молния",               desc: "SMS расшифровано быстрее " + FAST_SECONDS + " секунд" },
    { id: "streak5",  icon: "👁", name: "Зоркий глаз",          desc: "5 подарков подряд без ошибок" },
    { id: "half",     icon: "🛷", name: "Полмешка",             desc: "Собрано 8 подарков" },
    { id: "decoder", icon: "🧩", name: "Дешифровщик", desc: "Расшифрованы 10 SMS" },
    { id: "long", icon: "📱", name: "Мастер шифра", desc: "Слово из 10 букв или больше — без ошибок" },
    { id: "clean",    icon: "⭐", name: "Без единой ошибки",    desc: "Все подарки найдены с первой попытки" },
    { id: "all",      icon: "🎅", name: "Помощник Деда Мороза", desc: "Собраны все подарки" }
  ];
  window.GAME_RULES = { fastSeconds: FAST_SECONDS, awards: AWARDS };
})();
