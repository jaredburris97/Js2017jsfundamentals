input.focus();

$(function(){
	console.log("doc ready")
});

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

function addItem(name) {
	let li = document.createElement('li');
	let text = li.innerHTML = name;

	friendlist.appendChild(li);
}

$(submitButton).on("click",capitalize)
$(document).keypress(function (jumbus) {
	if(jumbus.keyCode === 13) {		
		return capitalize();
		input.focus();
	}
});