const searchInput = document.querySelector('[data-search]')
const searchBox = new google.maps.places.SearchBox(searchInput)

/* addListener is a method exclusive to the Google Places API. These methods/variables are from the Places API documentation */
searchBox.addListener('places_changed', () => {
    const place = searchBox.getPlaces()[0]
    if (place == null) return
    /* latitude and longitude values, since thats what OpenWeather API needs to search a city */
    const latitude = place.geometry.location.lat()
    const longitude = place.geometry.location.lng()

    /* calling the API using fetch */
    fetch('/weather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            latitude: latitude,
            longitude: longitude
        })
    }).then(res => res.json()).then(data => {
        setWeatherData(data, place.formatted_address)
    })
})