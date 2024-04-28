// Function to fetch weather data
function fetchWeather(city) {
    const apiKey = 'e24882f6cfffd70c66edaec689ea3df8';
    const baseUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=';
    const apiUrl = `${baseUrl}${city}&appid=${apiKey}&units=imperial`; // Request data in imperial units

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
                temperature: data.list[0].main.temp,
                humidity: data.list[0].main.humidity,
                windSpeed: data.list[0].wind.speed
            };

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

            // Update UI with fetched weather data
            updateWeatherUI(currentWeather, forecast);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Function to update the HTML content with weather data
function updateWeatherUI(currentWeather, forecast) {
    // Update current weather section
    document.getElementById('city-header').textContent = `Location: ${currentWeather.cityName}`;
    document.getElementById('temperature').textContent = `Temperature: ${currentWeather.temperature} °F`; // Display temperature in Fahrenheit
    document.getElementById('wind-speed').textContent = `Wind Speed: ${currentWeather.windSpeed} mph`; // Display wind speed in miles per hour
    document.getElementById('humidity').textContent = `Humidity: ${currentWeather.humidity}%`;

    // Update 5-day forecast section
    const forecastSection = document.getElementById('forecast-section');
    forecastSection.innerHTML = ''; // Clear previous forecast data

    forecast.forEach(day => {
        const forecastCard = document.createElement('div');
        forecastCard.classList.add('card', 'text-bg-success', 'm-2');

        const dateHeader = document.createElement('h5');
        dateHeader.classList.add('card-header', 'fw-bold', 'text-warning');
        dateHeader.textContent = day.date.toDateString();

        const body = document.createElement('div');
        body.classList.add('card-body');
        body.innerHTML = `
            <p class="card-text">Temperature: ${day.temperature} °F</p> <!-- Display temperature in Fahrenheit -->
            <p class="card-text">Wind Speed: ${day.windSpeed} mph</p> <!-- Display wind speed in miles per hour -->
            <p class="card-text">Humidity: ${day.humidity}%</p>
        `;

        forecastCard.appendChild(dateHeader);
        forecastCard.appendChild(body);
        forecastSection.appendChild(forecastCard);
    });
}

// Function to create a new search result card
function createSearchResultCard(cityName) {
    const card = document.createElement('section');
    card.classList.add('card', 'bg-light', 'mb-3', 'mx-5');

    // Add event listener to trigger new search when clicked
    card.addEventListener('click', function() {
        fetchWeather(cityName);
    });

    // Change cursor style on hover
    card.style.cursor = 'pointer';

    const heading = document.createElement('h4');
    heading.classList.add('card-header', 'text-dark');
    heading.textContent = cityName;

    card.appendChild(heading);

    return card;
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission

    const cityInput = document.getElementById('city-input').value;
    fetchWeather(cityInput);

    // Create a new search result card and append it to the HTML
    const searchResultCard = createSearchResultCard(cityInput);
    const citySearchSidebar = document.querySelector('.city-search-sidebar');
    citySearchSidebar.appendChild(searchResultCard);
}

// Add event listener to the search form
document.getElementById('search-btn').addEventListener('click', handleFormSubmit);

