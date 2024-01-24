const WeatherApp = () => {
    let api_key = "08e29dbe0deb3f888af612958921128f";

    const search = async () => {
        const element = document.getElementsByClassName("inputtag");
        if (element[0].value === "") {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.querySelector(".humidity .humdity");
        const wind = document.querySelector(".wind p");
        const temperature = document.querySelector(".temperature");
        const location = document.querySelector(".location");

        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " km/h";
        temperature.innerHTML = data.main.temp + "°C";
        location.innerHTML = data.name;
    };

    document.querySelector(".search button").addEventListener("click", search);
};

// Call the WeatherApp function when the page loads
window.onload = WeatherApp;
