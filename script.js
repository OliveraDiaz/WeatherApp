
function getApi() {
var latitude = "45.523064";
var longitude = "-122.676483";   
var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=` + latitude + `&lon=` + longitude + `&units=metric&appid=0edeb8b579e8e284e65b6f8bcc481965`; 
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
    

    console.log(cityElement.textContent)

  }
getApi();