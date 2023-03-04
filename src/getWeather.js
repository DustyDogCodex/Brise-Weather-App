/* https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={3a12b0d3db019e926ae376649bb95046} */

export function getWeather (lat, lon, timezone) {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={3a12b0d3db019e926ae376649bb95046}')
        .then((response) => response.json())
        .then((data) => console.log(data))
}

export { getWeather }
export { getWeather }