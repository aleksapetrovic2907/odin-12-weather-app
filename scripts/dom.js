const searchInput = document.querySelector(".weather-search-bar-wrapper input");
const weatherLocation = document.querySelector(".weather-location");
const temperature = document.querySelector(".weather-temperature");
const condition = document.querySelector(".weather-condition");
const humidity = document.querySelector(".weather-humidity > div:last-child");
const windSpeed = document.querySelector(".weather-windspeed > div:last-child");
const cloudCover = document.querySelector(".weather-cloudcover > div:last-child");

searchInput.addEventListener("keydown", (e) => {
    if (e.key !== 'Enter') return;
    displayWeatherData(searchInput.value);
});

async function displayWeatherData(location) {
    const data = await getWeatherData(location);

    if (!data || data.error) {
        // TODO: Find a way to handle this
        return;
    }

    weatherLocation.innerText = data.resolvedAddress;
    temperature.innerText = data.currentConditions.temp; // TODO: Convert to celsius
    condition.innerText = data.currentConditions.conditions;
    humidity.innerText = data.currentConditions.humidity;
    windSpeed.innerText = data.currentConditions.windspeed;
    cloudCover.innerText = data.currentConditions.cloudcover;
}