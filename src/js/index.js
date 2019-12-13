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
//     document.querySelector('.temp-today__temp').innerHTML = Math.round(data.main.temp - 263);

//     document.querySelector('.temp-today__weather-description').textContent = data.weather[0]['description'];

//     document.querySelector('.weather-today__name').innerHTML = data.weather.main;

//     document.querySelector('.temp-today__weather-wind').innerHTML = data.wind.speed;
//     document.querySelector('.temp-today__weather-humidity').innerHTML = data.main['humidity'];
//     document.querySelector('.temp-today__weather-pressure').innerHTML = data.main.pressure;

//     document.querySelector('.geo-point__latitude').innerHTML = data.coord.lat;
//     document.querySelector('.geo-point__longitude').innerHTML = data.coord.lon;
//   })
//   .catch(function() {
//     console.log("Fetch Error = ...........");
//   });

// ==============================================================================================

//____ ОКРУГЛЕНИЕ до 4 знаков после запятой ______
// console.log(+ 54.77906545555553.toFixed(4));     //  ПОЛУЧАЕТСЯ --> 54.7790

//____ ПРОБУЮ ПОЛУЧИТЬ МОИ ТЕКУЩИЕ КООРДИНАТЫ  ______

//  _________________WebForMySelf____________________
var detectLatitude = 0;
var detectLongitude = 0;
function getCoordinat() {
    // navigator.geolocation.getCurrentPosition(showCoordinat, showError);
    navigator.geolocation.getCurrentPosition(showCoordinat);
}
function showCoordinat(position) {
    console.log("Широта:  " + position.coords.latitude);
    console.log("Долгота: " + position.coords.longitude);
    console.log( 'Это ___' + typeof(position.coords.latitude) );
    detectLatitude = parseFloat(position.coords.latitude);
    console.log("_это_detect" + detectLatitude + "_это_TypeOf_" + typeof(detectLatitude));
}
// ____ ВЫВОД КООРДИНАТ ____
getCoordinat();
console.log('___здесь___' + detectLatitude);
console.log(detectLongitude);


var targetUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=51.5265&lon=46.0435&appid=084a72f7662b746a323538af696e70cb'

fetch(proxyUrl + targetUrl)
  .then(function (rest) { return rest.json() })
  .then(function (data) {
    console.log(data);
    document.querySelector('.geo__city').textContent = data.city.name;
    document.querySelector('.geo__country').textContent = data.city.country;
    document.querySelector('.geo__date').textContent = data.list[0]['clouds']['dt_txt'];

    document.querySelector('.temp-today__temp').innerHTML = Math.round(data.list[0].main.temp - 273) + '&deg';

    document.querySelector('.temp-today__weather-description').innerHTML = data.list[0].weather[0].description;
    
    document.querySelector('.temp-today__weather-wind').innerHTML = data.list[0].wind.speed;
    document.querySelector('.temp-today__weather-humidity').innerHTML = data.list[0].main.humidity;
    document.querySelector('.temp-today__weather-pressure').innerHTML = data.list[0].main.pressure;

    document.querySelector('.geo-point__latitude').innerHTML = data.city.coord.lat;
    document.querySelector('.geo-point__longitude').innerHTML = data.city.coord.lon;

    document.querySelector('.temp-day-2__temp').innerHTML = Math.round(data.list[8].main.temp - 273) + '&deg';

    document.querySelector('.temp-day-3__temp').innerHTML = Math.round(data.list[16].main.temp - 273) + '&deg';

    document.querySelector('.temp-day-4__temp').innerHTML = Math.round(data.list[24].main.temp - 273) + '&deg';
  })
  .catch(function() {
    console.log("Fetch Error = ...........");
  });