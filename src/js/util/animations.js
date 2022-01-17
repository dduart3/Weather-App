import PubSub from "pubsub-js";
import getWeatherBackground from "./weatherBackgrounds";
import gsap from "gsap";
import weatherInfo from "../modules/weatherInfoApi";
const animations = (() => {
  const initialAnimationSequence = ({ weatherCode, date }) => {
    const tl = gsap
      .timeline()
      .to("body", {
        autoAlpha: 0,
        duration: 0,
      })
      .to("body", {
        backgroundImage: `url(${getWeatherBackground({
          weatherCode,
          date,
        })})`,
        duration: 1,
      })
      .to("body", {
        autoAlpha: 1,
        duration: 1.5,
      })
      .from(
        ".weather-info__weather",
        {
          duration: 2,
          delay: 1,
          ease: "power1.out",
          x: 500,
          y: -500,
        },
        "<0.2"
      )
      .from(
        ".weather-info__temperature",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -500,
        },
        "<0.2"
      )
      .from(
        ".weather-info__city",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -500,
        },
        "<0.2"
      )
      .from(
        ".weather-info__date",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -500,
        },
        "<0.2"
      )
      .from(
        ".weather-info__weather-icon",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -500,
        },
        "<0.2"
      )
      .from(
        "#day1",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -500,
        },
        "<"
      )
      .from(
        "#day2",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -500,
        },
        "<0.2"
      )
      .from(
        "#day3",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -500,
        },
        "<0.2"
      )
      .from(
        "#day4",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -500,
        },
        "<0.2"
      )
      .from(
        "#day5",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -800,
        },
        "<0.2"
      )
      .from(
        "#day6",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -800,
        },
        "<0.2"
      )
      .from(
        "#day7",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -800,
        },
        "<0.2"
      );
  };

  const postAnimationBackgroundChange = (
    { weatherCode, date },
    reRenderWeather,
    reRenderWeek
  ) => {
    const reRender = () => {
      reRenderWeather();
      reRenderWeek();
    };
    const tl = gsap
      .timeline({ onStart: reRender })
      .to("body", {
        autoAlpha: 0,
        duration: 0.1,
      })
      .to("body", {
        backgroundImage: `url(${getWeatherBackground({
          weatherCode,
          date,
        })})`,
        duration: 1,
      })
      .to("body", {
        autoAlpha: 1,
        duration: 2,
      });
    return tl;
  };

  const postAnimationSequence = (
    { weatherCode, date },
    reRenderWeather,
    reRenderWeek
  ) => {
    const tl = gsap
      .timeline()
      .to(".weather-info__weather-icon", {
        duration: 2,
        delay: 1,
        ease: "power1.out",
        x: 500,
        y: -500,
      })
      .to(
        ".weather-info__weather",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -500,
        },
        "<0.2"
      )
      .to(
        ".weather-info__temperature",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -500,
        },
        "<0.2"
      )
      .to(
        ".weather-info__city",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -500,
        },
        "<0.2"
      )
      .to(
        ".weather-info__date",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -500,
        },
        "<0.2"
      )
      .to(
        "#day1",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -500,
        },
        "<"
      )
      .to(
        "#day2",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -500,
        },
        "<0.1"
      )
      .to(
        "#day3",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -500,
        },
        "<0.1"
      )
      .to(
        "#day4",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -500,
        },
        "<0.1"
      )
      .to(
        "#day5",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -800,
        },
        "<0.1"
      )
      .to(
        "#day6",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -800,
        },
        "<0.1"
      )
      .to(
        "#day7",
        {
          duration: 2,
          ease: "power1.out",
          x: 500,
          y: -800,
        },
        "<0.1"
      );

    const animReverse = () => {
      postAnimationBackgroundChange(
        { weatherCode, date },
        reRenderWeather,
        reRenderWeek
      );
      tl.reverse();
    };

    tl.eventCallback("onComplete", animReverse);

    return tl;
  };

  return {
    initialAnimationSequence,
    postAnimationSequence,
  };
})();

export default animations;
