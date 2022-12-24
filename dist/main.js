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

/***/ "./src/dataRenderingOnScreen.js":
/*!**************************************!*\
  !*** ./src/dataRenderingOnScreen.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataRenderingOnScreen\": () => (/* binding */ dataRenderingOnScreen)\n/* harmony export */ });\n/* harmony import */ var _weatherCodeGuide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherCodeGuide */ \"./src/weatherCodeGuide.js\");\n\n\nfunction renderCurrentWeatherData(current){\n    document.querySelector('[data-current-weather-icon]').classList.add('fa-solid', `${(0,_weatherCodeGuide__WEBPACK_IMPORTED_MODULE_0__.weatherCodeGuide)(current.weatherIcon)}`, 'fa-6x')\n\n    document.querySelector('[data-current-temp]').textContent = current.currentTemperature\n    document.querySelector('[data-current-high]').textContent = current.high\n    document.querySelector('[data-current-fl-high]').textContent = current.FLHigh\n    document.querySelector('[data-current-wind]').textContent = current.windSpeed\n    document.querySelector('[data-current-low]').textContent = current.low\n    document.querySelector('[data-current-fl-low]').textContent = current.FLLow\n    document.querySelector('[data-current-precipitation]').textContent = current.precipitation\n}\n\n/* JS for updating the daily-weather-info section */\nconst dailyWeatherArea = document.querySelector('[data-daily-area]')\nconst dailyTempTemplate = document.getElementById('daily-temp-template')\n/* using DateTimeFormat method to convert the time returned by API in seconds into the correct day of the week. This time format will be decided based on the localtime format, which is why i've left the locales parameter undefined. This allows the days to be translated into the local language too. For example, if opened in France, it will display the days in French. */\nconst timeToDayConverter = new Intl.DateTimeFormat(undefined, { weekday: \"long\" })\n\nfunction renderDailyWeatherData(daily){\n    dailyWeatherArea.innerHTML = ''\n    daily.forEach(day => {\n        /* this copies the daily-temp-template and uses it for every day card that will be added to this section */\n        const dailyCard = dailyTempTemplate.content.cloneNode(true)\n        dailyCard.querySelector('[data-day-temp]').textContent = day.dayTemp\n        dailyCard.querySelector('[data-date]').textContent = timeToDayConverter.format(day.timeValue)\n        dailyCard.querySelector('[data-day-weather-icon]').classList.add('fa-solid', `${(0,_weatherCodeGuide__WEBPACK_IMPORTED_MODULE_0__.weatherCodeGuide)(day.icon)}`, 'fa-3x')\n        dailyWeatherArea.append(dailyCard)\n    })\n}\n\n/* JS for rendering hourly weather data */\n/* this is basically the same code as the daily section, except the object containing the data will be different */\nconst hourlyWeatherArea = document.querySelector('[data-hourly]')\nconst hourlyTempTemplate = document.getElementById('hourly-data-row-template')\nconst timeToHourConverter = new Intl.DateTimeFormat(undefined, { hour: \"numeric\" })\nfunction renderHourlyWeatherData(hourly){\n    hourlyWeatherArea.innerHTML = ''\n    hourly.forEach(hour => {\n        const hourlyCard = hourlyTempTemplate.content.cloneNode(true)\n        hourlyCard.querySelector('[data-day]').textContent = timeToDayConverter.format(hour.timeValue)\n        hourlyCard.querySelector('[data-day-time]').textContent = timeToHourConverter.format(hour.timeValue)\n        hourlyCard.querySelector('[data-hour-weather-icon]').classList.add('fa-solid', `${(0,_weatherCodeGuide__WEBPACK_IMPORTED_MODULE_0__.weatherCodeGuide)(hour.icon)}`, 'fa-3x')\n        hourlyCard.querySelector('[data-day-temp]').textContent = hour.temp\n        hourlyCard.querySelector('[data-fl-temp]').textContent = hour.FLTemp\n        hourlyCard.querySelector('[data-wind]').textContent = hour.windSpeed\n        hourlyCard.querySelector('[data-precipitation]').textContent = hour.precipitation\n        hourlyWeatherArea.append(hourlyCard)\n    })\n}\n\nfunction dataRenderingOnScreen({ current, daily, hourly }){\n    renderCurrentWeatherData(current)\n    renderDailyWeatherData(daily)\n    renderHourlyWeatherData(hourly)\n}\n\n\n\n//# sourceURL=webpack://brise-weather-app-/./src/dataRenderingOnScreen.js?");

