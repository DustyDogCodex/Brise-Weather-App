/* OpenWeatherAPI info */
/* https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={3a12b0d3db019e926ae376649bb95046} */

/* Second API OpenMeteo */
/* https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=America%2FNew_York */

function parseCurrentWeather(data)

function getWeather (lat, long, timezone) {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}1&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=${timezone}`)
        .then((response) => response.json())
        .then((data) => console.log(data))
}

/* Intl.DateTimeFormat() to automatically select current time zone */
getWeather(51.5085,-0.1257, Intl.DateTimeFormat().resolvedOptions().timeZone)
    .then( res => {
        console.log(res.data)
    })