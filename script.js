
var form = document.getElementById('form')
form.addEventListener('submit',function(event){

    event.preventDefault()
    var city = document.getElementById('city').value
    console.log(city)
})
// get api
// var temp = document.getElementbyId("currentWeatherCard")
// var searchBtn = document.getElementById("#fetchDataBtn")


function getApi(city){
    // Save API in a variable RequestURL

    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid=0edeb8b579e8e284e65b6f8bcc481965";
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
 
    var currentWeatherCity = document.querySelector("#currentWeatherCityCard");


    var city = document.createElement("h1");
    city.textContent= weather.name;
    currentWeatherCity.append(city);
    city.classList.add("text-3xl", "font-extrabold");

    var currentWeatherDetails = document.querySelector("#currentWeatherDetailsEl");

    var temp = document.createElement("p");
    temp.textContent= "Temperature " + weather.main.temp + "° F";
    currentWeatherDetails.append(temp) ;
    temp.classList.add( "text-xl" , "p-2" , "mt-10");

    var wind = document.createElement("p");
    wind.textContent= "Wind " + weather.wind.speed + " MPH";
    currentWeatherDetails.append(wind);
    wind.classList.add( "text-xl", "p-2");

    var humidity = document.createElement("p");
    humidity.textContent= "Humidity " + weather.main.humidity + "%";
    currentWeatherDetails.append(humidity);
    humidity.classList.add( "text-xl" , "p-2" );
//     // create p for temp,, wind, humidity

}
// appendWeather(city)
//incert city name
// var button = document.getElementById("fetchDataBtn");
// // searchBtn.addEventListener("click", getApi, appendWeather);
document.querySelector(".fetchDataBtn").addEventListener("click", function (event) {
    event.preventDefault();
    var city = document.getElementById("city").value;
    getApi(city);
    appendWeather;
  });