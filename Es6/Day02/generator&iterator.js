/** Agenda
 * -------------
 *  -- Generator
 *  -- iterator
 *  -- setTimeout execution (Asynchrouns)
 *  -- Promises [then .. catch] [Async .. await]
 *  -- fetch
 *
 */

// let arr = ["mona", "Ali", "Ahmed", 50];

// console.log(arr);
// for (let i in arr) {
// 	console.log(i);
// }

// console.log("-----------------");
// for (let value of arr) {
// 	console.log(value);
// }

/**------------------------- */

// let person = {
// 	fname: "Ali",
// 	color: "red",
// };

// console.log(person);
// for (let key in person) {
// 	console.log(person[key]);
// }

// for (let i of person) {
// 	console.log(i);
// }

// let x = Symbol("age");
// let y = Symbol("age");
// console.log(x == y);

// var myKey = "age";

// var myKey = Symbol();
// let person = {
// 	fname: "ali",
// 	[myKey]: function () {
// 		return {
// 			next: function () {
// 				console.log("Hello from next");
// 			},
// 		};
// 	},
// };

// var result = person[myKey]();
// console.log(result.next());

// let iter = arr[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// for (let value of arr) {
// 	console.log(value);
// }
/**
 * Symbol.iterator == function
 *
 * return {}
 *
 * {} has next
 * next return {value,done}
 *
 *
 *
 */

// let person = {
// 	fname: "mona",
// 	display: function () {
// 		console.log("From display 1");
// 	},
// };
// // person.fname = "Ali";

// person.display = function () {
// 	console.log("From display 2");
// };

// person.display();

// let arr = ["mona", "Ali", "Ahmed", 50];

// arr[Symbol.iterator] = getEvenValues;
// let person = {
// 	fname: "ali",
// 	lname: "Ahmed",
// 	age: 40,
// };

// person[Symbol.iterator] = getEvenValues;
// function getEvenValues() {
// 	let count = 0;
// 	return {
// 		next: function () {
// 			count += 2;
// 			if (count <= 10) {
// 				return {
// 					value: count,
// 					done: false,
// 				};
// 			} else {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			}
// 		},
// 	};
// }

// person[Symbol.iterator] = myGen;

// function* myGen() {
// 	for (let i = 0; i <= 10; i += 2) {
// 		yield i;
// 	}
// }
// function* myGen() {
// 	for (let i in this) {
// 		yield { [i]: this[i] };
// 	}
// }

// for (let value of person) {
// 	console.log(value);
// }

// let iter = myGen();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

/**-------------- */

// let arr = ["mona", "ali", "alaa"];

// arr[Symbol.iterator] = function () {
// 	let count = 0;
// 	return {
// 		next: () => {
// 			if (count == arr.length) {
// 				return {
// 					value: undefined,
// 					done: true,
// 				};
// 			} else {
// 				return {
// 					value: this[count++],
// 					done: false,
// 				};
// 			}
// 		},
// 	};
// };

// for (let value of arr) {
// 	console.log(value);
// }

/**----------- */
