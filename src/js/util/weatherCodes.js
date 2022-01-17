const weatherCodesObject = {
  clear: [800],
  clouds: [801, 802, 803, 804],
  thunderStorm: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232],
  rain: [
    300, 301, 302, 310, 311, 312, 313, 314, 321, 500, 501, 502, 503, 504, 511,
    520, 521, 522, 531,
  ],
  snow: [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622],
  atmosphere: [701, 711, 721, 731, 741, 751, 761, 762, 771, 781],
};

const getWeatherFromCode = (weatherCode) => {
  let weather;

  for (const prop in weatherCodesObject) {
    weatherCodesObject[prop].map((weatherArrayElement) => {
      if (weatherArrayElement === weatherCode) {
        weather = prop;
      }
    });
  }
  return weather;
};

export default getWeatherFromCode;
