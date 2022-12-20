import { getWeather } from './getWeather.js'
import { parseCurrentWeatherData } from './parseCurrentWeatherData.js'
import { parseDailyWeatherData } from './parseDailyWeatherData.js'
import { parseHourlyWeatherData } from './parseHourlyWeatherData.js'

/* OpenWeatherAPI info */
/* https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={3a12b0d3db019e926ae376649bb95046} */

/* Second API OpenMeteo */
/* https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=America%2FNew_York */

/* Intl.DateTimeFormat() to automatically select current time zone */
let time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone

getWeather(51.5085,-0.1257,time_zone)
    .then( data => {
        return console.log({
            current: (parseCurrentWeatherData(data)),
            daily: (parseDailyWeatherData(data)),
            hourly: (parseHourlyWeatherData(data))
        })
    })
