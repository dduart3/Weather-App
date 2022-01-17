import clearSkyDay from "../../../static/img/weather-icons/animated/day.svg";
import clearSkyNight from "../../../static/img/weather-icons/animated/night.svg";
import cloudsDay from "../../../static/img/weather-icons/animated/cloudy-day-3.svg";
import cloudsNight from "../../../static/img/weather-icons/animated/cloudy-night-3.svg";
import mistDay from "../../../static/img/weather-icons/animated/cloudy.svg";
import mistNight from "../../../static/img/weather-icons/animated/cloudy.svg";
import rainDay from "../../../static/img/weather-icons/animated/rainy-1.svg";
import rainNight from "../../../static/img/weather-icons/animated/rainy-6.svg";
import snowDay from "../../../static/img/weather-icons/animated/snowy-3.svg";
import snowNight from "../../../static/img/weather-icons/animated/snowy-6.svg";
import thunderStormDay from "../../../static/img/weather-icons/animated/thunder.svg";
import thunderStormNight from "../../../static/img/weather-icons/animated/thunder.svg";
import isDayTime from "../util/isDayTime";
import getWeatherFromCode from "../util/weatherCodes";

const getWeatherIcon = ({ weatherCode, date }) => {
  const weather = getWeatherFromCode(weatherCode);
  const time = isDayTime(date) ? "day" : "night";
  return iconsObject[weather][time];
};

const iconsObject = {
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

export default getWeatherIcon;
