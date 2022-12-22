import { weatherCodeGuide } from "./weatherCodeGuide"

function renderCurrentWeatherData(current){
    document.querySelector('[data-current-weather-icon]').classList.add('fa-solid', `${weatherCodeGuide(current.weatherIcon)}`, 'fa-6x')

    document.querySelector('[data-current-temp]').textContent = current.currentTemperature
    document.querySelector('[data-current-high]').textContent = current.high
    document.querySelector('[data-current-fl-high]').textContent = current.FLHigh
    document.querySelector('[data-current-wind]').textContent = current.windSpeed
    document.querySelector('[data-current-low]').textContent = current.low
    document.querySelector('[data-current-fl-low]').textContent = current.FLLow
    document.querySelector('[data-current-precipitation]').textContent = current.precipitation
}

/* JS for updating the daily-weather-info section */
const dailyWeatherArea = document.querySelector('[data-daily-area]')
const dailyTempTemplate = document.getElementById('daily-temp-template')
/* using DateTimeFormat method to convert the time returned by API in seconds into the correct day of the week. This time format will be decided based on the localtime format, which is why i've left the locales parameter undefined. This allows the days to be translated into the local language too. For example, if opened in France, it will display the days in French. */
const timeToDayConverter = new Intl.DateTimeFormat(undefined, { weekday: "long" })

function renderDailyWeatherData(daily){
    dailyWeatherArea.innerHTML = ''
    daily.forEach(day => {
        /* this copies the daily-temp-template and uses it for every day card that will be added to this section */
        const dailyCard = dailyTempTemplate.content.cloneNode(true)
        dailyCard.querySelector('[data-day-temp]').textContent = day.dayTemp
        dailyCard.querySelector('[data-date]').textContent = timeToDayConverter.format(day.timeValue)
        dailyCard.querySelector('[data-day-weather-icon]').classList.add('fa-solid', `${weatherCodeGuide(day.icon)}`, 'fa-3x')
        console.log(weatherCodeGuide(day.icon))
        dailyWeatherArea.append(dailyCard)
    })
}

/* JS for rendering hourly weather data */
const hourlyWeatherArea = document.querySelector('[data-hourly]')
const hourlyTempTemplate = document.getElementById('hourly-data-row-template')
function renderHourlyWeatherData(hourly){

}

function dataRenderingOnScreen({ current, daily, hourly }){
    renderCurrentWeatherData(current)
    renderDailyWeatherData(daily)
}

export { dataRenderingOnScreen }