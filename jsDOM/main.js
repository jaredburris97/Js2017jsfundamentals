let input = document.getElementById("input");
console.log(input);
let output = document.getElementById("output");
console.log(output);
let ulist = document.getElementById('friendlist');

input.focus();

function capitalize(){
	let newName = "";

	for (let l in input.value){
		if ( l == 0 ){
			newName = input.value[l].toUpperCase();
		} else {
			newName += input.value[l].toLowerCase();
		}
	}
		output.innerHTML = "Capitalized Name: " + newName;		
		input.value = ""; // you can also use input.select() = ""; selects text to be overwritten
		addItem(newName);
		
}



document.onkeypress = function (jumbus) {
	if(jumbus.keyCode === 13) {		
		return capitalize();
		
	}
}

function addItem(name) {
	let li = document.createElement('li');
	let text = li.innerHTML = name;

	ulist.appendChild(li);
}


// Challenge: find out how to have a conditional target the 'enter key'
// so that once it's pressed it can submit the form

// $('#input').keypress(function(event){
//   if(event.keyCode == 13){
//     $('#loginBtn').click();
//     $('#input').select();
//   }
// });

// after a name is capitalized make sure you clear the form

// Challenge 3: Create an ul list that prints out each name that a user wants to capitalize without bullet points