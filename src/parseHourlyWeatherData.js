/* added current_weather as a parameter so we get hourly data past the time we are looking at and not previous data */
function parseHourlyWeatherData({ hourly, current_weather }){
    const hourlyData = []
    hourly.time.forEach((time,index) => {
        const currentHoursData = {
            timeValue: time * 1000,
            icon: hourly.weathercode[index],
            temp: hourly.temperature_2m[index],
            FLTemp: hourly.apparent_temperature[index],
            windSpeed: hourly.windspeed_10m[index],
            precipitation: hourly.precipitation[index]
        }
        hourlyData.push(currentHoursData)
    })
    /* filters out hourly data that is before the current time that we are checking the weather data. Only returns forecasts for the future and not the past. Forecasting the past is an oxymoron. */
    return hourlyData.filter(({ timeValue }) => timeValue >= current_weather.time * 1000)
}

export { parseHourlyWeatherData }