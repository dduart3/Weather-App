import weatherInfo from "../modules/weatherInfoApi";

const FETCHED_INFO = "FETCHED_INFO";

const fetchData = async (city) => {
  try {
    const weather = await weatherInfo(city);

    PubSub.publish(FETCHED_INFO, weather);
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
