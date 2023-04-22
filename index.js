
let image =document.querySelector(".image")

document.getElementById('btn').addEventListener('click',checkWether)
async function checkWether(){
	let cityName= document.getElementById("cityName").value
	if(cityName==""){
		cityName="mumbai"
	}
	
	
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b82713eea6msh443127867b5db3bp13a8dbjsnea2223735e36',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${cityName}&days=1`, options)
	.then(response => response.json())
	.then(response =>{
		console.log(response)
			document.querySelector('.city').innerHTML=response.location.name;
			document.querySelector(".region").innerHTML=response.location.region
			document.querySelector('.temp').innerHTML=response.current.temp_c+"°C ";
			document.querySelector('.humidity').innerHTML=response.current.humidity;
			document.querySelector('.wind_speed').innerHTML=response.current.wind_kph+" km/h";
			image.src= response.current.condition.icon
		} )
		.catch(err => console.error(err));	
}
checkWether()










