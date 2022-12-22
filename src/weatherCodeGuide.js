/* Converts given weathercode to the corresponding image. Based on the WMO Weather interpretation codes (WW) provided by Open MEteo here: https://open-meteo.com/en/docs */

function weatherCodeGuide(weatherCode){
    if (weatherCode == 0){
        return 'fa-sun'
    } else if (weatherCode >= 1 && weatherCode <=3){
        return 'fa-cloud-sun'
    } else if (weatherCode == 45 || weatherCode == 48){
        return 'fa-smog'
    } else if (weatherCode >= 51 && weatherCode <= 55){
        return 'fa-cloud-rain'
    } else if (weatherCode >= 61 && weatherCode <= 67){
        return 'fa-cloud-showers-heavy'
    } else if (weatherCode >= 71 && weatherCode <= 77){
        return 'fa-snowflake'
    } else if (weatherCode >= 80 && weatherCode <= 82){
        return 'fa-cloud-sun-rain'
    } else if (weatherCode == 85 || weatherCode == 86){
        return 'fa-snowflake'
    } else if (weatherCode >= 95){
        return 'fa-cloud-bolt'
    }
}

export { weatherCodeGuide }