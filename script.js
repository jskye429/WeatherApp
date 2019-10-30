
//after a user clicks a city have click listener and then go into 5 day forcast
//use if else stuff
//framework for various cities in html like in class activity in a chart or table 
// example api call api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=12595fc217ca45ed06f8722457c6347f
var apiKey = "12595fc217ca45ed06f8722457c6347f";
var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=London&APPID=" + apiKey

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(res){
    console.log(res)
    

    for(i = 0; i < 40; i+=8){
        var tempKel = res.list[i].main.temp;
        var tempFah = Math.round((tempKel - 273.15) * 9/5 + 32);
        console.log(tempFah)
        var date = res.list[i].dt_txt;
        var icon = res.list[i].weather[0].icon;
        var iconURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

        var firstDay = $("<div>").css("backgroundColor", "lightblue");
        var firstPic = $("<img>").attr("src",iconURL)
        var firstDate = $("<h2>").text(date);
        var firstTemp = $("<h3>").text(tempFah + "˚F");
        firstDay.append(firstDate, firstTemp, firstPic);
        $("body").append(firstDay)
    }
})





//storage component
// Create a localStorage name/value pair with name="lastname" and value="Smith", then retrieve the value of "lastname" and insert it into the element with id="result":

// Store
//localStorage.setItem("lastname", "Smith");
// Retrieve
//document.getElementById("result").innerHTML = localStorage.getItem("lastname");