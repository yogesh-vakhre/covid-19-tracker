import axios from "axios";

const url = "https://corona.lmao.ninja/v2";

export const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  } 

  try {
    const { data } = await axios.get(changeableUrl);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchGlobalWorldData = async () => {
  try {
    const { data } = await axios.get(`${url}/all`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchHistoricalData = async () => {
  try {
    const { data } = await axios.get(`${url}/historical/all?lastdays=all`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const countries = await axios.get(`${url}/countries`);
    return countries.data.map((country) => country.country);
  } catch (error) {
    console.log(error);
  }
};
