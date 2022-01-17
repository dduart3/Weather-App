import clearSkyDay from "../../../static/img/weather-backgrounds/clear-sky-day.jpg";
import clearSkyNight from "../../../static/img/weather-backgrounds/clear-sky-night.jpg";
import cloudsDay from "../../../static/img/weather-backgrounds/clouds-day.jpg";
import cloudsNight from "../../../static/img/weather-backgrounds/clouds-night.jpg";
import mistDay from "../../../static/img/weather-backgrounds/mist-day.jpg";
import mistNight from "../../../static/img/weather-backgrounds/mist-night.jpg";
import rainDay from "../../../static/img/weather-backgrounds/rain-day.jpg";
import rainNight from "../../../static/img/weather-backgrounds/rain-night.jpg";
import snowDay from "../../../static/img/weather-backgrounds/snow-day.jpg";
import snowNight from "../../../static/img/weather-backgrounds/snow-night.jpg";
import thunderStormDay from "../../../static/img/weather-backgrounds/thunderstorm-day.jpg";
import thunderStormNight from "../../../static/img/weather-backgrounds/thunderstorm-night.jpg";
import isDayTime from "../util/isDayTime";
import getWeatherFromCode from "../util/weatherCodes";

const getWeatherBackground = ({ weatherCode, date }) => {
  const weather = getWeatherFromCode(weatherCode);
  const time = isDayTime(date) ? "day" : "night";

  return backgroundsObject[weather][time];
};

const backgroundsObject = {
  clear: {
    day: clearSkyDay,
    night: clearSkyNight,
  },
  clouds: {
    day: cloudsDay,
    night: cloudsNight,
  },
  atmosphere: {
    day: mistDay,
    night: mistNight,
  },
  rain: {
    day: rainDay,
    night: rainNight,
  },
  snow: {
    day: snowDay,
    night: snowNight,
  },
  thunderStorm: {
    day: thunderStormDay,
    night: thunderStormNight,
  },
};

export default getWeatherBackground;
