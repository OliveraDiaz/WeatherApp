// get api

function getApi(query){
    // Save API in a variable RequestURL
    var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=0edeb8b579e8e284e65b6f8bcc481965"
// fetch API data
    fetch(requestUrl)
    // // once fetched
    .then((response) => response.json())
    .then((data) => console.log(data));

    //     return response.json();
       
    }
    getApi()

    // .then(function(data) {
    //     console.log(data)
    //     // dataContainer in HTML
    //     for (var i = 0; i < data.length; i++){
    //         link.textContent = data[i].html_url;
    //         link.href = data[i].html_url;

    //         createTableRow.appendChild(tableData);
    
    //     }
    // })

console.log(requestUrl)
// appendWeather(data){
//     dataContainer.append()

    
// }

// fetchDataBtn.addEventListener("click", getAPI);