"use strict";

// ===================================================
//          JS-Vertiefung – Array-Level_1_1
// ===================================================

console.log("%c JS-Vertiefung – Array-Level_1_1", "color: tomato");

const person = ['Bruce', 'Wayne', 'Superreich'];
console.log(person);

const friends  = ['André', 'Sven', 'Natascha'];
console.log(friends );

const favoriteFood  = ['Nudeln', 'Pommes', 'Pizza'];
console.log(favoriteFood);

// ===================================================
//          JS-Vertiefung – Array-Level_1_2
// ===================================================

console.log("%c JS-Vertiefung – Array-Level_1_2", "color: tomato");

console.log(person[0]);
console.log(person[1]);
console.log(person[2]);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);

console.log(favoriteFood[0]);
console.log(favoriteFood[1]);
console.log(favoriteFood[2]);

// ===================================================
//          JS-Vertiefung – Array-Level_1_3
// ===================================================

console.log("%c JS-Vertiefung – Array-Level_1_3", "color: tomato");

console.log(person.length);
console.log(friends.length);
console.log(favoriteFood.length);

// ===================================================
//          JS-Vertiefung – Array-Level_1_4
// ===================================================

console.log("%c JS-Vertiefung – Array-Level_1_4", "color: tomato");

console.log(person);
person.push('Batman', 'Gotham-City');
console.log(person);

console.log(friends);
friends.push('Ernie', 'Bert');
console.log(friends);

console.log(favoriteFood);
favoriteFood.push('Döner', 'Salat');
console.log(favoriteFood);

// ===================================================
//          JS-Vertiefung – Array-Level_1_5
// ===================================================

console.log("%c JS-Vertiefung – Array-Level_1_5", "color: tomato");

console.log(person);
const lastValue1 = person.pop();
console.log(lastValue1);
console.log(person);

console.log(friends);
const lastValue2 = friends.pop();
console.log(lastValue2);
console.log(friends);

console.log(favoriteFood);
const lastValue3 = favoriteFood.pop();
console.log(lastValue3);
console.log(favoriteFood);

// ===================================================
//          JS-Vertiefung – Array-Level_1_6
// ===================================================

console.log("%c JS-Vertiefung – Array-Level_1_6", "color: tomato");

console.log(person);
const firstValue1 = person.shift();
console.log(firstValue1);
console.log(person);

// ===================================================
//          JS-Vertiefung – Array-Level_1_7
// ===================================================

console.log("%c JS-Vertiefung – Array-Level_1_7", "color: tomato");

console.log(friends);
friends.unshift('Bert', 'Krümelmonster');
console.log(friends);

console.log(favoriteFood);
favoriteFood.unshift('Reis mit Pfannengemüse', 'Kartoffelgratin');
console.log(favoriteFood);

// ===================================================
//          JS-Vertiefung – Array-Level_1_9
// ===================================================

console.log("%c JS-Vertiefung – Array-Level_1_9", "color: tomato");

const numberArray = [23, 54, 75];
console.log(numberArray);
numberArray.push(11, 32, 42, 5, 71);
console.log(numberArray);
numberArray.unshift(1, 3, 7, 8, 14);
console.log(numberArray);
numberArray.pop();
numberArray.pop();
console.log(numberArray);
numberArray.shift();
numberArray.shift();
console.log(numberArray);
