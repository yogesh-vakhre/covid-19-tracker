import React, { useState, useEffect } from "react";
import {  fetchHistoricalData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = (props) => {
  const {
    data: { cases, recovered, deaths },
    country,
  } = props;
  let lineChart;
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const initialDailyData  = await fetchHistoricalData();
      setDailyData(initialDailyData );
     };
    fetchAPI();
  }, []);
 

  if (dailyData) {
    const { cases, deaths, recovered } = dailyData;
      // Check if the necessary data exists in the API response
        if ( !cases || !deaths || !recovered) {
          console.error('Invalid data format in API response.');
          return '';
        }
    console.log(  dailyData, 'dailyData');
    const dates = Object.keys(cases);
    const casesData = Object.values(cases);
    const deathsData = Object.values(deaths);
     lineChart = dailyData ? (
      <Line
        data={{
          labels: dates,
          datasets: [
            {
              data: casesData,
              label: "Infected",
              borderColor: "#3333ff",
              fill: true,
            },
            {
              data: deathsData,
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "rgba(255,0,0,0.5)",
              fill: true,
            } 
          ],
        }}
      />
    ) : 'ssdsdsdsd';
  }

  const barChart = cases ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths", "Active"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
              "rgba(242, 234, 0, 0.5)",
            ],
            hoverBackgroundColor: [
              "rgba(0, 77, 153)",
              "rgba(30, 102, 49)",
              "rgba(255, 51, 51)",
              "rgba(204, 153, 0)",
            ],
            data: [cases, recovered, deaths, cases - (recovered + deaths)],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return (
    
    <div className={styles.container}> {country ? barChart : lineChart}</div>
  );
};

export default Chart;
