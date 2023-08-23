// function first() {
// 	console.log("First");
// 	second();
// 	console.log("End");
// }

// function second() {
// 	setTimeout(() => {
// 		console.log("Second");
// 	}, 2000);
// 	console.log("After Second ");
// }
// first();

// setTimeout(() => {
// 	console.log("First");
// }, 0);
// console.log("After First");
// console.log("End");

// function first() {
// 	console.log("hello");
// 	setTimeout(() => {
// 		console.log("inside set Time out");
// 	});
// }

// first();

// var x;
// setTimeout(() => {
// 	x = 10;
// 	console.log(x);
// }, 2000);

/**--------------- */

// var products;
// setTimeout(() => {
// 	products = [100, 200, 300];
// 	var product;
// 	setTimeout(() => {
// 		var product = {
// 			id: products[0],
// 			productName: "Book",
// 			price: 300,
// 		};
// 		setTimeout(() => {
// 			var price = product.price;
// 			console.log(price);
// 		}, 500);
// 	}, 1000);
// }, 2000);

function getProductsList() {
	var myPromise = new Promise(function (x, y) {
		var products;
		setTimeout(() => {
			products; //= [100, 200, 300];
			if (products) {
				x(products);
			} else {
				y("Error on getting products List");
			}
		}, 2000);
	});

	return myPromise;
}

// e.log("---------------------");

function getProduct(productId) {
	return new Promise(function (resolve, reject) {
		var product = {
			id: productId,
			productName: "Book",
			price: 300,
		};
		product ? resolve(product) : reject("Error on getting product");
	});
}

function getPrice(product) {
	return new Promise(function (resolve, reject) {
		var price = product.price;
		price ? resolve(price) : reject("Error on getting price");
	});
}

// async function execute() {
// 	try {
// 		let products = await getProductsList();
// 		let product = await getProduct(products[0]);
// 		let price = await getPrice(product);
// 		console.log(price);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
// execute();
// getProductsList()
// 	.then(function (products) {
// 		return getProduct(products[0]);
// 	})
// 	.then((product) => {
// 		return getPrice(product);
// 	})
// 	.then((price) => {
// 		console.log(price);
// 	})
// 	.catch(function (error) {
// 		console.log(error);
// 	});

// getProduct(4)
// 	.then(function (product) {
// 		console.log(product);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

/**
 * pending
 * fulfilled
 *rejected
 */

// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

async function execute() {
	try {
		let response = await fetch("https://jsonplaceholder.typicode.com/users");
		let data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

execute();
