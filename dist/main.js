/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

console.log("получаю погоду с OpenWeatherMap");

// ___ ОТКУДА ВЗЯЛСЯ ПРОКСИ ?!!! ____
// https://overcoder.net/q/4021/попытка-использовать-fetch-и-перейти-в-режим-no-cors

var proxyUrl  = 'https://cors-anywhere.herokuapp.com/';

// fetch('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=084a72f7662b746a323538af696e70cb', { mode: 'no-cors'})

// var targetUrl = 'https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=084a72f7662b746a323538af696e70cb';


// ______________________________________________________ ЗДЕСЬ _____51.5265_____46.0435_____ ЭТО САРАТОВ _____________
// var targetUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=51.5265&lon=46.0435&appid=084a72f7662b746a323538af696e70cb';

// fetch(proxyUrl + targetUrl)
//   .then(function (rest) { return rest.json() })
//   .then(function (data) {
//     console.log(data);
//     document.querySelector('.geo__city').textContent = data.name;
//     document.querySelector('.geo__country').textContent = data.sys.country;
//     document.querySelector('.geo__date').innerHTML = data.dt_txt;
//     document.querySelector('.temp-today__temp').innerHTML = Math.round(data.main.temp - 263) + '&deg';
//   })
//   .catch(function() {
//     console.log("Fetch Error = ...........");
//   });

// ==============================================================================================

//____ ОКРУГЛЕНИЕ до 4 знаков после запятой ______
// console.log(+ 54.77906545555553.toFixed(4));     //  ПОЛУЧАЕТСЯ --> 54.7790



// --------- АССОЦИАТИВНЫЕ МАССИВЫ ----------


const picName = {
  'cloud':         './assets/img/weather/cloud.png',
   'cloude_&_wind': './assets/img/weather/cloude_&_wind.png',
   'cloud_&_moon':  './assets/img/weather/cloud_&_moon.png',
   'parasol':       './assets/img/weather/parasol.png',
   'rain':          './assets/img/weather/rain.png',
   'rain_&_snow':   './assets/img/weather/rain_&_snow.png',
   'rain_&_storm':  './assets/img/weather/rain_&_storm.png',
   'rain_big':      './assets/img/weather/rain_big.png',
   'rain_litlle':   './assets/img/weather/rain_litlle.png',
   'rain_small':    './assets/img/weather/rain_small.png',
   'snow':          './assets/img/weather/snow.png',
   'sun':           './assets/img/weather/sun.png',
   'sun_&_cloud':   './assets/img/weather/sun_&_cloud.png',
   'wind':          './assets/img/weather/wind.png'
};



//  _________________ ОПРЕДЕЛЯЮ МОИ КООРДИНАТЫ __________________
var detectLatitude = 0;
var detectLongitude = 0;

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
    
    //   strWeather = data.list[0].weather[0].description;
    //   console.log('Получил_данные_о_ПОГОДЕ:__' + strWeather);
    })


    // .catch(function() {
    //   console.log("Fetch Error = ...........");
    // });

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
console.log('___здесь__ШИРОТА__' + detectLatitude);
console.log('___здесь__ДОЛГОТА__' + detectLongitude);




// __________ ВВОД НАЗВАНИЯ ГОРОДА ПО АНГЛИЙСКИ ИЛИ ПО РУССКИ ____________

