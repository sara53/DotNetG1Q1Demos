/**
 * Events
 * -------------------
 *  1- add attribute on the element
 * DOM
 *---------- How to select an element from Dom----------
 * 1- getElementById --> return Element
 * 1- querySelector --> return Element
 * 2- getElementsByClassName --> return Collection
 * 2- getElementsByTagName --> return Collection
 * 2- getElementsByName --> return NodeList
 * 2- querySelectorAll --> return Collection
 * ------------------------------------------
 * document.body
 * document.links
 * document.images
 * document.forms
 * parent.firstChild
 * parent.lastChild
 * parent.firstElementChild
 * parent.lastElementChild
 * parent.children
 * parent.childNodes
/**======== change Content---------
 * 1- innerText
 * 2- innerHTML
 * 3-textContent (search)
 *---------------------------------
 == input.Value
 == input.checked
 * =============================== */
/**============== Change Style ===============*
 * -------------------------------------------
 * 1- style
 * 2-className
 * 3-classList
 * 	-- add
 * 	-- remove
 * 	-- toggle
 * 
 =============================================*/
/**============== Attribute ===============*
 * -------------------------------------------
 -- getAttribute
 -- setAttribute
 -- removeAttribute
 -- hasAttribute
 --toggleAttribute
 * 
 =============================================*/
// var div = document.getElementById("result");

// console.log(div.children);
// console.log(div.childNodes);
// console.log(div.firstChild);
// console.log(div.firstElementChild);

// console.log(document.links);
// var div = document.getElementById("result");

// var elements = document.querySelector(".p1");

// console.log(elements);
// for (var i = 0; i < elements.length; i++) {
// 	console.log(elements[i]);
// }

// function getInputValue() {
// 	for (var i = 0; i < elements.length; i++) {
// 		if (elements[i].checked) {
// 			console.log(elements[i].value);
// 		}
// 	}
// }

// function changeContent() {
// 	var p = document.getElementsByClassName("p1")[0];
// 	p.innerHTML = "<h1>Hello Dot Net Track</h1>";
// }
// var input1 = document.getElementById("input1");
// var output = document.getElementById("outPut");
// function getInputValue() {
// 	output.innerHTML = Number(input1.value) + 100;
// 	input1.value = "new Value";
// }

// function changeStyle() {
// 	// style Object
// 	var p = document.getElementById("p1");
// 	p.style.backgroundColor = "red";
// 	p.style.padding = "50px";
// 	p.style.color = "#fff";
// }
// function changeStyle() {
// 	// className prop
// 	var p = document.getElementById("p1");
// 	// console.log(p.className); // get
// 	p.className += " jsClass";
// }
// function changeStyle() {
// 	// classList Object
// 	var p = document.getElementById("p1");
// 	// p.classList.add("jsClass");
// 	// console.log(p.classList);
// 	// p.classList.remove("test");
// 	p.classList.toggle("jsClass");
// }

/**=================Attribute=============== */

// var result = document.getElementById("result");

// function execute() {
// 	// console.log(result.getAttribute("id"));
// 	// result.setAttribute("class", "jsClass");
// 	// console.log(result.hasAttribute("class"));
// 	if (result.hasAttribute("class")) {
// 		result.removeAttribute("class");
// 	} else {
// 		result.setAttribute("class", "jsClass");
// 	}
// }

// function execute() {
// 	var img = document.images[0];
// 	img.setAttribute("src", "./Images/3.jpg");
// 	// console.log(img.getAttribute("src"));
// }
/**=================Create Elements=============== */

/**
 *
 * <div>Hello Html</div>
 */

function createNewElements() {
	var parent = document.getElementById("result");
	var div = document.createElement("div");
	var p = document.createElement("p");

	var myText = document.createTextNode("Hello Html");

	div.appendChild(myText);
	// var result = div.append("Hello Text");
	// var result = div.appendChild(myText);
	// console.log(result);
	// console.log(div);
	// p.innerHTML = "Hello p";
	div.setAttribute("class", "jsClass");
	div.setAttribute("id", "myDiv");
	// p.setAttribute("class", "p1");

	// parent.append(div);
	// parent.appendChild(div, p);
	// parent.before(div);
	parent.after(div);
}
