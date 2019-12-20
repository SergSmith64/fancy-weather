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

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ "./src/css/index.css");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_geolocation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/geolocation */ "./src/js/geolocation.js");
// import './css/normalize.css';




function a() {
  return Object(_js_geolocation__WEBPACK_IMPORTED_MODULE_1__["default"])(5,2);
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

/***/ }),

/***/ "./src/js/geolocation.js":
/*!*******************************!*\
  !*** ./src/js/geolocation.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a+b;
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9pbmRleC5jc3M/NGMyMiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dlb2xvY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5Qjs7QUFFaUI7O0FBRTFDO0FBQ0EsU0FBUywrREFBVztBQUNwQjtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHlCQUF5QixxQkFBcUI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDNUhBO0FBQWU7QUFDZjtBQUNBLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gaW1wb3J0ICcuL2Nzcy9ub3JtYWxpemUuY3NzJztcclxuaW1wb3J0ICcuL2Nzcy9pbmRleC5jc3MnO1xyXG5cclxuaW1wb3J0IGdlb2xvY2F0aW9uIGZyb20gJy4vanMvZ2VvbG9jYXRpb24nXHJcblxyXG5mdW5jdGlvbiBhKCkge1xyXG4gIHJldHVybiBnZW9sb2NhdGlvbig1LDIpO1xyXG59XHJcbmNvbnNvbGUubG9nKFwiX9Ch0KPQnNCc0JBfXz1fXCIsIGEoKSk7XHJcblxyXG5cclxuXHJcbi8vIF9fXyDQk9CV0J7Qm9Ce0JrQkNCm0JjQryBfX19fXHJcbnZhciBwcm94eVVybCAgPSAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vJztcclxuXHJcbi8vICBfX19fX19fX19fX19fX19fXyDQntCf0KDQldCU0JXQm9Cv0K4g0JzQntCYINCa0J7QntCg0JTQmNCd0JDQotCrIF9fX19fX19fX19fX19fX19fX1xyXG5cclxuZnVuY3Rpb24gZ2V0Q29vcmRpbmF0KCkge1xyXG4gICAgLy8gbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzaG93Q29vcmRpbmF0LCBzaG93RXJyb3IpO1xyXG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzaG93Q29vcmRpbmF0KTtcclxufVxyXG5mdW5jdGlvbiBzaG93Q29vcmRpbmF0KHBvc2l0aW9uKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcItCo0LjRgNC+0YLQsDogIFwiICsgcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlKTtcclxuICAgIGNvbnNvbGUubG9nKFwi0JTQvtC70LPQvtGC0LA6IFwiICsgcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSk7XHJcblxyXG5cclxuICAgIHZhciB0YXJnZXRVcmwgPSAnaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0nICsgcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlICsgJyZsb249JyArIHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGUgKyAnJmFwcGlkPTA4NGE3MmY3NjYyYjc0NmEzMjM1MzhhZjY5NmU3MGNiJztcclxuXHJcbiAgICBmZXRjaChwcm94eVVybCArIHRhcmdldFVybClcclxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXN0KSB7IHJldHVybiByZXN0Lmpzb24oKSB9KVxyXG4gICAgLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW9fX2NpdHknKS50ZXh0Q29udGVudCA9IGRhdGEuY2l0eS5uYW1lO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2VvX19jb3VudHJ5JykudGV4dENvbnRlbnQgPSBkYXRhLmNpdHkuY291bnRyeTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlb19fZGF0ZScpLnRleHRDb250ZW50ID0gZGF0YS5saXN0WzBdWydjbG91ZHMnXVsnZHRfdHh0J107XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLXRvZGF5X190ZW1wJykuaW5uZXJIVE1MID0gTWF0aC5yb3VuZChkYXRhLmxpc3RbMF0ubWFpbi50ZW1wIC0gMjczKSArICcmZGVnJztcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtdG9kYXlfX3dlYXRoZXItZGVzY3JpcHRpb24nKS5pbm5lckhUTUwgPSBkYXRhLmxpc3RbMF0ud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtdG9kYXlfX3dlYXRoZXItZmVlbHMnKS5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKGRhdGEubGlzdFswXS5tYWluLmZlZWxzX2xpa2UgLSAyNzMpICsgJyZkZWcnO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcC10b2RheV9fd2VhdGhlci13aW5kJykuaW5uZXJIVE1MID0gZGF0YS5saXN0WzBdLndpbmQuc3BlZWQ7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLXRvZGF5X193ZWF0aGVyLWh1bWlkaXR5JykuaW5uZXJIVE1MID0gZGF0YS5saXN0WzBdLm1haW4uaHVtaWRpdHk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLXRvZGF5X193ZWF0aGVyLXByZXNzdXJlJykuaW5uZXJIVE1MID0gZGF0YS5saXN0WzBdLm1haW4ucHJlc3N1cmU7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW8tcG9pbnRfX2xhdGl0dWRlJykuaW5uZXJIVE1MID0gZGF0YS5jaXR5LmNvb3JkLmxhdDtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlby1wb2ludF9fbG9uZ2l0dWRlJykuaW5uZXJIVE1MID0gZGF0YS5jaXR5LmNvb3JkLmxvbjtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtZGF5LTJfX3RlbXAnKS5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKGRhdGEubGlzdFs4XS5tYWluLnRlbXAgLSAyNzMpICsgJyZkZWcnO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcC1kYXktMl9fd2VhdGhlci1kZXNjcmlwdGlvbicpLmlubmVySFRNTCA9IGRhdGEubGlzdFs4XS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcC1kYXktM19fdGVtcCcpLmlubmVySFRNTCA9IE1hdGgucm91bmQoZGF0YS5saXN0WzE2XS5tYWluLnRlbXAgLSAyNzMpICsgJyZkZWcnO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcC1kYXktM19fd2VhdGhlci1kZXNjcmlwdGlvbicpLmlubmVySFRNTCA9IGRhdGEubGlzdFsxNl0ud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtZGF5LTRfX3RlbXAnKS5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKGRhdGEubGlzdFsyNF0ubWFpbi50ZW1wIC0gMjczKSArICcmZGVnJztcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtZGF5LTRfX3dlYXRoZXItZGVzY3JpcHRpb24nKS5pbm5lckhUTUwgPSBkYXRhLmxpc3RbMjRdLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XHJcbiAgICB9KVxyXG5cclxuICAgIC5jYXRjaChmdW5jdGlvbiBzaG93RXJyb3IoZXJyb3IpIHtcclxuICAgICAgc3dpdGNoKGVycm9yLmNvZGUpIHtcclxuICAgICAgICBjYXNlIGVycm9yLlBFUk1JU1NJT05fREVOSUVEOlxyXG4gICAgICAgICAgYWxlcnQoXCLQn9C+0LvRjNC30L7QstCw0YLQtdC70Ywg0LfQsNC/0YDQtdGC0LjQuyDRgdGH0LjRgtGL0LLQsNGC0Ywg0LjQvdGE0L7RgNC80LDRhtC40Y4g0L4g0YHQstC+0LXQvCDQvNC10YHRgtC+0L/QvtC70L7QttC10L3QuNC4IVwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGVycm9yLlBPU0lUSU9OX1VOQVZBSUxBQkxFOlxyXG4gICAgICAgICAgYWxlcnQoXCLQkdGA0LDRg9C30LXRgCDQvdC1INGB0LzQvtCzINC+0L/RgNC10LTQtdC70LjRgtGMINC80LXRgdGC0L7Qv9C+0LvQvtC20LXQvdC40LUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXCIpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgZXJyb3IuVElNRU9VVDpcclxuICAgICAgICAgIGFsZXJ0KFwi0JHRgNCw0YPQt9C10YAg0L3QtSDRg9GB0L/QtdC7INC+0L/RgNC10LTQtdC70LjRgtGMINC80LXRgdGC0L7Qv9C+0LvQvtC20LXQvdC40LUg0LfQsCDQstGL0LTQtdC70LXQvdC90L7QtSDQtdC80YMg0LLRgNC10LzRj1wiKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIGVycm9yLlVOS05PV05fRVJST1I6XHJcbiAgICAgICAgICBhbGVydChcItCf0YDQvtC40LfQvtGI0LvQsCDQvdC10L7Qv9GA0LXQtNC10LvQtdC90L3QsNGPINC+0YjQuNCx0LrQsFwiKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIH0pO1xyXG59XHJcbi8vIF9fX18g0JLQq9CS0J7QlCDQmtCe0J7QoNCU0JjQndCQ0KIgX19fX1xyXG5nZXRDb29yZGluYXQoKTtcclxuXHJcblxyXG5cclxuXHJcbi8vIF9fX19fX19fX18g0JLQktCe0JQg0J3QkNCX0JLQkNCd0JjQryDQk9Ce0KDQntCU0JAg0J/QniDQkNCd0JPQm9CY0JnQodCa0Jgg0JjQm9CYINCf0J4g0KDQo9Ch0KHQmtCYIF9fX19fX19fX19fX1xyXG5cclxuZnVuY3Rpb24gaW5wdXRZb3VyQ2l0eSgpIHtcclxuICB2YXIgdG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwieW91ckNpdHlcIik7XHJcbiAgY29uc29sZS5sb2coXCLQktCd0KPQotCg0Jgg0KTQo9Cd0JrQptCY0Jgg0JLQmNCW0KMg0JPQntCg0J7QlCA6X19fXCIsICh0b3duLnZhbHVlKSk7XHJcblxyXG4gIC8vIHZhciBwcm94eVVybCAgPSAnaHR0cHM6Ly9jb3JzLWFueXdoZXJlLmhlcm9rdWFwcC5jb20vJztcclxuXHJcbiAgdmFyIHRhcmdldFVybCA9ICdodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0nICsgdG93bi52YWx1ZSArICcmYXBwaWQ9MDg0YTcyZjc2NjJiNzQ2YTMyMzUzOGFmNjk2ZTcwY2InO1xyXG5cclxuICBmZXRjaChwcm94eVVybCArIHRhcmdldFVybClcclxuICAudGhlbihmdW5jdGlvbiAocmVzdCkgeyByZXR1cm4gcmVzdC5qc29uKCkgfSlcclxuICAudGhlbihmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2VvX19jaXR5JykudGV4dENvbnRlbnQgPSBkYXRhLmNpdHkubmFtZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nZW9fX2NvdW50cnknKS50ZXh0Q29udGVudCA9IGRhdGEuY2l0eS5jb3VudHJ5O1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdlb19fZGF0ZScpLnRleHRDb250ZW50ID0gZGF0YS5saXN0WzBdWydjbG91ZHMnXVsnZHRfdHh0J107XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcC10b2RheV9fdGVtcCcpLmlubmVySFRNTCA9IE1hdGgucm91bmQoZGF0YS5saXN0WzBdLm1haW4udGVtcCAtIDI3MykgKyAnJmRlZyc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcC10b2RheV9fd2VhdGhlci1kZXNjcmlwdGlvbicpLmlubmVySFRNTCA9IGRhdGEubGlzdFswXS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtdG9kYXlfX3dlYXRoZXItZmVlbHMnKS5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKGRhdGEubGlzdFswXS5tYWluLmZlZWxzX2xpa2UgLSAyNzMpICsgJyZkZWcnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtdG9kYXlfX3dlYXRoZXItd2luZCcpLmlubmVySFRNTCA9IGRhdGEubGlzdFswXS53aW5kLnNwZWVkO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtdG9kYXlfX3dlYXRoZXItaHVtaWRpdHknKS5pbm5lckhUTUwgPSBkYXRhLmxpc3RbMF0ubWFpbi5odW1pZGl0eTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLXRvZGF5X193ZWF0aGVyLXByZXNzdXJlJykuaW5uZXJIVE1MID0gZGF0YS5saXN0WzBdLm1haW4ucHJlc3N1cmU7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2VvLXBvaW50X19sYXRpdHVkZScpLmlubmVySFRNTCA9IGRhdGEuY2l0eS5jb29yZC5sYXQ7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2VvLXBvaW50X19sb25naXR1ZGUnKS5pbm5lckhUTUwgPSBkYXRhLmNpdHkuY29vcmQubG9uO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtZGF5LTJfX3RlbXAnKS5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKGRhdGEubGlzdFs4XS5tYWluLnRlbXAgLSAyNzMpICsgJyZkZWcnO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAtZGF5LTJfX3dlYXRoZXItZGVzY3JpcHRpb24nKS5pbm5lckhUTUwgPSBkYXRhLmxpc3RbOF0ud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLWRheS0zX190ZW1wJykuaW5uZXJIVE1MID0gTWF0aC5yb3VuZChkYXRhLmxpc3RbMTZdLm1haW4udGVtcCAtIDI3MykgKyAnJmRlZyc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcC1kYXktM19fd2VhdGhlci1kZXNjcmlwdGlvbicpLmlubmVySFRNTCA9IGRhdGEubGlzdFsxNl0ud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wLWRheS00X190ZW1wJykuaW5uZXJIVE1MID0gTWF0aC5yb3VuZChkYXRhLmxpc3RbMjRdLm1haW4udGVtcCAtIDI3MykgKyAnJmRlZyc7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcC1kYXktNF9fd2VhdGhlci1kZXNjcmlwdGlvbicpLmlubmVySFRNTCA9IGRhdGEubGlzdFsyNF0ud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuXHJcbiAgfSlcclxuICAuY2F0Y2goZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkZldGNoIEVycm9yID0gLi4uLi4uLi4uLi5cIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG4vLyBfX9CU0J7QkdCQ0JLQm9Cv0K5fX1xyXG5sZXQgbWFwcztcclxuXHJcbnltYXBzLnJlYWR5KGluaXQpO1xyXG5mdW5jdGlvbiBpbml0KCl7XHJcbiAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLCB7XHJcbiAgICBjZW50ZXI6IFs1MS41NDQyNDgsIDQ2LjA0OTUwNl0sXHJcbiAgICB6b29tOiAxMVxyXG4gIH0pO1xyXG4gIC8vIF9f0JTQntCR0JDQktCb0K/Qrl9fXHJcbiAgLy8gZ2V0Q29vcmRpbmF0KCkudGhlbigobGF0LCBsb24pID0+IG1hcHMuc2V0Q2VudGVyKFs1MS41NDQyNDgsIDQ2LjA0OTUwNl0pKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGEsIGIpIHtcclxuICByZXR1cm4gYStiO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==