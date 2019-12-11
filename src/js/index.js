//
console.log("получаю погоду с OpenWeatherMap");

// ___ ОТКУДА ВЗЯЛСЯ ПРОКСИ ?!!! ____
// https://overcoder.net/q/4021/попытка-использовать-fetch-и-перейти-в-режим-no-cors

// fetch('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=084a72f7662b746a323538af696e70cb', { mode: 'no-cors'})

var proxyUrl  = 'https://cors-anywhere.herokuapp.com/'
// var targetUrl = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=084a72f7662b746a323538af696e70cb'


// ______________________________________________________ ЗДЕСЬ _____51.5265_____46.0435_____ ЭТО САРАТОВ _____________
// var targetUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=51.5265&lon=46.0435&appid=084a72f7662b746a323538af696e70cb'

// fetch(proxyUrl + targetUrl)
//   .then(function (rest) { return rest.json() })
//   .then(function (data) {
//     console.log(data);
//     document.querySelector('.geo__city').textContent = data.name;
//     document.querySelector('.geo__country').textContent = data.sys.country;
//     document.querySelector('.geo__date').innerHTML = data.dt_txt;

//     document.querySelector('.temp-today__temp').innerHTML = Math.round(data.main.temp - 263) + '&deg';

//     document.querySelector('.weather-today__description').textContent = data.weather[0]['description'];
//     document.querySelector('.weather-today__name').innerHTML = data.weather.main;
//     document.querySelector('.weather-today__wind').innerHTML = data.wind.speed;
//     document.querySelector('.weather-today__humidity').innerHTML = data.main['humidity'];
//     document.querySelector('.weather-today__pressure').innerHTML = data.main.pressure;

//     document.querySelector('.geo-point__latitude').innerHTML = data.coord.lat;
//     document.querySelector('.geo-point__longitude').innerHTML = data.coord.lon;
//   })
//   .catch(function() {
//     console.log("Fetch Error = ...........");
//   });

var targetUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=51.5265&lon=46.0435&appid=084a72f7662b746a323538af696e70cb'

fetch(proxyUrl + targetUrl)
  .then(function (rest) { return rest.json() })
  .then(function (data) {
    console.log(data);
    document.querySelector('.geo__city').textContent = data.city.name;
    document.querySelector('.geo__country').textContent = data.city.country;
    document.querySelector('.geo__date').textContent = data.list[0]['clouds']['dt_txt'];

    document.querySelector('.temp-today__temp').innerHTML = Math.round(data.list[0].main.temp - 273) + '&deg';

    document.querySelector('.weather-today__description').innerHTML = data.list[0].weather[0].description;
    
    document.querySelector('.weather-today__wind').innerHTML = data.list[0].wind.speed;
    document.querySelector('.weather-today__humidity').innerHTML = data.list[0].main.humidity;
    document.querySelector('.weather-today__pressure').innerHTML = data.list[0].main.pressure;

    document.querySelector('.geo-point__latitude').innerHTML = data.city.coord.lat;
    document.querySelector('.geo-point__longitude').innerHTML = data.city.coord.lon;

    // ЗАВТРА
    document.querySelector('.temp-day-2__temp').innerHTML = Math.round(data.list[8].main.temp - 273) + '&deg';
  })
  .catch(function() {
    console.log("Fetch Error = ...........");
  });