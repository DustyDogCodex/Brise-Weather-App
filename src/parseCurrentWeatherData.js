/* fucntion for parsing and separating current weather data for the current day */
function parseCurrentWeatherData( {current_weather, daily} ){
    const currentTemperature = current_weather.temperature
    const windSpeed = current_weather.windspeed
    const weatherIcon = current_weather.weathercode
    const currentHigh = daily.temperature_2m_max[0]
    const currentLow = daily.temperature_2m_min[0]
    const feelsLikeHigh = daily.apparent_temperature_max[0]
    const feelsLikeLow = daily.apparent_temperature_min[0]
    const rainfall = daily.precipitation_sum[0]

    return {
        currentTemperature,
        high: currentHigh,
        low: currentLow,
        FLHigh: feelsLikeHigh,
        FLLow: feelsLikeLow,
        windSpeed,
        precipitation: rainfall,
        weatherIcon
    }
}

export { parseCurrentWeatherData }