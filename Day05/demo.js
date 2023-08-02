/**
 * Agenda
 * -----------------
 * Events
 *  1-Add Attribute on the element
 *  2- attach function
 *  3- addEventListener
 *      -- Event Object
 * ------------------------------------
 * Bom
 *  -- Screen // self study
 *  -- Window
 *  -- Navigator //
 *  -- location
 *  -- History
 */
/**==================== */

// var p = document.getElementById("p1");
// var btn = document.getElementById("btn1");
// function changeContent(e) {
// 	console.log(e.target);
// 	p.innerHTML = "Hello Dot Net Track";
// }

// function changeStyle(color) {
// 	console.log("Fired");
// 	p.style.backgroundColor = color;
// }

// btn.onclick = changeContent;
// btn.addEventListener("click", changeContent);
/*===========================*/

// functions with params

// btn.addEventListener("click", function () {
// 	changeStyle("red");
// });

/*===========================*/

// btn.removeEventListener("click", changeContent);
// set
// btn.onclick = changeStyle;
// btn.onclick = changeContent;

// var person = {
// 	fname: "mona",
// 	lname: "ali",
// 	display: function () {
// 		console.log(person.fname);
// 	},
// };

// person.fname = "ahmed";

// person.display = function () {
// 	console.log(person.lname);
// };

// person.display();
/**====================== */

// function first() {
// 	console.log("first");
// }
// function second(e) {
// 	e.stopPropagation();
// 	console.log("Second");
// }
// function third(e) {
// 	e.stopPropagation();
// 	console.log("Third");
// }

// var input = document.getElementById("input1");
// var errorMsg = document.getElementById("errorMsg");

// input.addEventListener("focus", function () {
// 	input.style.border = "2px solid blue";
// });
// input.addEventListener("blur", function () {
// 	input.style.border = "2px solid orange";
// });
// input.addEventListener("input", function () {
// 	if (input.value.length <= 3) {
// 		input.style.border = "2px solid red";
// 		errorMsg.style.opacity = 1;
// 	} else {
// 		input.style.border = "2px solid green";
// 		errorMsg.style.opacity = 0;
// 	}
// });

// function login(e) {
// 	e.preventDefault();
// 	console.log(input.value);
// }

// var btn = document.getElementById("btn1");
// var result = document.getElementById("result");

// btn.addEventListener("click", function () {
// 	result.innerHTML = "Hello Dot Net";
// });
// btn.removeEventListener("click", function () {
// 	result.innerHTML = "Hello Dot Net";
// });

// console.log(window);
// var myWind;
// function openNewTab() {
// 	myWind = window.open("./about.html", "", "width=200,height=200");
// }
// function closeTab() {
// 	myWind.close();
// }
// function moveToTab() {
// 	myWind.moveTo(400, 400);
// }
// function moveByTab() {
// 	myWind.moveBy(-100, -100);
// }
// function resizeToTab() {
// 	myWind.resizeTo(400, 400);
// }
// function resizeByTab() {
// 	myWind.resizeBy(100, 100);
// }

/*** ============
 *  setTimeOut
 *  setInterval
 * ======== */

// setTimeout(function show() {
// 	open("./about.html");
// }, 3000);
// var i = 0;
// var myInterval = setInterval(function () {
// 	console.log(i++);
// }, 1000);

// setTimeout(function () {
// 	clearInterval(myInterval);
// }, 5000);

// var span = document.getElementById("result");
// var myInterval;
// var i = 0;
// function start() {
// 	myInterval = setInterval(function () {
// 		span.innerHTML = i++;
// 	}, 1000);
// }
// function stopTimer() {
// 	clearInterval(myInterval);
// }

// var p = document.getElementById("result");

// function download() {
// 	p.style.display = "block";
// 	setTimeout(function () {
// 		p.innerHTML = "<a href='#google'>Link</a>";
// 	}, 3000);
// }

// function successFn(position) {
// 	console.log(position.coords.latitude);
// 	console.log(position.coords.longitude);
// }
// function errorFun() {
// 	console.log("Error");
// }
// function execute() {
// 	navigator.geolocation.getCurrentPosition(successFn, errorFun);
// 	// console.log(h)
// 	// console.log(history);
// 	// location.reload();
// 	// location.assign("https://www.google.com.eg/");
// 	// location.replace("https://www.google.com.eg/");
// 	// get
// 	// console.log(location);
// 	// location.pathname = "/about.html";
// }
