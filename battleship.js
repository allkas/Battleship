let location1 = 3;
let location2 = 4;
let location3 = 5;

let guess; // эта переменная не важна пока пользватель не введет координаты выстрела.
let hits = 0; // присваивается начальное значение 0;
let guesses = 0; // присваивается начальное значение 0;
let isSunk = false; // пока корабль не потоплен значеие false;

while (isSunk == false) {
  prompt('Ready, aim, fire! (enter a number 0-6):'); // при каждом выполнении цикла,запрашиваем у пользователя координаты выстрела
  if (guess < 0 || guess > 6) {
    alert('Please enter a valid cell number!');
  } else {
    guesses += 1; // если значение корректно, то увеличиваем кол-во выстрелов пользователя
      if (guess == location1 || guess == location2 || guess == location3) {
        hits += 1; //если есть попадание, увеличиваем счетчик
        if (hits == 3) {
          isSunk = true;
          alert('You sank my battleship!');
        }
      }
  }
}
