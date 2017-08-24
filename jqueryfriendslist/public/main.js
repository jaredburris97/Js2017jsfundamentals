$(document).ready(function(){
	//asynchronous javascript and xtml = ajax. allows us to run 2 things(or more) at the same time

	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/learncode/javascriptfall'
	}).done(function(data){
		console.log(data);
	})	

	

	$(submitButton).click(function(){
		console.log("Username: " + inputUsername.value);
		let person = {
			name : null,
			email : null
		}

		person.name = inputUsername.value;
		person.email = inputEmail.value;
		console.log(person);
		
		$.ajax({
			type: 'POST',
			url: 'http://rest.learncode.academy/api/learncode/javascriptfall',
			data: person
		})
	})
})