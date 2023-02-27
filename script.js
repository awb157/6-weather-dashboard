var apikey="df364c238679f3de4ea28b9266ab5577"


$("#search-button").on("click",function (){
    var cityvalue=$("#search-value").val()
    console.log(cityvalue)
    coordinates(cityvalue)
})



function coordinates(inputvalue) {

    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputvalue}&limit=5&appid=${apikey}`) 
    .then(response=>response.json())
    .then(data=>{
        // console.log(data)
        curentweather(data[0].lat,data[0].lon)
        forecast(data[0].lat,data[0].lon)
    })
}


function curentweather(lat,lon) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`) 
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
    })
}


function forecast(lat,lon) {

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`) 
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
    })
}