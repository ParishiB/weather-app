const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '66aa9e87ddmsh6959a1c87a0b086p1c9bb7jsn790b5d3e5f55',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather =(city)=>{

cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle' + city , options)
	.then(response => response.json())
	.then((response)  => {
       
        console.log(response)

        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        Humidity.innerHTML = response.humidity 
        Max_temp.innerHTML = response.max_temp
        Min_temp.innerHTML = response.min_temp
        Sunrise.innerHTML = response.sunrise
        Sunset.innerHTML = response.sunset 
        Temp.innerHTML = response.temp
        Wind_degrees.innerHTML = response.Wind_degrees
        Wind_speed.innerHTML = response.Wind_speed 
        
    }) 
    .catch(err => console.error(err));
}

SubmitEvent.addEventListner("click",(e) =>{
        e.preventDefault()
        getWeather(city.value)
    })

getWeather("Delhi")

