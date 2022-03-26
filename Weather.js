document.querySelector("#btn").addEventListener("click",getWeather)
// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7bb7b83abbcab44ebfbf573785cad6f9`

async function getWeather(){

 try{
let city = document.querySelector("#city").value;
let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7bb7b83abbcab44ebfbf573785cad6f9&units=metric`)
let data = await response.json();
appendData(data)
console.log("data:",data);
 }   
catch(error){
console.log("error:",error)
}

}

function appendData(data){
    container.innerHTML = null;
    map.innerHTML=null;
    let name = document.createElement("h3");
    name.innerText = data.name

    let temp = document.createElement("h3");
    temp.innerText = "Tempratue: " +data.main.temp

    let pressure = document.createElement("h3");
    pressure.innerText = "Pressure: " + data.main.pressure;

    let humidity = document.createElement("h3");
    humidity.innerText = "Humidity: " + data.main.humidity;

    let temp_min = document.createElement("h3");
    temp_min.innerText = "Minimum Temperature: " + data.main.temp_min;


    let temp_max = document.createElement("h3");
    temp_max.innerText = "Maximum Temperature: " + data.main.temp_max;

    let lat = document.createElement("h3");
    lat.innerText = "Latitude : " + data.coord.lat;

    let lon = document.createElement("h3");
    lon.innerText = "Longitude : " + data.coord.lon;






    let iframe = document.createElement("iframe");
    iframe.src= `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    document.querySelector("#map").append(iframe)
    document.querySelector("#container").append(name,temp,pressure,humidity,temp_min,temp_max,lat,lon)
    
    localStorage.setItem("daily_data",JSON.stringify(data))

}

document.querySelector("#btn2").addEventListener("click", nextpage)


function nextpage(){
   
    window.location.href="7_Days_report.html";
}

