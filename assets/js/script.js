// Function to fetch weather data
function fetchWeather(city) {
    const apiKey = 'e24882f6cfffd70c66edaec689ea3df8';
    const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=';
    const apiUrl = `${baseUrl}${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Extracting current weather data
            const currentWeather = {
                cityName: data.city.name,
                date: new Date(data.list[0].dt * 1000), // Convert UNIX timestamp to date
                temperature: data.list[0].main.temp,
                humidity: data.list[0].main.humidity,
                windSpeed: data.list[0].wind.speed
            };
            console.log('Current Weather:', currentWeather);

            // Extracting 5-day forecast data
            const forecast = [];
            for (let i = 0; i < data.list.length; i += 8) {
                forecast.push({
                    date: new Date(data.list[i].dt * 1000), // Convert UNIX timestamp to date
                    temperature: data.list[i].main.temp,
                    humidity: data.list[i].main.humidity,
                    windSpeed: data.list[i].wind.speed
                });
            }
            console.log('5-Day Forecast:', forecast);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Example usage
const cityInput = 'London'
fetchWeather(cityInput);
