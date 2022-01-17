const axios = require("axios").default;
import moment from "moment";
const weatherInfo = async (city) => {
  const currentWeatherData = await getCurrentWeatherData(city);

  const cityName = getCityNameFromResponse(currentWeatherData);

  const cityCoordinates = getCityCoordinatesFromResponse(currentWeatherData);

  const weatherForecastData = await getWeatherForecastData(cityCoordinates);

  return {
    todayWeather: extractTodayWeatherDataFromResponse(
      weatherForecastData,
      cityName
    ),
    weekWeatherForecast:
      extractWeatherForecastDataFromResponse(weatherForecastData),
  };
};

const getCurrentWeatherData = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_KEY}`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

const getWeatherForecastData = async ({ latitude, longitude }) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly,alerts&appid=${process.env.API_KEY}`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
};

const getCityCoordinatesFromResponse = (response) => {
  return {
    latitude: response.data.coord.lat,
    longitude: response.data.coord.lon,
  };
};

const getCityNameFromResponse = (response) => {
  return response.data.name;
};

const extractTodayWeatherDataFromResponse = (response, name) => {
  const date = moment(response.data.current.dt + response.data.timezone_offset);
  const todayWeatherDataObject = {
    date: moment.utc(date * 1000).format("LLLL"),
    city: name,
    feelsLike: response.data.current.feels_like,
    humidity: response.data.current.humidity,
    temperature: Math.round(response.data.current.temp),
    windSpeed: response.data.current.wind_speed,
    weatherDescription: response.data.current.weather[0].description,
    weatherId: response.data.current.weather[0].id,
  };

  return todayWeatherDataObject;
};

const extractWeatherForecastDataFromResponse = (response) => {
  const weekForeCastDataObject = {};

  response.data.daily.map((day, index) => {
    if (index > 0) {
      weekForeCastDataObject[`day${index}`] = {
        date: moment(day.dt * 1000).format("LLLL"),
        temperature: Math.round((day.temp.max + day.temp.min) / 2),
        weatherDescription: day.weather[0].description,
        weatherId: day.weather[0].id,
      };
    }
  });

  return weekForeCastDataObject;
};

export default weatherInfo;