function inputYourCity() {
    var town = document.getElementById("yourCity");
    console.log("ВНУТРИ ФУНКЦИИ ВИЖУ ГОРОД :___", (town.value));
  
    // var proxyUrl  = 'https://cors-anywhere.herokuapp.com/';
  
    var targetUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + town.value + '&appid=084a72f7662b746a323538af696e70cb';
  
    fetch(proxyUrl + targetUrl)
    .then(function (rest) { return rest.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.geo__city').textContent = data.city.name;
        document.querySelector('.geo__country').textContent = data.city.country;
        document.querySelector('.geo__date').innerHTML = data.list[0].dt_txt;
        document.querySelector('.temp-today__temp').innerHTML = Math.round(data.list[0].main.temp - 273) + '&deg';
        document.querySelector('.temp-today__weather-description').innerHTML = data.list[0].weather[0].description;
        document.querySelector('.temp-today__weather-feels').innerHTML = Math.round(data.list[0].main.feels_like - 273) + '&deg';
        document.querySelector('.temp-today__weather-wind').innerHTML = data.list[0].wind.speed;
        document.querySelector('.temp-today__weather-humidity').innerHTML = data.list[0].main.humidity;
        document.querySelector('.temp-today__weather-pressure').innerHTML = data.list[0].main.pressure;
        document.querySelector('.geo-point__latitude').textContent = data.city.coord.lat;
        document.querySelector('.geo-point__longitude').innerHTML = data.city.coord.lon;
        document.querySelector('.temp-day-2__temp').innerHTML = Math.round(data.list[8].main.temp - 273) + '&deg';
        document.querySelector('.temp-day-2__weather-description').innerHTML = data.list[8].weather[0].description;
        document.querySelector('.temp-day-3__temp').innerHTML = Math.round(data.list[16].main.temp - 273) + '&deg';
        document.querySelector('.temp-day-3__weather-description').innerHTML = data.list[16].weather[0].description;
        document.querySelector('.temp-day-4__temp').innerHTML = Math.round(data.list[24].main.temp - 273) + '&deg';
        document.querySelector('.temp-day-4__weather-description').innerHTML = data.list[24].weather[0].description;

        // position.coords.latitude = data.city.coord.lat;
        // position.coords.longitude = data.city.coord.lon;
        // console.log("широта из DATA =__", position.coords.latitude);
        // console.log("ДОЛГОТА из DATA=__", position.coords.longitude);

        

    })
    .catch(function() {
      console.log("Fetch Error = ...........");
    });
  }


// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
// САРАТОВ ___ 51.544248, 46.049506
// center: [data.city.coord.lat, data.city.coord.lon],
// center: [position.coords.latitude, position.coords.longitude],

// __ДОБАВЛЯЮ__
let maps;

ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [51.544248, 46.049506],
    zoom: 11
  });
  // __ДОБАВЛЯЮ__
  getCoordinat().then((lat, lon) => maps.setCenter([51.544248, 46.049506]));
}





// var targetUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=51.5265&lon=46.0435&appid=084a72f7662b746a323538af696e70cb';

