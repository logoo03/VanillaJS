const API_KEY = "9e07173e23ee99d84551e3a03354e098";

function onGeoOk(pos) {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(res => res.json()).then(data => {
        const city = document.querySelector("#geo #city")
        const weather = document.querySelector("#geo #weather");
        city.innerText = data.name;
        weather.innerText = data.weather[0].description;
    });
}

function onGeoErr() {
    console.log("Unable to fetch GeoLocation Info!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoOk);
