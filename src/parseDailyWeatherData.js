function parseDailyWeatherData({ daily }){
    const dailyWeather = []
    daily.time.forEach((time,index) => {
        let dayWeather = {
            /* multiplied by 1000 since API returns time in seconds but JS uses ms for the conversion */
            timeValue: time * 1000,
            icon: daily.weathercode[index],
            dayTemp: daily.apparent_temperature_max[index]
        }
        dailyWeather.push(dayWeather)
    })
    return dailyWeather
}

export { parseDailyWeatherData }