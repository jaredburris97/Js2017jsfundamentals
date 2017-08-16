// Conditionals

/*
	Chaining conditional operators
	----------------------------------
	&&
	||



*/

var name = "Jared";

if ("Jared" == name ) {
	console.log("Hey your name is " + name);


} else {
	console.log("What is your name?");

}
console.log('\n')

// Create an If statement that checks if the users name does not have a capital letter,
// Rebuild their name with the capitalized first letter

var name = "Jared";

if (name[0] != name[0].toUpperCase()) {

	name = name[0].toUpperCase() + name[1] + name[2] + name[3] + name[4];

	console.log(name);

} else {

	console.log("Name is capitalized!");

}

console.log('\n');



var age = 16;
// when writing the if statements order matters... !!!
if (age >= 18) {
	console.log("Yay you can vote!");
} else if (age >= 21) {
	console.log("Yay you can drink!");
} else if (age >= 25) {
	console.log("Yay you get lower rates on car rental");
} else {
	console.log("Sorry too young to do anything...")
}