/***/ }),

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather)\n/* harmony export */ });\n\n/* https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=America%2FNew_York */\n\nasync function getWeather (lat, long, timezone) {\n    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=${timezone}`)\n    const getWeatherData = await response.json() \n    return getWeatherData\n}\n\n\n\n\n//# sourceURL=webpack://brise-weather-app-/./src/getWeather.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getWeather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather.js */ \"./src/getWeather.js\");\n/* harmony import */ var _parseCurrentWeatherData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parseCurrentWeatherData.js */ \"./src/parseCurrentWeatherData.js\");\n/* harmony import */ var _parseDailyWeatherData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parseDailyWeatherData.js */ \"./src/parseDailyWeatherData.js\");\n/* harmony import */ var _parseHourlyWeatherData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parseHourlyWeatherData.js */ \"./src/parseHourlyWeatherData.js\");\n/* harmony import */ var _dataRenderingOnScreen_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataRenderingOnScreen.js */ \"./src/dataRenderingOnScreen.js\");\n\n\n\n\n\n\n/* Intl.DateTimeFormat() to automatically select current time zone */\nlet time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone\n\n/* using nvaigator.geolocation for getting users current location */\nnavigator.geolocation.getCurrentPosition(currentLocationSuccess, currentLocationFailed)\n\nfunction currentLocationSuccess({ coords }){\n    ;(0,_getWeather_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)(coords.latitude,coords.longitude,time_zone)\n        .then( data => {\n            return {\n                current: ((0,_parseCurrentWeatherData_js__WEBPACK_IMPORTED_MODULE_1__.parseCurrentWeatherData)(data)),\n                daily: ((0,_parseDailyWeatherData_js__WEBPACK_IMPORTED_MODULE_2__.parseDailyWeatherData)(data)),\n                hourly: ((0,_parseHourlyWeatherData_js__WEBPACK_IMPORTED_MODULE_3__.parseHourlyWeatherData)(data))\n            }\n        })\n        .then( data => {\n            (0,_dataRenderingOnScreen_js__WEBPACK_IMPORTED_MODULE_4__.dataRenderingOnScreen)(data)\n        })\n        .catch(e => {\n            console.log(e)\n            alert(\"Oh no! Looks like our API has been snowed in! Please try again or check console for error information!\")\n        })\n}\n\nfunction currentLocationFailed(){\n    alert(\"Looks like a storm is interuppting communication with you! Please share your location so we can share the current weather data at your location!\")\n}\n\n\n//# sourceURL=webpack://brise-weather-app-/./src/index.js?");

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

/***/ }),

/***/ "./src/weatherCodeGuide.js":
/*!*********************************!*\
  !*** ./src/weatherCodeGuide.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"weatherCodeGuide\": () => (/* binding */ weatherCodeGuide)\n/* harmony export */ });\n/* Converts given weathercode to the corresponding image. Based on the WMO Weather interpretation codes (WW) provided by Open MEteo here: https://open-meteo.com/en/docs */\n\nfunction weatherCodeGuide(weatherCode){\n    if (weatherCode == 0){\n        return 'fa-sun'\n    } else if (weatherCode >= 1 && weatherCode <=3){\n        return 'fa-cloud-sun'\n    } else if (weatherCode == 45 || weatherCode == 48){\n        return 'fa-smog'\n    } else if (weatherCode >= 51 && weatherCode <= 55){\n        return 'fa-cloud-rain'\n    } else if (weatherCode >= 61 && weatherCode <= 67){\n        return 'fa-cloud-showers-heavy'\n    } else if (weatherCode >= 71 && weatherCode <= 77){\n        return 'fa-snowflake'\n    } else if (weatherCode >= 80 && weatherCode <= 82){\n        return 'fa-cloud-sun-rain'\n    } else if (weatherCode == 85 || weatherCode == 86){\n        return 'fa-snowflake'\n    } else if (weatherCode >= 95){\n        return 'fa-cloud-bolt'\n    }\n}\n\n\n\n//# sourceURL=webpack://brise-weather-app-/./src/weatherCodeGuide.js?");

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