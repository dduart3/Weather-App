import HTMLElement from "../factories/HTMLElement";
import dailyWeatherInfoElement from "../components/dailyWeatherInfoElement";
import weatherInfoElement from "../components/weatherInfoElement";
import getWeatherIcon from "../util/weatherIcons";
import PubSub from "pubsub-js";
import moment from "moment";
import animations from "../util/animations";

const FETCHED_INFO = "FETCHED_INFO";
const FIRST_RENDER = "FIRST_RENDER";

const firstRender = (() => {
  let _value = false;
  return {
    set: (msg, newValue) => (_value = newValue),
    get: () => _value,
  };
})();

const renderer = (msg, { todayWeather, weekWeatherForecast }) => {
  const container = document.querySelector("#container");

  const renderWeekForecastElement = () => {
    const fragment = new DocumentFragment();
    const weekWeatherForecastElement = HTMLElement({
      elementType: "div",
      elementClass: "week-weather-info",
    });

    for (const dayInfo in weekWeatherForecast) {
      weekWeatherForecastElement.appendChild(
        dailyWeatherInfoElement({
          id: dayInfo,
          day: moment(weekWeatherForecast[dayInfo].date).format("dddd"),
          temperature: `${weekWeatherForecast[dayInfo].temperature}°C`,
          weather: weekWeatherForecast[dayInfo].weatherDescription,
          imgSource: getWeatherIcon({
            date: weekWeatherForecast[dayInfo].date,
            weatherCode: weekWeatherForecast[dayInfo].weatherId,
          }),
        })
      );
    }
    fragment.appendChild(weekWeatherForecastElement);

    container.appendChild(fragment);
  };

  const renderWeatherInfoElement = () => {
    const fragment = new DocumentFragment();
    fragment.appendChild(
      weatherInfoElement({
        iconSource: getWeatherIcon({
          weatherCode: todayWeather.weatherId,
          date: todayWeather.date,
        }),
        weatherDescription: todayWeather.weatherDescription,
        temperature: `${todayWeather.temperature}°C`,
        city: todayWeather.city,
        date: todayWeather.date,
      })
    );

    container.appendChild(fragment);
  };

  const reRenderWeekForecast = () => {
    const elements = document.querySelectorAll(".daily-weather-info");

    for (const dayInfo in weekWeatherForecast) {
      for (const element of elements) {
        if (element.id == dayInfo) {
          const day = element.childNodes[0];
          const temperature = element.childNodes[1];
          const weather = element.childNodes[2];
          const icon = element.childNodes[3].childNodes[0];

          day.textContent = moment(weekWeatherForecast[dayInfo].date).format(
            "dddd"
          );
          temperature.textContent = `${weekWeatherForecast[dayInfo].temperature}°C`;
          weather.textContent = weekWeatherForecast[dayInfo].weatherDescription;
          icon.setAttribute(
            "src",
            getWeatherIcon({
              date: weekWeatherForecast[dayInfo].date,
              weatherCode: weekWeatherForecast[dayInfo].weatherId,
            })
          );
        }
      }
    }
  };

  const reRenderWeatherInfo = () => {
    const img = document.querySelector(".weather-info__weather-img");
    const weather = document.querySelector(".weather-info__weather");
    const temperature = document.querySelector(".weather-info__temperature");
    const city = document.querySelector(".weather-info__city");
    const date = document.querySelector(".weather-info__date");

    img.setAttribute(
      "src",
      getWeatherIcon({
        weatherCode: todayWeather.weatherId,
        date: todayWeather.date,
      })
    );

    weather.textContent = todayWeather.weatherDescription;
    temperature.textContent = `${todayWeather.temperature}°C`;
    city.textContent = todayWeather.city;
    date.textContent = todayWeather.date;
  };

  if (!firstRender.get()) {
    renderWeekForecastElement();

    renderWeatherInfoElement();

    animations.initialAnimationSequence({
      weatherCode: todayWeather.weatherId,
      date: todayWeather.date,
    });

    PubSub.publish(FIRST_RENDER, true);
  } else {
    animations.postAnimationSequence(
      {
        weatherCode: todayWeather.weatherId,
        date: todayWeather.date,
      },
      reRenderWeatherInfo,
      reRenderWeekForecast
    );
  }
};

PubSub.subscribe(FIRST_RENDER, firstRender.set);
PubSub.subscribe(FETCHED_INFO, renderer);
