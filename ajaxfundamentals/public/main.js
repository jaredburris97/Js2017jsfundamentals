alert('main.js is functional');

$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'https://swapi.co/api/planets',
		url: 'https://swapi.co/api/starships'
	}).done(function(data){
		console.log(data);
		planets=data.results;
		for (p in planets) {
			let tr = document.createElement('tr');
			let td = document.createElement('td');

			td.innerHTML = planets[p].name;
			$(planetTable).append(tr).append(td);
			console.log(planets[p].name);
		}
		starships=data.results;
		for (p in starships) {
			let tr = document.createElement('tr');
			let td = document.createElement('td');

			td.innerHTML = starships[p].name;
			$(starshipTable).append(tr).append(td);
			console.log(starships[p].name);
		}
	})
})