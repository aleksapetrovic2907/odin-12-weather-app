const WEATHER_API_KEY = "U2LDXDJPSB7J8TLPXMM2C37HW";

async function getWeatherData(location) {
  try {
    const WEATHER_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.trim()}?unitGroup=metric&key=${WEATHER_API_KEY}&contentType=json`;
    const response = await fetch(WEATHER_URL, { mode: "cors" });

    if (!response.ok) {
      throw new Error(
        `HTTP Error: ${response.status} - ${response.statusText}`
      );
    }

    return await response.json();
  } catch (err) {
    console.error("Error fetching weather data: " + err.message);
    return { error: err.message };
  }
}
