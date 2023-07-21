import React, { useState, useEffect } from "react";
import { Cards, CountryPicker, Chart } from "./Components";
import { fetchData, fetchGlobalWorldData } from "./api/";
import styles from "./App.module.css";
import Footer from "./Components/Footer/Footer";
import GlobalWorldCards from "./Components/GlobalWorldCards/GlobalWorldCards";
import Header from "./Components/Header/Header";

const App = () => {
  const [data, setData] = useState({});
  const [globalWorld, setGlobalWorld] = useState({});
  const [country, setCountry] = useState();

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setCountry(country);
    setData(data);
  };

  useEffect(() => {
    async function loadData() {
      const data = await fetchData();
      setData({ data });
    }
    async function loadGlobalWorld() {
      const data = await fetchGlobalWorldData();
      console.log(data, "loads");
      setGlobalWorld(data);
    }
    loadGlobalWorld();
    loadData();
  }, []);

  console.log(globalWorld, "globalWorld");

  return (
    <div className={styles.container}>
      <Header/>
      <GlobalWorldCards data={globalWorld} />
      <Cards data={data} country={country} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
      <Footer />
    </div>
  );
};

export default App;
