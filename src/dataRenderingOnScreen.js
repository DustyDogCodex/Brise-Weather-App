function renderCurrentWeatherData(current){
    document.querySelector('[data-current-temp]').textContent = current.currentTemperature
    document.querySelector('[data-current-high]').textContent = current.high
    document.querySelector('[data-current-fl-high]').textContent = current.FLHigh
    document.querySelector('[data-current-wind]').textContent = current.windSpeed
    document.querySelector('[data-current-low]').textContent = current.low
    document.querySelector('[data-current-fl-low]').textContent = current.FLLow
    document.querySelector('[data-current-precipitation]').textContent = current.precipitation
}

function dataRenderingOnScreen({ current, daily, hourly }){
    renderCurrentWeatherData(current)
}

export { dataRenderingOnScreen }