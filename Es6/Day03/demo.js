/** Agenda
 * --------------
 * 1- Object Features
 * 2- Object.keys
 * 3-Object.values
 * 4-Object.assign
 * -----------------------
 * == OOP in Es6
 * == Modulrity
 * == Proxy
 */

// let fname = "ali";
// let lname = "ahmed";

// let myKey = "color";
// let person = {
// 	fname,
// 	lname,
// 	[myKey]: "red",
// 	display() {
// 		console.log("Hello");
// 	},
// };

// console.log(person);

// let person1 = {
// 	fname: "ali",
// 	lname: "ahmed",
// 	color: "red",
// };

// let person2 = {
// 	age: 30,
// 	color: "Green",
// };

// // fname,lname,color,age

// let result = Object.assign(person2, person1);

// console.log("Person 1 ", person1);
// console.log("Person 2 ", person2);

// console.log("result ", result);
// let result = Object.values(person);
// console.log(result);

// function showDetails(options = {}) {
// 	let defaultValues = {
// 		fname: "default value",
// 		age: "deafult age",
// 		address: "default add",
// 	};

// 	Object.assign(defaultValues, options);
// 	console.log(` fname=${defaultValues.fname},
//              age=${defaultValues.age} ,

//              address=${defaultValues.address}`);
// }

// showDetails();
/**------------------------------ */

// let p1 = { id: 1, productName: "book", price: 30, quantity: 20 };
// let p2 = { id: 2, productName: "Pen" };
// let p3 = { id: 3 };

// let div = document.createElement("div");
// let prodcut2 = document.createElement("div");
// div.innerHTML = p1.productName;

// prodcut2.innerHTML = p3.productName;
// document.body.append(div, prodcut2);
/**
 * Function constructor
 * Factory Pattern
 * Prototype
 * Prototype chaining
 * (How to implement oop in navtive js)
 *
 */

/// depency injection

// class Product {
// 	#id;

// 	constructor(_id = "", _productName = "", _price = 0) {
// 		this.#id = _id;
// 		this.productName = _productName;
// 		this.price = _price;
// 	}
// 	dicount() {
// 		return this.price * 0.2;
// 	}

// 	get getId() {
// 		return this.#id;
// 	}

// 	set setId(value) {
// 		this.#id = value;
// 	}
// }

// let p1 = new Product(1, "Book", 300);

// let p2 = new Product(2, "Pen", 100);
// let p3 = new Product();

// p1.setId = "new ID";

// console.log( p1.getId );

// p1.setId("new Id");
// console.log(p1.getId());
// console.log(p1.#id);

// p1.productName = "phone"; // set
// console.log(p1.productName); // get

// class Person {
// 	constructor(fname = "", lname = "", age = "") {
// 		if (this.constructor == Person) {
// 			throw "Can not take object from person class";
// 		}

// 		this.fname = fname;
// 		this.lname = lname;
// 		this.age = age;
// 	}
// 	display() {
// 		throw "Method not Implemented";
// 		// console.log(`fname=${this.fname} , lname= ${this.lname}`);
// 	}
// }

// class User extends Person {
// 	constructor(fname, lname, age, passwrod) {
// 		super(fname, lname, age);
// 		this.passwrod = passwrod;
// 	}
// 	show() {
// 		console.log("from show");
// 	}
// 	display() {
// 		console.log("implemeted");
// 	}
// }

// let myUser = new User("kareem", "ahmed", 50, "KAREMahmed");
// myUser.display();
// myUser.show();

// import * as all from "./main.js";

// console.log(all.add(4, 5));
// console.log(all.square());
// all.default();

// console.log(all.fname);

// all.fname = "mona"; // reassign

let person = {
	fname: "Ali",
	age: 30,
};

let handler = {
	get: function (target, prop) {
		if (!(prop in target)) {
			throw `${prop} not found in Person Object`;
		}
		return target[prop];
	},

	set: function (target, prop, value) {
		if (prop == "age" && value < 0) {
			throw "can not set negative value in age prop";
		}
		target[prop] = value;
		return true;
	},
};
let myProxy = new Proxy(person, handler);

myProxy.age = 12;
// myProxy.fname = "alaa";
console.log(myProxy.age);
// console.log(myProxy.fname);
// console.log(myProxy.age);

// console.log(myProxy.color);
