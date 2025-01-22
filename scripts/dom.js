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

displayWeatherData("New York");

async function displayWeatherData(location) {
    const data = await getWeatherData(location);

    if (!data || data.error) {
        console.error("Error retrieving weather data: ", data?.error || "Invalid data format");
        return;
    }

    weatherLocation.innerText = data.resolvedAddress;
    temperature.innerText = `${data.currentConditions.temp}°C`;
    condition.innerText = data.currentConditions.conditions;
    humidity.innerText = data.currentConditions.humidity;
    windSpeed.innerText = data.currentConditions.windspeed;
    cloudCover.innerText = data.currentConditions.cloudcover;
}