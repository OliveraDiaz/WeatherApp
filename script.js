
function getApi() {
var latitude = "45.523064";
var longitude = "-122.676483";   
var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=` + latitude + `&lon=` + longitude + `&units=imperial&appid=0edeb8b579e8e284e65b6f8bcc481965`; 
console.log(requestUrl);

// fetch API data
fetch(requestUrl)
.then((response) => response.json())
.then((data) => appendWeather(data));

}

document.querySelector(".fetchDataBtn").addEventListener("click", function (event) {
    event.preventDefault();
    getApi();
});

function appendWeather(weather) {
    console.log(weather);
  
    var cityElement = document.querySelector(".city");
    cityElement.textContent = weather.city.name;
    
    var tempElement = document.querySelector(".temp");
    tempElement.textContent =  weather.list[0].main.temp + "°F";

    var windElement = document.querySelector(".wind");
    windElement.textContent = weather.list[0].wind.speed + "MPG";

    var humidityElement = document.querySelector(".humidity");
    humidityElement.textContent = weather.list[0].main.humidity + "% humidity";

    var dateElement = document.querySelector(".date");
    dateElement.textContent = weather.list[0].dt_txt;

    var tempElement1 = document.querySelector(".cardForcast");
    tempElement1.textContent = "Temperature: " + weather.list[1].main.temp +"°F    " + " Wind: " + weather.list[1].wind.speed + "MPG  " +"Humidity " + weather.list[1].main.humidity + "%" ;

    var tempElement1 = document.querySelector(".cardForcast1");
    tempElement1.textContent = "Temperature: " + weather.list[2].main.temp +"°F    " + " Wind: " + weather.list[2].wind.speed + "MPG  " + "Humidity " + weather.list[2].main.humidity + "%";

    var tempElement1 = document.querySelector(".cardForcast2");
    tempElement1.textContent = "Temperature: " + weather.list[3].main.temp +"°F    " + " Wind: " + weather.list[3].wind.speed + "MPG  " +"Humidity " + weather.list[3].main.humidity + "%" ;
  
    var tempElement1 = document.querySelector(".cardForcast3");
    tempElement1.textContent =  "Temperature: " + weather.list[4].main.temp +"°F    " + " Wind: "+  weather.list[4].wind.speed + "MPG  " +"Humidity " + weather.list[4].main.humidity + "%" ;

    var tempElement1 = document.querySelector(".cardForcast4");
    tempElement1.textContent = "Temperature: " + weather.list[5].main.temp +"°F    " + " Wind: "+weather.list[5].wind.speed + "MPG  " + "Humidity " + weather.list[5].main.humidity + "%";
  }
getApi();