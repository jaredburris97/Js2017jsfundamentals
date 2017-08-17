// Arrays

let students = ['Thomas', 'Madyson', 'Brandon', 'Leon', 23, true, ['Jackson', 'Perry']];

console.log(typeof(students));

console.log(students[2]);

// Grab the nested aray out of the students array and grab 'Perry' then print to the console "Hello Perry"

let subArray = students[6];
console.log("Hello " + subArray[1] + " the Platypus"); // +'s concatenate 3 strings into 1 string which prints to the console

console.log("Hello" ,students[6][1], "the Platypus."); // commas make 3 separate strings print to the console

console.log('\n');





let arrOfFood = ['Quesadilla', 'Pecan Pie', 'Potato', 'CheeseCake', 'Shrimp Pasta'];
console.log(typeof(arrOfFood));
console.log('\n');

for (i = 0; i < arrOfFood.length; i++) {
	console.log(arrOfFood[i]);
}



console.log('\n');

// Prints out the value instead of the index number
for(let f in arrOfFood) {
	console.log(f);
}

arrOfFood.push('Spichey Chiekien');

//	splice(index of item | How many to cut | What you want to replace it with)
arrOfFood.splice(1, 1, 'Blueberry Pie'); // replaces Pecan Pie
arrOfFood.splice(2, 0, 'Sweet Potato'); //inserts Sweet Potato
arrOfFood.splice(4, 2); //deletes the second to last 2 items before the pushed item
arrOfFood.splice(0, 2); // deletes the first 2 items

// for(let f in arrOfFood) {
// 	console.log(arrOfFood[f]);
// }

arrOfFood.forEach(function(foodItem, banana,a){
	console.log(banana);
	console.log(a);
	console.log(foodItem);
})