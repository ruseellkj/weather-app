const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '88a6afe50emsh7b1fc7e06b88d58p1f613ejsnbbb6cba00d5f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));