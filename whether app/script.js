async function getWeather(){

let city = document.getElementById("cityInput").value;

let apiKey = "YOUR_API_KEY";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let response = await fetch(url);

let data = await response.json();

let result = document.getElementById("weatherResult");

if(data.cod == 200){

result.innerHTML = `
<h3>${data.name}</h3>
<p>Temperature: ${data.main.temp}°C</p>
<p>Weather: ${data.weather[0].description}</p>
<p>Humidity: ${data.main.humidity}%</p>
`;

}
else{

result.innerHTML = "City not found";

}

}