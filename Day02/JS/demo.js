/**
 * Agenda
 * -------------------
 * 1- Functions
 *  == built in functions
 *  == user defined function
 *      == function statement
 *      == function expression
 *       [anoynmous function]
 * == Callback Function
 * == How is JS Execute in memory ?
 *    -- execution context
 *    -- declaration phase
 *    -- execution phase
 * == Hoisting
 * == Array
 * == String
 * == Math
 *
 * ---------------------------
 *
 */

// var result = parseInt("230");
// console.log(result);
// fly();
// paramters
// function statement
// add(4, 5);
// function add(x, y) {
// 	console.log(x + y);
// }

// var result = add(10, 20);
// console.log(result);

// console.log(add(30, 30));
// add();
// console.log("-------------");
// add(3);
// console.log("------------");
// add(40, 80);
// console.log("============");
// add(10, 20, 30, 50, 50);
// arguments
// add(3, 4);
// console.log("-------------");
// add(5, 6); // 5, 6
// console.log("-------------");

// add(10, 20); // 10,20
/**====================== */
// var x = function (x, y) {
// 	return x + y;
// };

// var result = x(10, 30);
// console.log(result);
// console.log(sayHello);

// sayHello();
// var sayHello = function () {
// 	console.log("Hello Dot net");
// };

// console.log(sayHello);
/**=============== */
// var fname;
// console.log(fname);
// fname = "ali";
// console.log(fname);

// console.log(window);

// var dotNetTrack = function () {
// 	console.log("Hello Dot Net Track");
// };

// function mearnTrack(cb1) {
// 	cb1();
// 	console.log("Hello Mearn Track");
// }

// function greet(myFun) {
// 	myFun(function () {
// 		console.log("Hello from cb1");
// 	});
// }

// greet(mearnTrack);

// function test(myFun1, myFun2) {
// 	myFun1("a");
// 	myFun2("b");
// }

// test(
// 	function (a) {
// 		console.log(a);
// 		console.log("First");
// 	},
// 	function (b) {
// 		console.log(b);
// 		console.log("Second");
// 	}
// );

// var arr = [
// 	"mona",
// 	20,
// 	function () {
// 		console.log("first");
// 	},
// 	[20, 30, 50],
// ];

// arr[2]();
// arr[0] = "ali";
// arr[1] = "alaa";
// arr[0] = "ahmed"; // set
// console.log(arr[3][0]);

/**
 * Array
 * ------------
 * == length
 * --------------
 * == push
 * == pop
 * == unshift
 * == shift
 * == join
 * == reverse
 * == concat
 * == sort
 *
 */
// var arr = [20, 1, 3, 40, 12, 479];
// arr.sort();
// arr.reverse();
// var result = arr.join(" ; ");
// console.log(result);
// arr.shift();
// arr.shift();
// arr.pop();
// arr.pop();
// arr.unshift("new Value");
// arr.unshift([20, 40]);
// arr.push("ali");
// arr.push(12);
// console.log(arr);
// for (var i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }
/** =======
 * str
 * ------------
 * 1- length
 *-----------------
 *- concat
  -- charAt
  -- indexOf
  -- lastIndexOf
  --  startWith
  -- toUpperCase
  -- toLowerCase
  -- trim()
  -- split
 * ========== */
// var str = "username=mona";
// var empji = ":)";
// var result = str.split("=")[0];
// console.log(result);
// console.log(str);

// var str = "ahmed ali";

// console.log(str.includes("h"));
// console.log(str.search("h"));
// var result = str.split("").reverse().join("");
// console.log(result);
/**
 * ===============
 * PI
 * ---------------
 * == sqrt
 * == pow
 * == abs
 * == sign
 * == sign
 * ==cos
 * max
 * min
 * ranodm
 * round
 * floor
 * ceil
 * ----------------------
 *  ---> 1 --> Positive
 *  -- -> -1 --> negative
 * --> 0
 *
 */

// console.log(Math.round(5.5));
// console.log(Math.floor(5.9));
// console.log(Math.ceil(5.9));

// console.log(Math.sin((90 * Math.PI) / 180));
// var num = 10.23685288;
// console.log(num.toFixed(2));
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.sign(0));
