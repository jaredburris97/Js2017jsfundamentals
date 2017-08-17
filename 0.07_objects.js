// OBJECTS Objects oBjEcTs

let food = {
	pies: ['Pecan', 'Blueberry', 'Cherry', 'Key Lime'], // comma let's us do and-also
	pieNames: [], // ['Pecan Pie', 'Cherry Pie', etc]
	getPies: function(){
		console.log(this);

		return this.pies; //food object
	},
	pieName: function(){
		return food.pies.forEach(function(pieName){
			console.log(pieName + " Pie");
		})
	},
	newPies: function(){
		food.pies.forEach(function(flavor){
			food.pieNames.push(flavor + " Pie");
		})
	}

}

console.log(food.pieNames); // in the output we see that the array is blank []
console.log('\n');

food.newPies();				// call function to change the array
console.log(food.pieNames); // in the output we see that the array is now filled in
console.log('\n');

food.pieName();				// calls the pieName function which appended ' Pie' after the pies
console.log('\n');


// console.log(food.pies[0] + " pie");
// console.log('\n');

// Challenge iterate over the pie array and print out each pie, and add 'pie' to them
// 	using the forEach() method

// food.pies.forEach(function(pieItem, index, a){
// 	console.log(pieItem + " pie.");	
// })

// console.log(food.getPies());

// food.getPies();





// Create a method inside of the object food that appends ' pie' to the different
//	pies in the array list






// Create a method that adds the pies to a new array in the food object