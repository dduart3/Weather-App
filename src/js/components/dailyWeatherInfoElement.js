import HTMLElement from "../factories/HTMLElement";

const dailyWeatherInfoElement = ({
  day,
  temperature,
  weather,
  imgSource,
  id,
}) => {
  const dailyWeatherInfoElementContainer = HTMLElement({
    elementType: "div",
    elementClass: "daily-weather-info",
    elementId: id,
  });

  const dailyWeatherInfoElementDay = HTMLElement({
    elementType: "div",
    elementClass: "daily-weather-info__day",
    elementContent: day,
  });

  const dailyWeatherInfoElementTemperature = HTMLElement({
    elementType: "div",
    elementClass: "daily-weather-info__temperature",
    elementContent: temperature,
  });

  const dailyWeatherInfoElementWeather = HTMLElement({
    elementType: "div",
    elementClass: "daily-weather-info__weather",
    elementContent: weather,
  });

  const dailyWeatherInfoElementIconContainer = HTMLElement({
    elementType: "div",
    elementClass: "daily-weather-info__icon",
  });

  const dailyWeatherInfoElementIcon = HTMLElement({
    elementType: "img",
    elementClass: "daily-weather-info__img",
    elementSource: imgSource,
  });

  dailyWeatherInfoElementContainer.appendChild(dailyWeatherInfoElementDay);
  dailyWeatherInfoElementContainer.appendChild(
    dailyWeatherInfoElementTemperature
  );
  dailyWeatherInfoElementContainer.appendChild(dailyWeatherInfoElementWeather);

  dailyWeatherInfoElementIconContainer.appendChild(dailyWeatherInfoElementIcon);

  dailyWeatherInfoElementContainer.appendChild(
    dailyWeatherInfoElementIconContainer
  );

  return dailyWeatherInfoElementContainer;
};
export default dailyWeatherInfoElement;
