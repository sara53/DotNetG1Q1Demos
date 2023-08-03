/**
 *  == Ajax
 *  == Cookies
 *  == Error Handling
 */

// var tbody = document.getElementById("tbody");
// function execute() {
// 	var xhr = new XMLHttpRequest();

// 	xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// 	xhr.send("");

// 	xhr.onreadystatechange = function () {
// 		// requested Completed
// 		if (xhr.readyState == 4) {
// 			// success
// 			if (xhr.status == 200) {
// 				var response = xhr.response;
// 				var data = JSON.parse(response);

// 				var tr = document.createElement("tr");
// 				tr.innerHTML = `<td>${data.id}</td><td>${data.name}</td><td>${data.email}</td>`;
// 				tbody.append(tr);
// 			} else {
// 				console.log("error");
// 			}
// 		}
// 	};
// }

// js object
// var person = {
// 	"id": 3,
// 	"fname": "ali",
// 	"lname": "ahmed",
// };

// // json object --> javascript
// console.log(JSON.parse(person));
// js Object --> json object
// console.log(JSON.stringify(person));
/**========
 * key = value
 * username=ali
 * password = 123
 * email=a@.com
 * ========= */
// session cookie

var expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 3);

var lastDate = new Date();
lastDate.setDate(lastDate.getDate() - 1);
/**=========== */
// function saveCookie(key, value) {
// 	document.cookie = key + "=" + value + ";expires=" + expireDate;
// }
// function getAllCookies() {
// 	return document.cookie;
// }

// function deleteCookie(key) {
// 	document.cookie = key + "=kffkf;expires=" + lastDate;
// }
// function getCookie(key) {
// 	//
// }
// saveCookie("email", "ali@email.com");
// deleteCookie( 'email' )
/**========= () ====== */

// try {
// 	console.log("First");
// 	console.logg("Second");
// } catch (error) {
// 	document.writeln("<h2>Connection Error ,, Try Again</h2>");
// } finally {
// 	console.log("Must be Logged");
// }

// function show(x, y) {
// 	if (arguments.length > 2) {
// 		throw "Pass two arguments Only, please call function again";
// 	}

// 	console.log(x + " " + y);
// }

// show(10, 30, 40); // error

show( 2, 3, 5, 6, 7 ) --> 7,6,5,3,2
show(1,2) --> 2,1 