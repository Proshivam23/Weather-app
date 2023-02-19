const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3aae5c4351msh3ef75f3b1753de3p10db31jsn53caa151b783',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

// let city = goa;
const getWeather = (city)=>{
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response);
		temp.innerHTML = response.feels_like;
		wind.innerHTML = response.wind_speed;
		humid.innerHTML = response.humidity;
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault();
	getWeather(input.value);
})
	

