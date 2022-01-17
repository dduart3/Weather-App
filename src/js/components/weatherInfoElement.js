import HTMLElement from "../factories/HTMLElement";
import inputElement from "./inputElement";

const weatherInfoElement = ({
  iconSource,
  weatherDescription,
  temperature,
  city,
  date,
}) => {
  const input = inputElement();

  const weatherInfoElementContainer = HTMLElement({
    elementType: "div",
    elementClass: "weather-info",
  });

  const weatherInfoElementIconContainer = HTMLElement({
    elementType: "div",
    elementClass: "weather-info__weather-icon",
  });

  const weatherInfoElementIcon = HTMLElement({
    elementType: "img",
    elementClass: "weather-info__weather-img",
    elementSource: iconSource,
  });

  const weatherInfoElementWeatherDescription = HTMLElement({
    elementType: "div",
    elementClass: "weather-info__weather",
    elementContent: weatherDescription,
  });

  const weatherInfoElementTemperature = HTMLElement({
    elementType: "div",
    elementClass: "weather-info__temperature",
    elementContent: temperature,
  });

  const weatherInfoElementCity = HTMLElement({
    elementType: "div",
    elementClass: "weather-info__city",
    elementContent: city,
  });

  const weatherInfoElementDate = HTMLElement({
    elementType: "div",
    elementClass: "weather-info__date",
    elementContent: date,
  });

  weatherInfoElementIconContainer.appendChild(weatherInfoElementIcon);

  weatherInfoElementContainer.appendChild(weatherInfoElementIconContainer);
  weatherInfoElementContainer.appendChild(weatherInfoElementWeatherDescription);
  weatherInfoElementContainer.appendChild(weatherInfoElementTemperature);
  weatherInfoElementContainer.appendChild(weatherInfoElementCity);
  weatherInfoElementContainer.appendChild(weatherInfoElementDate);

  weatherInfoElementContainer.appendChild(input);

  return weatherInfoElementContainer;
};

export default weatherInfoElement;
