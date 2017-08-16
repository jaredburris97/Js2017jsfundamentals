// Loops not fruit loops

/*

	for loop
	-------------------



	while loop
	-------------------



	for in loop
	-------------------

	runs at least once

*/

//	for (initialize var; have boolean expression; how we step through the loop)

for ( var i = 0; i < 10; i = i + 1) {
	console.log(i);
}

console.log('\n');

// Challenge using a for loop count to 20 by 2's

for ( var i = 0; i <= 20; i += 2) {
	console.log(i);
}

console.log('\n');

// best practice?

var name = "Jared"

for ( var i = 0; i < name.length; i++) {
	console.log(name[i]);
}

console.log('\n');




// initialize variable
var j = 0;
// boolean expression
while ( j < 5 ) {

	//step through the loop
	j = j + 1 // j += 1 || j++

	console.log(j)


}

// while(true) {
// 	console.log("runs once");
// 	return false;
// }

// the return statement stops the program from running?

console.log('\n');


// Challenge create a while loop that counts to 100 by 10's ( 10 ... 100 )

var num10 = 0;
while(num10 < 100) {
	num10 += 10;
	console.log(num10);
}

console.log('\n');


var studentName = "smita";
var capSN = "";
//      lcv		collection 
for ( var l in studentName) {
	
	if (l == 0) { // checks the first index
		capSN = studentName[l].toUpperCase(); // sets first index to capital letter and adds it to empty string variable

	} else {
		capSN += studentName[l];
	}

	console.log(studentName[l]);


}

console.log(capSN);




