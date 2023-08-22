/**Agenda
 * ------
 * 1- let var const
 * 2- spread operator
 * 3- destructing
 * 4- rest params
 * 5- default values
 * 6-Arrow Function
 * 7-Array API
 * 8-String API
 */

/***
 * Var
 * -- reassign
 * -- redeclare
 * -- Hoisting
 * -- added to window object
 * == function scope
 * --------------------------
 * let
 *  --
 *  -- reassign
 *  -- can't redeclare
 * -- can't be hoisted
 * -- not added to window object
 *  -- block scope
 * ---------------
 * const
 *  --
 *  -- can't reassign
 *  -- can't redeclare
 * -- can't be hoisted
 * -- not added to window object
 *  -- block scope
 *
 */
// console.log(fname);
// let fname = "ali";

// console.log(window.fname);
// function show() {
// 	let test = "alaa";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(i);
// 		console.log(test);
// 	}
// 	// console.log("i outside loop ", i);
// }

// show();

// console.log(fname);
// const fname = "ali";

// const arr = [10, 30];
// arr = [];
// arr.push("new value");

// console.log(arr);
/**-------------------------- */

// let a = 3;
// let b = a;
// b = 5;

// console.log("a ", a);
// console.log("b ", b);
// console.log("------------------");

// let arr1 = [10, 30, "mona", "alaa"];
// let arr2 = [true, [30, 40], ...arr1];
// for (let i = 0; i < arr1.length; i++) {
// 	arr2[i] = arr1[i];
// }

// arr1.push("ahmed");
// console.log("arr1 ", arr1);
// console.log("arr2 ", arr2);
// let arr = [10, 40, 2, 70];

// console.log(Math.max(...arr));
/**------------------------ */

// let arr = [10, "mona", "ali"];
// // let x = arr[0];
// // let y = arr[1];
// let [, y, z] = arr;

// console.log(y);

// console.log(z);

// let person = { fname: "Ali", lname: "kareem", color: "red" };

// // let x = person.fname;
// // let y = person.color;

// let { fname, color } = person; // syntax suger
// console.log(fname);
// console.log(color);
/**-------------- */

// function getArr(fname) {
// 	return [
// 		fname,
// 		function () {
// 			console.log(fname);
// 		},
// 	];
// }

// let [x, y] = getArr("mona");
// y();

/**----------------------------- */
// function show(x, y, ...rest) {
// 	console.log(rest);
// 	// console.log(arguments);
// 	// x = x || 0
// 	console.log("x ", x);
// 	// console.log("y ", y);
// }

// show(3, 6, "ali", "ahmed", true);

/**-------------------------------- */
// function
/**
 * arrow function
 */

// function statement
// function add(x, y) {
// 	return x + y;
// }

// // function expression
// let add2 = function (x, y) {
// 	return x + y;
// };
// /**-----------Arrow function--------- */
// let add3 = () => "Welcome dot net";

// console.log(add3());

// var fname = "Ali";
// function getName() {
// 	console.log(this.fname);
// }

// this --> window
//person
// window

// let person = {
// 	fname: "ahmed",
// 	display: function () {
// 		var that = this;
// 		setTimeout(function () {
// 			console.log(that.fname);
// 		}, 2000);
// 	},
// };

// person.display();

// this --> window
// var fname = "mona";
// let person = {
// 	fname: "ali",
// 	display: () => {
// 		console.log(this.fname);
// 	},
// };

// person.display();
// this --> window
// this --> person
// this --> window
// var fname = "mona";
// let person = {
// 	fname: "ahmed",
// 	display: () => {
// 		setTimeout(() => {
// 			console.log(this.fname);
// 		}, 2000);
// 	},
// };

// person.display();
/**---------- */

// let str = "hello";
// let str2 = "from iti";

// console.log(str.includes("ell"));
/**-----------------
 * find
 * findIndex
 * map
 * filter
 * every
 * some
 * foreach
 * ------------------- */
// let arr = [20, 10, 44, 66];

// let result = arr.findIndex((item) => item > 30);
// console.log(result);

// function findElement(item, index) {
// 	console.log(item);
// 	console.log(index);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 30) return i;
// 	}

// }

// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);
// 	console.log("--------------");
// }

/**------------- */

// let tracks = ["SD", "OS", "Dotnet", "Mearn"];

// let result = tracks.map(function (item, index) {
// 	return {
// 		id: index + 1,
// 		trackName: item,
// 	};
// });

// console.log(result);

/**-------------- */

// let products = [
// 	{
// 		id: 1,
// 		productName: "Phone",
// 		cat: "Elec",
// 	},
// 	{
// 		id: 2,
// 		productName: "Sumsung",
// 		cat: "Elec",
// 	},
// 	{
// 		id: 3,
// 		productName: "Pen",
// 		cat: "School",
// 	},
// 	{
// 		id: 4,
// 		productName: "Book",
// 		cat: "School",
// 	},
// ];

// let result = products.filter((item) => item.cat == "School");
// console.log(result);
/**----------------- */

// let tracks = ["sd", "open source", "pd"];

// tracks.forEach((item, index) => {
// 	console.log(`welcome ${item}`);
// });
// let result = tracks.some((item) => item.startsWith("s"));
// console.log(result);
