import { getWeather } from './getWeather.js'
import { parseCurrentWeatherData } from './parseCurrentWeatherData.js'
import { parseDailyWeatherData } from './parseDailyWeatherData.js'
import { parseHourlyWeatherData } from './parseHourlyWeatherData.js'
import { dataRenderingOnScreen } from './dataRenderingOnScreen.js'

/* Intl.DateTimeFormat() to automatically select current time zone */
let time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone

/* using nvaigator.geolocation for getting users current location */
navigator.geolocation.getCurrentPosition(currentLocationSuccess, currentLocationFailed)

function currentLocationSuccess({ coords }){
    getWeather(coords.latitude,coords.longitude,time_zone)
        .then( data => {
            return {
                current: (parseCurrentWeatherData(data)),
                daily: (parseDailyWeatherData(data)),
                hourly: (parseHourlyWeatherData(data))
            }
        })
        .then( data => {
            dataRenderingOnScreen(data)
        })
        .catch(e => {
            console.log(e)
            alert("Oh no! Looks like our API has been snowed in! Please try again or check console for error information!")
        })
}

function currentLocationFailed(){
    alert("Looks like a storm is interuppting communication with you! Please share your location so we can share the current weather data at your location!")
}
