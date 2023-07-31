/**
 * Agndea
 * ---------------------
 * 1- How are functions executes in memery ?
 * 2- Local Scope VS Global Scope
 * 3-Shadwing
 * 4-Object
 *  -- user defined (access/(read write) ....)
 * 5- window object (overview ... ) and this
 */
// var test = "ali";
// function add() {
// 	test = "mona";
// 	console.log(test);
// 	return "Welcome From ITI";
// }

// console.log(test);
// var result = add();
// console.log(result);

// function sayHello(trackName) {
// 	console.log("Hello " + trackName);
// 	return "Track Opened";
// }
// function greet(name) {
// 	console.log("Welcome From ITI");
// 	sayHello(name);
// }

// var result = greet("Dot Net");

// console.log(result);

// function greet(fname) {
// 	return function () {
// 		console.log("Hello " + fname);
// 	};
// }

// var result = greet("Ali");

// result()

// function getArr() {
// 	var arr = [];

// 	for (var i = 0; i < 3; i++) {
// 		arr.push(i);
// 	}
// 	return arr;
// }

// var result = getArr();
/**=================
 * Object
 * -------------
 * Properites --> key:value
 *============================
  1- dot Notation
  2-subscript Notation
 * 
 * ================ */

// var person1 = {
// 	fname: "ali",
// 	age: 20,
// 	address: {
// 		city: "alex",
// 		street: "saad St",
// 	},
// 	colors: ["red", "green", "blue"],
// 	display: function () {
// 		console.log("Display");
// 	},
// };

// var result = person1.display();
// console.log(result);
// console.log(person1.display);
// var arr = person1.colors;

// console.log(person1["address"].city); // get

// delete person1.fname;
// person1.color = "red";
// person1["color"] = "green";
// person1.fname = "alaa"; // set
// person1["fname"] = "mona"; // set
// console.log(person1);
// console.log(person1.address); //dot
// console.log(person1["address"]); // get
// get
// console.log(person1.age);
// console.log(person1.color);
// var x = person1.fname; // get
// console.log(x);

// var str = "Hello from iti";

// console.log(str.length);

// str.charAt(0);

// this --> window

// call
// bind
// apply
// var fname = "mona";

// function getName(lname, emoji) {
// 	console.log(this.fname + " " + emoji + " " + lname);
// }

// var person = {
// 	fname: "Ahmed",
// 	lname: "ali",
// 	display: function () {
// 		getName.call(this, "ali", ":)");
// 		getName.apply(this, ["ali", ":)"]);
// 	},
// };

// person.display();

// getName();

// console.log(fname);
// alert("")
// alert("Alert");
// var person1 = {
// 	fname: "ahmed",
// 	display: function () {
// 		console.log(this.fname);
// 	},
// };

// var person2 = {
// 	fname: "ali",
// };

// person1.display.call(person1);
// person1.display.call(person2);
