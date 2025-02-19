"use strict";
// class Person {
// 	name: string;
// 	age: number;
// 	constructor(name: string, age: number) {
// 		this.name = name;
// 		this.age = age;
// 	}
// 	display(): void {
// 		console.log("hello display");
// 	}
// }
// let person1 = new Person("mona", 20);
// class User extends Person {
// 	constructor(name: string, age: number, public password: string) {
// 		super(name, age);
// 	}
// 	override display(): void {
// 		console.log("new Implemented");
// 	}
// 	generatePassword(): string {
// 		return this.password.toUpperCase();
// 	}
// }
// class Person {
// 	constructor(private id: number, public name: string, public age: number) {}
// 	display(): void {
// 		console.log("hello display");
// 	}
// 	get getId() {
// 		return this.id;
// 	}
// 	set setId(value: number) {
// 		this.id = value;
// 	}
// }
// let person1 = new Person(1, "mona", 20);
// person1.setId = 12;
// console.log(person1.getId)
// abstract class Shape{}
// interface IProduct {
// 	id: number;
// 	name: string;
// 	price: number;
// 	// discount: (rate: number) => number;
// }
// interface ITest {}
// let products: IProduct[] = [{ id: 1, name: "book", price: 200 }];
// class Product implements IProduct, ITest {
// 	constructor(public id: number, public name: string, public price: number) {}
// 	discount(rate: number): number {
// 		return 233;
// 	}
// }
// enum fontStyle {
// 	italic,
// 	bold,
// 	regular,
// }
// let x = fontStyle.italic;
// let y = fontStyle.bold;
let input1 = document.getElementById("input1");
let img = document.getElementsByTagName("img")[0];
console.log(input1.value);
console.log(img.src); //
// generics
// function sum(x,y):<Type> {}
