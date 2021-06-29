/*CONDITIONALS*/

// var x = 44;
// if (x==0) {
//     console.log ("x is zero")
// } else if (x < 0) {
//     console.log("x is a negative number")
// }
//     else if (x > 0) {
//    console.log("x is a positive number")
// }



// var a = 67
// var b = 99
// var c = 42
// //a - biggest, c - smallest
// if(c < b && b < a) {
//     console.log ("a is the biggest and c is the smallest")
// }
// //a - biggest, b - smallest
// if(b < c && c < a) {
//     console.log ("a is the biggest and b is the smallest")
// }
// //b - biggest, a - smallest
// if (a < c && c < b) {
//     console.log("b is the biggest and a is the smallest")
// }
// //b - biggest, c - smallest
// if(c < a && a < b) {
//     console.log("b is the biggest and c is the smallest")
// }
// //c - biggest, a - smallest
// if(a < b && b < c) {
//     console.log("c is the biggest and a is the smallest")
// }
// //c - biggest, b - smallest
// if(b < a && a < c) {
//     console.log("c is the biggest and b is the smallest")
// }

/*LOOPS*/

// var a = 9;
// var b = 2;
// function getRangeInclusive(a, b) {
// 	var s = '';
// 	if (a > b) {
// 		for (var i = a; i >= b; i--) {
// 			s = s + i + ' ';
// 		}
// 	} else {
// 		for (var i = a; i <= b; i++) {
// 			s = s + i + ' ';
// 		}
// 	}
// 	console.log(s);
// }
// getRangeInclusive(a, b);

/*FUNCTIONS*/
// function wow() {
// 	console.log('Wow, it worked!');
// }
// wow();

// function myName(name) {
// 	console.log(`yesterday ${name} went for a walk`);
// }
// myName("Alex");

// console.log(Math.floor(Math.random() * 9));

// function play() {
//     console.log("hey!")
//   }
//   play();

// var x = 34;
// var y = 56;
// function sumOfRange(x, y) {
// 	var s = 0;
// 	for (var i = x; i <= y; i++) {
// 		s += i;
// 	}
// 	console.log(`Sum of the numbers between ${x} and ${y} is ${s}`);
// }
// sumOfRange(x,y)

/*SWAPPING VALUES*/
// var a = 111;
// var b = 999;
// function swapValues(a, b) {
// 	console.log(`Swapping values of a=${a}, b=${b}`);

// 	var temp = a;
// 	a = b;
// 	b = temp;

// 	console.log(`Done a=${a}, b=${b}`);
// }
// swapValues(a, b);
