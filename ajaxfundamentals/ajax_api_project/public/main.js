$(document).ready(function(){
	const api_key = "IYohTpmcZOXiC9WbiD6gz6StQ4CABnCdjEzqNtkI";
	let date = new Date();
	let dynamic_date = 000000;
	$.ajax({
		type: 'GET',
		url: `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
	}).done(function(data){
		console.log(data);
		$("body").css("background-image", `url(${data.hdurl})`);
		img_explanation.innerHTML = data.explanation;
	})
	$(nextBtn).on('click', function(){
		
		dynamic_date = (date.getMonth()+1);
		if(date.getMonth()<10){
			dynamic_date = '0' + (date.getMonth()+1);
			console.log(dynamic_date);
		}
		dynamic_date = date.getFullYear().toString().substring(2)+dynamic_date+date.getDate();
		console.log(dynamic_date);
	})
	$(prevBtn).on('click', function(){

	})
	
})

//	`https://apod.nasa.gov/apod/ap${dynamic_date}.html`