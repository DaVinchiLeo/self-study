/*
1)game with objects

const name = "Цю хуйню";
const ele = "9738";
const print = function () {
  console.log(`Я ебал....${this.name}  ${this.ele} раз`);
};
const funHike = { name, ele, print };
funHike.print();

console.log(funHike);*/

/*
2)game with class
class Vacation {
  constructor(destination, lenght) {
    this.destination = destination;
    this.lenght = lenght;
  }
  print() {
    console.log(`${this.destination} will ${this.lenght} days.`);
  }
}
const trip = new Vacation("Santiago,Cheile", 7);
trip.print();
const trip2 = new Vacation("Santiago,Cheile", 7);
trip2.print();
*/
/*
3) game with function
const createScream = function (logger) {
  return function (message) {
    logger(message.toUpperCase() + "!!!");
  };
};
const scream = createScream((message) => console.log(message));

scream(`first`);
scream(`second`);
scream(`third`);
*/
