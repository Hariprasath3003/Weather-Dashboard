# Weather Dashboard Web Application
This weather dashboard webapp was built so that a user of this application could quickly get results for current weather data, as well as a 5-day forecast for weather conditions in their area of choice. This one-page web-app site was built using HTML, CSS, and Javascript technologies. This little project is aimed at providing users with a fun tool that they can use on the web and play around with to test the functionality of a weather forecast API.

# Project Structure
- assets/:
    - ./css/ (folder containing CSS file)
        - style.css (file of custom CSS styles for all of the webpages)
    - ./images/ (folder containing all of the images used in the website)
    - ./js/ (folder containing all the Javascript files)
        - script.js (javascript file for web-app functionality and API results)
- index.html (main page of website)
- LICENSE (license for using the application, public use MIT license)
- README.md (Information file, providing information about the project)

# Tools and Technologies Used in This Project
- HTML, CSS, and Javascript coding languages
- VS Code platform used to code and build pages
- Bootstrap CSS Framework - Utilized for CSS styling of the website (getbootstrap.com)
- Web API's:
    -  OpenWeather API (https://openweathermap.org/)
- Github (website hosted and deployed on Github servers)

# How to Use
Upon accessing the website, user will find a sidebar on the lefthand side of the webpage, where there is a form input. They can then input a sample city and click the "Search" button under the form input. This will then trigger the page's JavaScript so that the OpenWeather API is called and weather data (correlating to the city name that the user inputted into the search) will be pulled and outputted unto the front-end of the webpage.

The data results, and consequently appended HTML elements, will be outputted in multiple places: 1. in a green card section found in the sidebar of the page, and 2. in a series of newly created card rows that display weather data as a forecast for the next 5 days. Whatever city is searched will also be saved locally in the sidebar (under the current weather data for that city).

Multiple searches can be conducted in each browsing session to see results from different cities. Additionally, if the user clicks any one of those city names that are saved from a previous search, the page will then re-trigger the search and display that current city's weather conditions and 5-day forecast once again.

If the user decides to refresh the page, all of the data will disappear on the front-end however.

# Contributors
- Anthony Purificato


# Credits
- Rutgers Coding Bootcamp provided resources and support for this project
- OpenAI ChatGPT utilized for general coding assistance and aid upon encountering problems with JavaScript code


# License
Website is available for public use, hosted on Github servers, utilizing an MIT License - see the LICENSE file for details.