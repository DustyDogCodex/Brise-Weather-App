/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather)\n/* harmony export */ });\n\n/* https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=America%2FNew_York */\n\nasync function getWeather (lat, long, timezone) {\n    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=${timezone}`)\n    const getWeatherData = await response.json() \n    console.log(getWeatherData)\n    return getWeatherData\n}\n\n\n\n\n//# sourceURL=webpack://brise-weather-app-/./src/getWeather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather.js */ \"./src/getWeather.js\");\n/* harmony import */ var _parseCurrentWeatherData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseCurrentWeatherData.js */ \"./src/parseCurrentWeatherData.js\");\n/* harmony import */ var _parseDailyWeatherData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parseDailyWeatherData.js */ \"./src/parseDailyWeatherData.js\");\n/* harmony import */ var _parseHourlyWeatherData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parseHourlyWeatherData.js */ \"./src/parseHourlyWeatherData.js\");\n\n\n\n\n\n/* OpenWeatherAPI info */\n/* https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={3a12b0d3db019e926ae376649bb95046} */\n\n/* Second API OpenMeteo */\n/* https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=America%2FNew_York */\n\n/* Intl.DateTimeFormat() to automatically select current time zone */\nlet time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone\n\n;(0,_getWeather_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)(51.5085,-0.1257,time_zone)\n    .then( data => {\n        return console.log({\n            current: ((0,_parseCurrentWeatherData_js__WEBPACK_IMPORTED_MODULE_1__.parseCurrentWeatherData)(data)),\n            daily: ((0,_parseDailyWeatherData_js__WEBPACK_IMPORTED_MODULE_2__.parseDailyWeatherData)(data)),\n            hourly: ((0,_parseHourlyWeatherData_js__WEBPACK_IMPORTED_MODULE_3__.parseHourlyWeatherData)(data))\n        })\n    })\n\n\n//# sourceURL=webpack://brise-weather-app-/./src/index.js?");

/***/ }),

/***/ "./src/parseCurrentWeatherData.js":
/*!****************************************!*\
  !*** ./src/parseCurrentWeatherData.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parseCurrentWeatherData\": () => (/* binding */ parseCurrentWeatherData)\n/* harmony export */ });\n/* fucntion for parsing and separating current weather data for the current day */\nfunction parseCurrentWeatherData( {current_weather, daily} ){\n    const currentTemperature = current_weather.temperature\n    const windSpeed = current_weather.windspeed\n    const weatherIcon = current_weather.weathercode\n    const currentHigh = daily.temperature_2m_max[0]\n    const currentLow = daily.temperature_2m_min[0]\n    const feelsLikeHigh = daily.apparent_temperature_max[0]\n    const feelsLikeLow = daily.apparent_temperature_min[0]\n    const rainfall = daily.precipitation_sum[0]\n\n    return {\n        currentTemperature,\n        high: currentHigh,\n        low: currentLow,\n        FLHigh: feelsLikeHigh,\n        FLLow: feelsLikeLow,\n        windSpeed,\n        precipitation: rainfall,\n        weatherIcon\n    }\n}\n\n\n\n//# sourceURL=webpack://brise-weather-app-/./src/parseCurrentWeatherData.js?");

/***/ }),

/***/ "./src/parseDailyWeatherData.js":
/*!**************************************!*\
  !*** ./src/parseDailyWeatherData.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parseDailyWeatherData\": () => (/* binding */ parseDailyWeatherData)\n/* harmony export */ });\nfunction parseDailyWeatherData({ daily }){\n    const dailyWeather = []\n    daily.time.forEach((time,index) => {\n        let dayWeather = {\n            /* multiplied by 1000 since API returns time in seconds but JS uses ms for the conversion */\n            timeValue: time * 1000,\n            icon: daily.weathercode[index],\n            dayTemp: daily.apparent_temperature_max[index]\n        }\n        dailyWeather.push(dayWeather)\n    })\n    return dailyWeather\n}\n\n\n\n//# sourceURL=webpack://brise-weather-app-/./src/parseDailyWeatherData.js?");

/***/ }),

/***/ "./src/parseHourlyWeatherData.js":
/*!***************************************!*\
  !*** ./src/parseHourlyWeatherData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parseHourlyWeatherData\": () => (/* binding */ parseHourlyWeatherData)\n/* harmony export */ });\n/* added current_weather as a parameter so we get hourly data past the time we are looking at and not previous data */\nfunction parseHourlyWeatherData({ hourly, current_weather }){\n    const hourlyData = []\n    hourly.time.forEach((time,index) => {\n        const currentHoursData = {\n            timeValue: time * 1000,\n            icon: hourly.weathercode[index],\n            temp: hourly.temperature_2m[index],\n            FLTemp: hourly.apparent_temperature[index],\n            windSpeed: hourly.windspeed_10m[index],\n            precipitation: hourly.precipitation[index]\n        }\n        hourlyData.push(currentHoursData)\n    })\n    /* filters out hourly data that is before the current time that we are checking the weather data. Only returns forecasts for the future and not the past. Forecasting the past is an oxymoron. */\n    return hourlyData.filter(({ timeValue }) => timeValue >= current_weather.time * 1000)\n}\n\n\n\n//# sourceURL=webpack://brise-weather-app-/./src/parseHourlyWeatherData.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;