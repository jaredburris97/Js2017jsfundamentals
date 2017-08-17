// Functions


function greeting() {
	console.log("Hey there welcome to Java");
}

//  parenthesis invokes our function so that it runs the code inside of it
greeting(); // calls the function greeting()

// Challenge, Create a function that says "Day 4 feeling great!" then call that function
function dayFo() {
	console.log("Day 4 feeling great!");
}
dayFo();



// Functions with parameters

function greeting2(name) {
	console.log("Time to start coding " + name);
}

greeting2("Jared"); //arguments must match the parameters

function sum(num1, num2) {
	console.log(num1 + num2)
}

sum(3,4);

// scope

var fname = "Jerry";

function hello(fname) {
	var lname = "Smoyza";
	console.log(fname + " " + lname);
}
hello("Jonny");


if ( 1 == 1 ) {
	let sum = 1 + 1;
	console.log( sum ); // output: 2
}

// console.log(sum); //error

// Create a function called capitalize() and use the for loop we created yesterday to 
// capitalize names
var capName = "";

function capitalize(name1) {
	for ( i = 0; i < name1.length; i++) {

		if (i === 0) {
			capName = capName + name1[0].toUpperCase();
		} else {
			capName = capName + name1[i];
		}

		console.log(capName);
	}
}
capitalize("smoyza");

// Void Functions












