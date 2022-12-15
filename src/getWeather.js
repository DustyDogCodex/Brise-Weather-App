async function getWeather(lat, long, timezone){
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}1&hourly=temperature_2m,apparent_temperature,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_sum&current_weather=true&timeformat=unixtime&timezone=${timezone}`)

    const getWeatherData = await response.json()
    console.log(getWeatherData)
}

export { getWeather }