// fetch(proxyUrl + targetUrl)
//   .then(function (rest) { return rest.json() })
//   .then(function (data) {
//     console.log(data);
//     document.querySelector('.geo__city').textContent = data.city.name;
//     document.querySelector('.geo__country').textContent = data.city.country;
//     document.querySelector('.geo__date').textContent = data.list[0]['clouds']['dt_txt'];
//     document.querySelector('.temp-today__temp').innerHTML = Math.round(data.list[0].main.temp - 273) + '&deg';
//     document.querySelector('.temp-today__weather-description').innerHTML = data.list[0].weather[0].description;
//   })
//   .catch(function() {
//     console.log("Fetch Error = ...........");
//   });

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLG9IQUFvSCxpQkFBaUI7O0FBRXJJOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLHFCQUFxQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07O0FBRU47O0FBRUE7QUFDQSwrQ0FBK0M7Ozs7QUFJL0M7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7QUFFQTtBQUNBLDRCQUE0QixxQkFBcUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU0sRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJjb25zb2xlLmxvZyhcItC/0L7Qu9GD0YfQsNGOINC/0L7Qs9C+0LTRgyDRgSBPcGVuV2VhdGhlck1hcFwiKTtcclxuXHJcbi8vIF9fXyDQntCi0JrQo9CU0JAg0JLQl9Cv0JvQodCvINCf0KDQntCa0KHQmCA/ISEhIF9fX19cclxuLy8gaHR0cHM6Ly9vdmVyY29kZXIubmV0L3EvNDAyMS/Qv9C+0L/Ri9GC0LrQsC3QuNGB0L/QvtC70YzQt9C+0LLQsNGC0YwtZmV0Y2gt0Lgt0L/QtdGA0LXQudGC0Lgt0LIt0YDQtdC20LjQvC1uby1jb3JzXHJcblxyXG52YXIgcHJveHlVcmwgID0gJ2h0dHBzOi8vY29ycy1hbnl3aGVyZS5oZXJva3VhcHAuY29tLyc7XHJcblxyXG4vLyBmZXRjaCgnaHR0cHM6Ly9zYW1wbGVzLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9TG9uZG9uLHVrJmFwcGlkPTA4NGE3MmY3NjYyYjc0NmEzMjM1MzhhZjY5NmU3MGNiJywgeyBtb2RlOiAnbm8tY29ycyd9KVxyXG5cclxuLy8gdmFyIHRhcmdldFVybCA9ICdodHRwczovL3NhbXBsZXMub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1Mb25kb24sdWsmYXBwaWQ9MDg0YTcyZjc2NjJiNzQ2YTMyMzUzOGFmNjk2ZTcwY2InO1xyXG5cclxuXHJcbi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyDQl9CU0JXQodCsIF9fX19fNTEuNTI2NV9fX19fNDYuMDQzNV9fX19fINCt0KLQniDQodCQ0KDQkNCi0J7QkiBfX19fX19fX19fX19fXHJcbi8vIHZhciB0YXJnZXRVcmwgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PTUxLjUyNjUmbG9uPTQ2LjA0MzUmYXBwaWQ9MDg0YTcyZjc2NjJiNzQ2YTMyMzUzOGFmNjk2ZTcwY2InO1xyXG5cclxuLy8gZmV0Y2gocHJveHlVcmwgKyB0YXJnZXRVcmwpXHJcbi8vICAgLnRoZW4oZnVuY3Rpb24gKHJlc3QpIHsgcmV0dXJuIHJlc3QuanNvbigpIH0pXHJcbi8vICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4vLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlb19fY2l0eScpLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xyXG4vLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlb19fY291bnRyeScpLnRleHRDb250ZW50ID0gZGF0YS5zeXMuY291bnRyeTtcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW9fX2RhdGUnKS5pbm5lckhUTUwgPSBkYXRhLmR0X3R4dDtcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLXRvZGF5X190ZW1wJykuaW5uZXJIVE1MID0gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCAtIDI2MykgKyAnJmRlZyc7XHJcbi8vICAgfSlcclxuLy8gICAuY2F0Y2goZnVuY3Rpb24oKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcIkZldGNoIEVycm9yID0gLi4uLi4uLi4uLi5cIik7XHJcbi8vICAgfSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4vL19fX18g0J7QmtCg0KPQk9Cb0JXQndCY0JUg0LTQviA0INC30L3QsNC60L7QsiDQv9C+0YHQu9C1INC30LDQv9GP0YLQvtC5IF9fX19fX1xyXG4vLyBjb25zb2xlLmxvZygrIDU0Ljc3OTA2NTQ1NTU1NTUzLnRvRml4ZWQoNCkpOyAgICAgLy8gINCf0J7Qm9Cj0KfQkNCV0KLQodCvIC0tPiA1NC43NzkwXHJcblxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLSDQkNCh0KHQntCm0JjQkNCi0JjQktCd0KvQlSDQnNCQ0KHQodCY0JLQqyAtLS0tLS0tLS0tXHJcblxyXG5cclxuY29uc3QgcGljTmFtZSA9IHtcclxuICAnY2xvdWQnOiAgICAgICAgICcuL2Fzc2V0cy9pbWcvd2VhdGhlci9jbG91ZC5wbmcnLFxyXG4gICAnY2xvdWRlXyZfd2luZCc6ICcuL2Fzc2V0cy9pbWcvd2VhdGhlci9jbG91ZGVfJl93aW5kLnBuZycsXHJcbiAgICdjbG91ZF8mX21vb24nOiAgJy4vYXNzZXRzL2ltZy93ZWF0aGVyL2Nsb3VkXyZfbW9vbi5wbmcnLFxyXG4gICAncGFyYXNvbCc6ICAgICAgICcuL2Fzc2V0cy9pbWcvd2VhdGhlci9wYXJhc29sLnBuZycsXHJcbiAgICdyYWluJzogICAgICAgICAgJy4vYXNzZXRzL2ltZy93ZWF0aGVyL3JhaW4ucG5nJyxcclxuICAgJ3JhaW5fJl9zbm93JzogICAnLi9hc3NldHMvaW1nL3dlYXRoZXIvcmFpbl8mX3Nub3cucG5nJyxcclxuICAgJ3JhaW5fJl9zdG9ybSc6ICAnLi9hc3NldHMvaW1nL3dlYXRoZXIvcmFpbl8mX3N0b3JtLnBuZycsXHJcbiAgICdyYWluX2JpZyc6ICAgICAgJy4vYXNzZXRzL2ltZy93ZWF0aGVyL3JhaW5fYmlnLnBuZycsXHJcbiAgICdyYWluX2xpdGxsZSc6ICAgJy4vYXNzZXRzL2ltZy93ZWF0aGVyL3JhaW5fbGl0bGxlLnBuZycsXHJcbiAgICdyYWluX3NtYWxsJzogICAgJy4vYXNzZXRzL2ltZy93ZWF0aGVyL3JhaW5fc21hbGwucG5nJyxcclxuICAgJ3Nub3cnOiAgICAgICAgICAnLi9hc3NldHMvaW1nL3dlYXRoZXIvc25vdy5wbmcnLFxyXG4gICAnc3VuJzogICAgICAgICAgICcuL2Fzc2V0cy9pbWcvd2VhdGhlci9zdW4ucG5nJyxcclxuICAgJ3N1bl8mX2Nsb3VkJzogICAnLi9hc3NldHMvaW1nL3dlYXRoZXIvc3VuXyZfY2xvdWQucG5nJyxcclxuICAgJ3dpbmQnOiAgICAgICAgICAnLi9hc3NldHMvaW1nL3dlYXRoZXIvd2luZC5wbmcnXHJcbn07XHJcblxyXG5cclxuXHJcbi8vICBfX19fX19fX19fX19fX19fXyDQntCf0KDQldCU0JXQm9Cv0K4g0JzQntCYINCa0J7QntCg0JTQmNCd0JDQotCrIF9fX19fX19fX19fX19fX19fX1xyXG52YXIgZGV0ZWN0TGF0aXR1ZGUgPSAwO1xyXG52YXIgZGV0ZWN0TG9uZ2l0dWRlID0gMDtcclxuXHJcbmZ1bmN0aW9uIGdldENvb3JkaW5hdCgpIHtcclxuICAgIC8vIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc2hvd0Nvb3JkaW5hdCwgc2hvd0Vycm9yKTtcclxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oc2hvd0Nvb3JkaW5hdCk7XHJcbn1cclxuZnVuY3Rpb24gc2hvd0Nvb3JkaW5hdChwb3NpdGlvbikge1xyXG4gICAgY29uc29sZS5sb2coXCLQqNC40YDQvtGC0LA6ICBcIiArIHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcItCU0L7Qu9Cz0L7RgtCwOiBcIiArIHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUpO1xyXG5cclxuXHJcbiAgICB2YXIgdGFyZ2V0VXJsID0gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JyArIHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSArICcmbG9uPScgKyBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlICsgJyZhcHBpZD0wODRhNzJmNzY2MmI3NDZhMzIzNTM4YWY2OTZlNzBjYic7XHJcblxyXG4gICAgZmV0Y2gocHJveHlVcmwgKyB0YXJnZXRVcmwpXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzdCkgeyByZXR1cm4gcmVzdC5qc29uKCkgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlb19fY2l0eScpLnRleHRDb250ZW50ID0gZGF0YS5jaXR5Lm5hbWU7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlb19fY291bnRyeScpLnRleHRDb250ZW50ID0gZGF0YS5jaXR5LmNvdW50cnk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlb19fZGF0ZScpLnRleHRDb250ZW50ID0gZGF0YS5saXN0WzBdWydjbG91ZHMnXVsnZHRfdHh0J107XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtdG9kYXlfX3RlbXAnKS5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKGRhdGEubGlzdFswXS5tYWluLnRlbXAgLSAyNzMpICsgJyZkZWcnO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLXRvZGF5X193ZWF0aGVyLWRlc2NyaXB0aW9uJykuaW5uZXJIVE1MID0gZGF0YS5saXN0WzBdLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtdG9kYXlfX3dlYXRoZXItZmVlbHMnKS5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKGRhdGEubGlzdFswXS5tYWluLmZlZWxzX2xpa2UgLSAyNzMpICsgJyZkZWcnO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLXRvZGF5X193ZWF0aGVyLXdpbmQnKS5pbm5lckhUTUwgPSBkYXRhLmxpc3RbMF0ud2luZC5zcGVlZDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcC10b2RheV9fd2VhdGhlci1odW1pZGl0eScpLmlubmVySFRNTCA9IGRhdGEubGlzdFswXS5tYWluLmh1bWlkaXR5O1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLXRvZGF5X193ZWF0aGVyLXByZXNzdXJlJykuaW5uZXJIVE1MID0gZGF0YS5saXN0WzBdLm1haW4ucHJlc3N1cmU7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlby1wb2ludF9fbGF0aXR1ZGUnKS5pbm5lckhUTUwgPSBkYXRhLmNpdHkuY29vcmQubGF0O1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW8tcG9pbnRfX2xvbmdpdHVkZScpLmlubmVySFRNTCA9IGRhdGEuY2l0eS5jb29yZC5sb247XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtZGF5LTJfX3RlbXAnKS5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKGRhdGEubGlzdFs4XS5tYWluLnRlbXAgLSAyNzMpICsgJyZkZWcnO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLWRheS0yX193ZWF0aGVyLWRlc2NyaXB0aW9uJykuaW5uZXJIVE1MID0gZGF0YS5saXN0WzhdLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtZGF5LTNfX3RlbXAnKS5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKGRhdGEubGlzdFsxNl0ubWFpbi50ZW1wIC0gMjczKSArICcmZGVnJztcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcC1kYXktM19fd2VhdGhlci1kZXNjcmlwdGlvbicpLmlubmVySFRNTCA9IGRhdGEubGlzdFsxNl0ud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcC1kYXktNF9fdGVtcCcpLmlubmVySFRNTCA9IE1hdGgucm91bmQoZGF0YS5saXN0WzI0XS5tYWluLnRlbXAgLSAyNzMpICsgJyZkZWcnO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLWRheS00X193ZWF0aGVyLWRlc2NyaXB0aW9uJykuaW5uZXJIVE1MID0gZGF0YS5saXN0WzI0XS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgXHJcbiAgICAvLyAgIHN0cldlYXRoZXIgPSBkYXRhLmxpc3RbMF0ud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ9Cf0L7Qu9GD0YfQuNC7X9C00LDQvdC90YvQtV/Qvl/Qn9Ce0JPQntCU0JU6X18nICsgc3RyV2VhdGhlcik7XHJcbiAgICB9KVxyXG5cclxuXHJcbiAgICAvLyAuY2F0Y2goZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiRmV0Y2ggRXJyb3IgPSAuLi4uLi4uLi4uLlwiKTtcclxuICAgIC8vIH0pO1xyXG5cclxuICAgIC5jYXRjaChmdW5jdGlvbiBzaG93RXJyb3IoZXJyb3IpIHtcclxuICAgICAgc3dpdGNoKGVycm9yLmNvZGUpIHtcclxuICAgICAgICBjYXNlIGVycm9yLlBFUk1JU1NJT05fREVOSUVEOlxyXG4gICAgICAgICAgYWxlcnQoXCLQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0LfQsNC/0YDQtdGC0LjQuyDRgdGH0LjRgtGL0LLQsNGC0Ywg0LjQvdGE0L7RgNC80LDRhtC40Y4g0L4g0YHQstC+0LXQvCDQvNC10YHRgtC+0L/QvtC70L7QttC10L3QuNC4IVwiKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBlcnJvci5QT1NJVElPTl9VTkFWQUlMQUJMRTpcclxuICAgICAgICAgIGFsZXJ0KFwi0JHRgNCw0YPQt9C10YAg0L3QtSDRgdC80L7QsyDQvtC/0YDQtdC00LXQu9C40YLRjCDQvNC10YHRgtC+0L/QvtC70L7QttC10L3QuNC1INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1wiKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSBlcnJvci5USU1FT1VUOlxyXG4gICAgICAgICAgYWxlcnQoXCLQkdGA0LDRg9C30LXRgCDQvdC1INGD0YHQv9C10Lsg0L7Qv9GA0LXQtNC10LvQuNGC0Ywg0LzQtdGB0YLQvtC/0L7Qu9C+0LbQtdC90LjQtSDQt9CwINCy0YvQtNC10LvQtdC90L3QvtC1INC10LzRgyDQstGA0LXQvNGPXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlIGVycm9yLlVOS05PV05fRVJST1I6XHJcbiAgICAgICAgICBhbGVydChcItCf0YDQvtC40LfQvtGI0LvQsCDQvdC10L7Qv9GA0LXQtNC10LvQtdC90L3QsNGPINC+0YjQuNCx0LrQsFwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8vIF9fX18g0JLQq9CS0J7QlCDQmtCe0J7QoNCU0JjQndCQ0KIgX19fX1xyXG5nZXRDb29yZGluYXQoKTtcclxuY29uc29sZS5sb2coJ19fX9C30LTQtdGB0YxfX9Co0JjQoNCe0KLQkF9fJyArIGRldGVjdExhdGl0dWRlKTtcclxuY29uc29sZS5sb2coJ19fX9C30LTQtdGB0YxfX9CU0J7Qm9CT0J7QotCQX18nICsgZGV0ZWN0TG9uZ2l0dWRlKTtcclxuXHJcblxyXG5cclxuXHJcbi8vIF9fX19fX19fX18g0JLQktCe0JQg0J3QkNCX0JLQkNCd0JjQryDQk9Ce0KDQntCU0JAg0J/QniDQkNCd0JPQm9CY0JnQodCa0Jgg0JjQm9CYINCf0J4g0KDQo9Ch0KHQmtCYIF9fX19fX19fX19fX1xyXG5cclxuZnVuY3Rpb24gaW5wdXRZb3VyQ2l0eSgpIHtcclxuICAgIHZhciB0b3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5b3VyQ2l0eVwiKTtcclxuICAgIGNvbnNvbGUubG9nKFwi0JLQndCj0KLQoNCYINCk0KPQndCa0KbQmNCYINCS0JjQltCjINCT0J7QoNCe0JQgOl9fX1wiLCAodG93bi52YWx1ZSkpO1xyXG4gIFxyXG4gICAgLy8gdmFyIHByb3h5VXJsICA9ICdodHRwczovL2NvcnMtYW55d2hlcmUuaGVyb2t1YXBwLmNvbS8nO1xyXG4gIFxyXG4gICAgdmFyIHRhcmdldFVybCA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0nICsgdG93bi52YWx1ZSArICcmYXBwaWQ9MDg0YTcyZjc2NjJiNzQ2YTMyMzUzOGFmNjk2ZTcwY2InO1xyXG4gIFxyXG4gICAgZmV0Y2gocHJveHlVcmwgKyB0YXJnZXRVcmwpXHJcbiAgICAudGhlbihmdW5jdGlvbiAocmVzdCkgeyByZXR1cm4gcmVzdC5qc29uKCkgfSlcclxuICAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlb19fY2l0eScpLnRleHRDb250ZW50ID0gZGF0YS5jaXR5Lm5hbWU7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlb19fY291bnRyeScpLnRleHRDb250ZW50ID0gZGF0YS5jaXR5LmNvdW50cnk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlb19fZGF0ZScpLmlubmVySFRNTCA9IGRhdGEubGlzdFswXS5kdF90eHQ7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtdG9kYXlfX3RlbXAnKS5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKGRhdGEubGlzdFswXS5tYWluLnRlbXAgLSAyNzMpICsgJyZkZWcnO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLXRvZGF5X193ZWF0aGVyLWRlc2NyaXB0aW9uJykuaW5uZXJIVE1MID0gZGF0YS5saXN0WzBdLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtdG9kYXlfX3dlYXRoZXItZmVlbHMnKS5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKGRhdGEubGlzdFswXS5tYWluLmZlZWxzX2xpa2UgLSAyNzMpICsgJyZkZWcnO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLXRvZGF5X193ZWF0aGVyLXdpbmQnKS5pbm5lckhUTUwgPSBkYXRhLmxpc3RbMF0ud2luZC5zcGVlZDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcC10b2RheV9fd2VhdGhlci1odW1pZGl0eScpLmlubmVySFRNTCA9IGRhdGEubGlzdFswXS5tYWluLmh1bWlkaXR5O1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLXRvZGF5X193ZWF0aGVyLXByZXNzdXJlJykuaW5uZXJIVE1MID0gZGF0YS5saXN0WzBdLm1haW4ucHJlc3N1cmU7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlby1wb2ludF9fbGF0aXR1ZGUnKS50ZXh0Q29udGVudCA9IGRhdGEuY2l0eS5jb29yZC5sYXQ7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlby1wb2ludF9fbG9uZ2l0dWRlJykuaW5uZXJIVE1MID0gZGF0YS5jaXR5LmNvb3JkLmxvbjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcC1kYXktMl9fdGVtcCcpLmlubmVySFRNTCA9IE1hdGgucm91bmQoZGF0YS5saXN0WzhdLm1haW4udGVtcCAtIDI3MykgKyAnJmRlZyc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtZGF5LTJfX3dlYXRoZXItZGVzY3JpcHRpb24nKS5pbm5lckhUTUwgPSBkYXRhLmxpc3RbOF0ud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcC1kYXktM19fdGVtcCcpLmlubmVySFRNTCA9IE1hdGgucm91bmQoZGF0YS5saXN0WzE2XS5tYWluLnRlbXAgLSAyNzMpICsgJyZkZWcnO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLWRheS0zX193ZWF0aGVyLWRlc2NyaXB0aW9uJykuaW5uZXJIVE1MID0gZGF0YS5saXN0WzE2XS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLWRheS00X190ZW1wJykuaW5uZXJIVE1MID0gTWF0aC5yb3VuZChkYXRhLmxpc3RbMjRdLm1haW4udGVtcCAtIDI3MykgKyAnJmRlZyc7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtZGF5LTRfX3dlYXRoZXItZGVzY3JpcHRpb24nKS5pbm5lckhUTUwgPSBkYXRhLmxpc3RbMjRdLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XHJcblxyXG4gICAgICAgIC8vIHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSA9IGRhdGEuY2l0eS5jb29yZC5sYXQ7XHJcbiAgICAgICAgLy8gcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSA9IGRhdGEuY2l0eS5jb29yZC5sb247XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLRiNC40YDQvtGC0LAg0LjQtyBEQVRBID1fX1wiLCBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi0JTQntCb0JPQntCi0JAg0LjQtyBEQVRBPV9fXCIsIHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUpO1xyXG5cclxuICAgICAgICBcclxuXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkZldGNoIEVycm9yID0gLi4uLi4uLi4uLi5cIik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuLy8g0KTRg9C90LrRhtC40Y8geW1hcHMucmVhZHkoKSDQsdGD0LTQtdGCINCy0YvQt9Cy0LDQvdCwLCDQutC+0LPQtNCwXHJcbi8vINC30LDQs9GA0YPQt9GP0YLRgdGPINCy0YHQtSDQutC+0LzQv9C+0L3QtdC90YLRiyBBUEksINCwINGC0LDQutC20LUg0LrQvtCz0LTQsCDQsdGD0LTQtdGCINCz0L7RgtC+0LLQviBET00t0LTQtdGA0LXQstC+LlxyXG4vLyDQodCQ0KDQkNCi0J7QkiBfX18gNTEuNTQ0MjQ4LCA0Ni4wNDk1MDZcclxuLy8gY2VudGVyOiBbZGF0YS5jaXR5LmNvb3JkLmxhdCwgZGF0YS5jaXR5LmNvb3JkLmxvbl0sXHJcbi8vIGNlbnRlcjogW3Bvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSwgcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZV0sXHJcblxyXG4vLyBfX9CU0J7QkdCQ0JLQm9Cv0K5fX1xyXG5sZXQgbWFwcztcclxuXHJcbnltYXBzLnJlYWR5KGluaXQpO1xyXG5mdW5jdGlvbiBpbml0KCl7XHJcbiAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLCB7XHJcbiAgICBjZW50ZXI6IFs1MS41NDQyNDgsIDQ2LjA0OTUwNl0sXHJcbiAgICB6b29tOiAxMVxyXG4gIH0pO1xyXG4gIC8vIF9f0JTQntCR0JDQktCb0K/Qrl9fXHJcbiAgZ2V0Q29vcmRpbmF0KCkudGhlbigobGF0LCBsb24pID0+IG1hcHMuc2V0Q2VudGVyKFs1MS41NDQyNDgsIDQ2LjA0OTUwNl0pKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vIHZhciB0YXJnZXRVcmwgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD01MS41MjY1Jmxvbj00Ni4wNDM1JmFwcGlkPTA4NGE3MmY3NjYyYjc0NmEzMjM1MzhhZjY5NmU3MGNiJztcclxuXHJcbi8vIGZldGNoKHByb3h5VXJsICsgdGFyZ2V0VXJsKVxyXG4vLyAgIC50aGVuKGZ1bmN0aW9uIChyZXN0KSB7IHJldHVybiByZXN0Lmpzb24oKSB9KVxyXG4vLyAgIC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW9fX2NpdHknKS50ZXh0Q29udGVudCA9IGRhdGEuY2l0eS5uYW1lO1xyXG4vLyAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlb19fY291bnRyeScpLnRleHRDb250ZW50ID0gZGF0YS5jaXR5LmNvdW50cnk7XHJcbi8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2VvX19kYXRlJykudGV4dENvbnRlbnQgPSBkYXRhLmxpc3RbMF1bJ2Nsb3VkcyddWydkdF90eHQnXTtcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLXRvZGF5X190ZW1wJykuaW5uZXJIVE1MID0gTWF0aC5yb3VuZChkYXRhLmxpc3RbMF0ubWFpbi50ZW1wIC0gMjczKSArICcmZGVnJztcclxuLy8gICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLXRvZGF5X193ZWF0aGVyLWRlc2NyaXB0aW9uJykuaW5uZXJIVE1MID0gZGF0YS5saXN0WzBdLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XHJcbi8vICAgfSlcclxuLy8gICAuY2F0Y2goZnVuY3Rpb24oKSB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcIkZldGNoIEVycm9yID0gLi4uLi4uLi4uLi5cIik7XHJcbi8vICAgfSk7Il0sInNvdXJjZVJvb3QiOiIifQ==