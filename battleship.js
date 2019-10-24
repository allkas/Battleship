var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,

	ships: [
		{ locations: [0, 0, 0], hits: ["", "", ""] }, //модели кораблей
		{ locations: [0, 0, 0], hits: ["", "", ""] },
		{ locations: [0, 0, 0], hits: ["", "", ""] }
	],
  fire: function(guess) { // метод получает координаты выстрела
		for (var i = 0; i < this.numShips; i++) { // перебирает массив проверяя каждый корабль
			var ship = this.ships[i]; // объект корабля. Необходимо проверить, совпадают ли координаты выстрела с координатами одной из занимаемых им клеток.
			var index = ship.locations.indexOf(guess);
    }
  }
};


// let randomLoc = Math.floor(Math.random() * 5); // умножаем на 5 потому что перавя точка не может быть больше 4
// let location1 = randomLoc;
// let location2 = randomLoc + 1;
// let location3 = randomLoc + 2;
//
// let guess; // эта переменная не важна пока пользватель не введет координаты выстрела.
// let hits = 0; // присваивается начальное значение 0;
// let guesses = 0; // присваивается начальное значение 0;
// let isSunk = false; // пока корабль не потоплен значеие false;
//
// while (isSunk == false) {
//   prompt('Ready, aim, fire! (enter a number 0-6):'); // при каждом выполнении цикла,запрашиваем у пользователя координаты выстрела
//   if (guess < 0 || guess > 6) {
//     alert('Please enter a valid cell number!');
//   } else {
//     guesses += 1; // если значение корректно, то увеличиваем кол-во выстрелов пользователя
//       if (guess == location1 || guess == location2 || guess == location3) {
//         alert('HIT!');
//         hits += 1; //если есть попадание, увеличиваем счетчик
//         if (hits == 3) {
//           isSunk = true;
//           alert('You sank my battleship!');
//         }
//       } else {
//         alert('MISS');
//       }
//     }
// }
// let stats = "You took " + guesses + " guesses to sink the batlleship, " + "which means your shooting accuracy was " + (3/guesses);
// alert(stats);
//
// var view = {
// 	displayMessage: function(msg) {
// 		var messageArea = document.getElementById("messageArea");
// 		messageArea.innerHTML = msg;
// 	},
//
// 	displayHit: function(location) {
// 		var cell = document.getElementById(location);
// 		cell.setAttribute("class", "hit");
// 	},
//
// 	displayMiss: function(location) {
// 		var cell = document.getElementById(location);
// 		cell.setAttribute("class", "miss");
// 	}
//
// };
// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");
