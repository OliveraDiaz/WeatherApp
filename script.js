function getApi() {
    var city = document.getElementById('city').value;
    var geoCodeUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0edeb8b579e8e284e65b6f8bcc481965`;
  
    fetch(geoCodeUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === "404") {
          throw new Error("City not found");
        }
        var latitude = data.coord.lat;
        var longitude = data.coord.lon;
        var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=0edeb8b579e8e284e65b6f8bcc481965`;
        return fetch(requestUrl);
      })
      .then((response) => response.json())
      .then((data) => appendWeather(data))
      .catch((error) => {
        console.error('Error fetching data', error);
      });
  }
  
  document.querySelector(".fetchDataBtn").addEventListener("click", function (event) {
    event.preventDefault();
    getApi();
  });
   


function appendWeather(weather) {
    console.log(weather);
  
    var cityElement = document.querySelector(".city");
    cityElement.textContent = weather.city.name;
    
    var day1Weather = document.getElementById("mainIcon");
    day1Weather.src = "http://openweathermap.org/img/w/" + weather.list[0].weather[0].icon + ".png";

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
    var day1Weather = document.getElementById("icon1");
    day1Weather.src = "http://openweathermap.org/img/w/" + weather.list[1].weather[0].icon + ".png";
    
    var tempElement1 = document.querySelector(".cardForcast1");
    tempElement1.textContent = "Temperature: " + weather.list[2].main.temp +"°F    " + " Wind: " + weather.list[2].wind.speed + "MPG  " + "Humidity " + weather.list[2].main.humidity + "%";
    var day1Weather = document.getElementById("icon2");
    day1Weather.src = "http://openweathermap.org/img/w/" + weather.list[2].weather[0].icon + ".png";


    var tempElement1 = document.querySelector(".cardForcast2");
    tempElement1.textContent = "Temperature: " + weather.list[3].main.temp +"°F    " + " Wind: " + weather.list[3].wind.speed + "MPG  " +"Humidity " + weather.list[3].main.humidity + "%" ;
    var day1Weather = document.getElementById("icon3");
    day1Weather.src = "http://openweathermap.org/img/w/" + weather.list[3].weather[0].icon + ".png";

  
    var tempElement1 = document.querySelector(".cardForcast3");
    tempElement1.textContent =  "Temperature: " + weather.list[4].main.temp +"°F    " + " Wind: "+  weather.list[4].wind.speed + "MPG  " +"Humidity " + weather.list[4].main.humidity + "%" ;
    var day1Weather = document.getElementById("icon4");
    day1Weather.src = "http://openweathermap.org/img/w/" + weather.list[2].weather[0].icon + ".png";


    var tempElement1 = document.querySelector(".cardForcast4");
    tempElement1.textContent = "Temperature: " + weather.list[5].main.temp +"°F    " + " Wind: "+weather.list[5].wind.speed + "MPG  " + "Humidity " + weather.list[5].main.humidity + "%";
    var day1Weather = document.getElementById("icon5");
    day1Weather.src = "http://openweathermap.org/img/w/" + weather.list[1].weather[0].icon + ".png";

  }
getApi();


function appendHistory (input) {
    var history = document.querySelector(".history");
    var pElement = document.createElement("p");
    pElement.textContent = input;
   history.appendChild(pElement);
}
