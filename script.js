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
        var cardbox=$("div").addClass("card")
var cityname=$("<h2>").text(data.name)
var temp=$("<h3>").text("temp: "+data.main.temp)
var humidity=$("<h3>").text("humidity: "+data.main.humidity
)
var date=$("<h3>").text(moment.unix(data.dt).format("MMMM,Do, YYYY"))
var windspeed=$("<h3>").text("windspeed:"+data.wind.speed)
var line=$("<hr>")




        $("#todayweather").append(cityname,date,temp,humidity,windspeed,line)
    })
}


function forecast(lat,lon) {

    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`) 
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
for(var i=4;i<data.list.length;i=i+8){
    var cardbox=$("div").addClass("card")
var temp=$("<p>").text("temp: "+data.list[i].main.temp)
var humidity=$("<p>").text("humidity:"+data.list[i].main.humidity)
var wind=$("<p>").text("wind:"+data.list[i].wind.speed)
var date=$("<h4>").text(moment.unix(data.list[i].dt).format("MMMM,Do, YYYY"))



    $("#fiveforecast").append(date,temp,humidity,wind)
}

    })



}