const apiKey = "8d23c6437237dd6da7ddc4653280425d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const input = document.getElementById("input");
const btn = document.querySelector(".btn");
const weather_icon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${city}`);

    if (response.status == 404) {
        document.querySelector(".error h3").style.display = "block";
        document.querySelector(".info").style.display = "none";
    }
    else {
        var data = await response.json();

        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity-content h2").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-content h2").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weather_icon.src = "Images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weather_icon.src = "Images/clear.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weather_icon.src = "Images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weather_icon.src = "Images/mist.png";
        }
        else if(data.weather[0].main == "Rain"){
            weather_icon.src = "Images/rain.png";
        }
        else if(data.weather[0].main == "Snow"){
            weather_icon.src = "Images/snow.png";
        }
        else if(data.weather[0].main == "Haze"){
            weather_icon.src = "Images/wind.png";
        }

        document.querySelector(".error h3").style.display = "none";
        document.querySelector(".info").style.display = "block";
        input.value = "";
    }
}

btn.addEventListener("click", function () {
    checkWeather(input.value);
});

