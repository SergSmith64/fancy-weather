// import './css/normalize.css';
import './css/index.css';

import geolocation from './js/geolocation'

function a() {
  return geolocation(5,2);
}
console.log("_СУММА__=_", a());



// ___ ГЕОЛОКАЦИЯ ____
var proxyUrl  = 'https://cors-anywhere.herokuapp.com/';

//  _________________ ОПРЕДЕЛЯЮ МОИ КООРДИНАТЫ __________________

function getCoordinat() {
    // navigator.geolocation.getCurrentPosition(showCoordinat, showError);
    navigator.geolocation.getCurrentPosition(showCoordinat);
}
function showCoordinat(position) {
    console.log("Широта:  " + position.coords.latitude);
    console.log("Долгота: " + position.coords.longitude);


    var targetUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=084a72f7662b746a323538af696e70cb';

    fetch(proxyUrl + targetUrl)
    .then(function (rest) { return rest.json() })
    .then(function (data) {
      console.log(data);
      document.querySelector('.geo__city').textContent = data.city.name;
      document.querySelector('.geo__country').textContent = data.city.country;
      document.querySelector('.geo__date').textContent = data.list[0]['clouds']['dt_txt'];
      document.querySelector('.temp-today__temp').innerHTML = Math.round(data.list[0].main.temp - 273) + '&deg';
      document.querySelector('.temp-today__weather-description').innerHTML = data.list[0].weather[0].description;
      document.querySelector('.temp-today__weather-feels').innerHTML = Math.round(data.list[0].main.feels_like - 273) + '&deg';
      document.querySelector('.temp-today__weather-wind').innerHTML = data.list[0].wind.speed;
      document.querySelector('.temp-today__weather-humidity').innerHTML = data.list[0].main.humidity;
      document.querySelector('.temp-today__weather-pressure').innerHTML = data.list[0].main.pressure;
      document.querySelector('.geo-point__latitude').innerHTML = data.city.coord.lat;
      document.querySelector('.geo-point__longitude').innerHTML = data.city.coord.lon;
      document.querySelector('.temp-day-2__temp').innerHTML = Math.round(data.list[8].main.temp - 273) + '&deg';
      document.querySelector('.temp-day-2__weather-description').innerHTML = data.list[8].weather[0].description;
      document.querySelector('.temp-day-3__temp').innerHTML = Math.round(data.list[16].main.temp - 273) + '&deg';
      document.querySelector('.temp-day-3__weather-description').innerHTML = data.list[16].weather[0].description;
      document.querySelector('.temp-day-4__temp').innerHTML = Math.round(data.list[24].main.temp - 273) + '&deg';
      document.querySelector('.temp-day-4__weather-description').innerHTML = data.list[24].weather[0].description;
    })

    .catch(function showError(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          alert("Пользователь запретил считывать информацию о своем местоположении!");
        break;
        case error.POSITION_UNAVAILABLE:
          alert("Браузер не смог определить местоположение пользователя");
        break;
        case error.TIMEOUT:
          alert("Браузер не успел определить местоположение за выделенное ему время");
        break;
        case error.UNKNOWN_ERROR:
          alert("Произошла неопределенная ошибка");
        break;
    }
    });
}
// ____ ВЫВОД КООРДИНАТ ____
getCoordinat();




// __________ ВВОД НАЗВАНИЯ ГОРОДА ПО АНГЛИЙСКИ ИЛИ ПО РУССКИ ____________

function inputYourCity() {
  var town = document.getElementById("yourCity");
  console.log("ВНУТРИ ФУНКЦИИ ВИЖУ ГОРОД :___", (town.value));


  // document.getElementById("inputYourCity").addEventListener('click', () => {
  //   console.log("ВНУТРИ ФУНКЦИИ снова вижу ГОРОД :___", (town.value));
  // });

  // let buttonTown=document.getElementById("inputYourCity");

  // buttonTown.addEventListener ("click", () => { 
  //   console.log("___что-то_ещё_происходит____");
  //  });





  // var proxyUrl  = 'https://cors-anywhere.herokuapp.com/';

  var targetUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + town.value + '&appid=084a72f7662b746a323538af696e70cb';

  fetch(proxyUrl + targetUrl)
  .then(function (rest) { return rest.json() })
  .then(function (data) {
    console.log(data);
    document.querySelector('.geo__city').textContent = data.city.name;
    document.querySelector('.geo__country').textContent = data.city.country;
    document.querySelector('.geo__date').textContent = data.list[0]['clouds']['dt_txt'];
    document.querySelector('.temp-today__temp').innerHTML = Math.round(data.list[0].main.temp - 273) + '&deg';
    document.querySelector('.temp-today__weather-description').innerHTML = data.list[0].weather[0].description;
    document.querySelector('.temp-today__weather-feels').innerHTML = Math.round(data.list[0].main.feels_like - 273) + '&deg';
    document.querySelector('.temp-today__weather-wind').innerHTML = data.list[0].wind.speed;
    document.querySelector('.temp-today__weather-humidity').innerHTML = data.list[0].main.humidity;
    document.querySelector('.temp-today__weather-pressure').innerHTML = data.list[0].main.pressure;
    document.querySelector('.geo-point__latitude').innerHTML = data.city.coord.lat;
    document.querySelector('.geo-point__longitude').innerHTML = data.city.coord.lon;
    document.querySelector('.temp-day-2__temp').innerHTML = Math.round(data.list[8].main.temp - 273) + '&deg';
    document.querySelector('.temp-day-2__weather-description').innerHTML = data.list[8].weather[0].description;
    document.querySelector('.temp-day-3__temp').innerHTML = Math.round(data.list[16].main.temp - 273) + '&deg';
    document.querySelector('.temp-day-3__weather-description').innerHTML = data.list[16].weather[0].description;
    document.querySelector('.temp-day-4__temp').innerHTML = Math.round(data.list[24].main.temp - 273) + '&deg';
    document.querySelector('.temp-day-4__weather-description').innerHTML = data.list[24].weather[0].description;

  })
  .catch(function() {
    console.log("Fetch Error = ...........");
  });
}


// __ДОБАВЛЯЮ__
let maps;

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [51.544248, 46.049506],
    zoom: 11
  });
  // __ДОБАВЛЯЮ__
  // getCoordinat().then((lat, lon) => maps.setCenter([51.544248, 46.049506]));
}