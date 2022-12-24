# Brise-Weather-App-

LIVE DEMO

This is a simple weather app built using vanilla JavaScript. This app fetches weather forecast data from the OpenMeteo API and displays it on the screen. The app asks for the users current location to fetch weather data for that city from the OpenMeteo API database. The weather data is then split up and displayed in 3 different sections.The top section displays the current weather at the users location. After that, the second section contains 7 cards displaying the weather forecast for the week ahead. The last section contains hourly weather data for the week ahead as well. 

Through this project, I learned:

1. How to work with and fetch data from an API.
2. Working with returned JSON object from an API and manipulating it to retrieve meaningful data.
3. Using JavaScript to display API data in a creative way on screen.
4. Using JavaScript templates and cloneNode() to recreate useful HTML modules for rednering available data.
4. Using DateFormatTime and GeolocationCoordinates to get users current location and time/date settings and display them in a region appropriate format.

How to use:
To check out the app, please use the live demo link above.
To use this app for yourself, you can clone the repository and its associated dependencies and then run it using webpack. The code is written in HTML/CSS/JavaScript.

Future extensions/features to be added:

1. Working on hosting this on a cloud server, possible AWS.
2. Adding a GeoCoder API that lets users check the weather conditions of any city in the world by entering the city name in an input field.
3. Adding historical weather data as a graph to showcase how the weather has changed over a set time period.
