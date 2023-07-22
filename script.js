// get api
// var temp = document.getElementbyId("currentWeatherCard")

function getApi(query){
    // Save API in a variable RequestURL
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=0edeb8b579e8e284e65b6f8bcc481965"
// fetch API data
    fetch(requestUrl)
    // // once fetched
    .then((response) => response.json())
    .then((data) => appendWeather(data));

    //     return response.json();
       
    }
    getApi()
 

function appendWeather(weather){
    console.log(weather);
 
    var currentWeather = document.querySelector("#currentWeatherCard");

    var city = document.createElement("h1");
    city.textContent= weather.name;
    currentWeather.append(city);

    var temp = document.createElement("p");
    temp.textContent= weather.main.temp;
    currentWeather.append(temp);

    var wind = document.createElement("p");
    wind.textContent= weather.wind.speed;
    currentWeather.append(wind);

    var humidity = document.createElement("p");
    humidity.textContent= weather.main.humidity;
    currentWeather.append(humidity);
//     // create p for temp,, wind, humidity
details.append("")
}
appendWeather()
temp.append(city);
// fetchDataBtn.addEventListener("click", getAPI);