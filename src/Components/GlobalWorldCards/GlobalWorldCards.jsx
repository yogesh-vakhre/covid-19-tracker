import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./GlobalWorldCards.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const GlobalWorldCards = (props) => {
  const { data } = props;

  if (!data.active) {
    console.log(data, "11GlobalWorldCards");
    return "Loading...";
  }
  const active = 1;
  let carddetails = [
    {
      style: styles.infected,
      text: "Infected",
      value: data?.cases,
      bottomText: "Number of infect cases of COVID-19",
    },
    {
      style: styles.recovered,
      text: "Recovered",
      value: data.recovered,
      bottomText: "Number of recoveries from COVID-19",
    },
    {
      style: styles.deaths,
      text: "Deaths",
      value: data.deaths,
      bottomText: "Number of deaths caused by COVID-19",
    },
    {
      style: styles.active,
      text: "Active",
      value: data.active,
      bottomText: "Number of active cases of COVID-19",
    },
  ];
  return (
    <div className={styles.container}>
      <Grid container spacing={3} mb={3} justify="center">
        <Typography variant="h5">
          <b>Global Stats Cases of Corona Virus</b>
        </Typography>
      </Grid>
      <br />
      <br />
      <Grid container spacing={3} justify="center">
        {carddetails.map((detail, index) => (
          <Grid
            item
            component={Card}
            xs={12}
            md={2}
            className={cx(styles.Card, detail.style)}
            key={index}
            style={{ margin: "0px 23.675px", padding: "12px" }}
          >
            <CardContent>
              <Typography color="textPrimary" gutterBottom>
                <b>{detail.text}</b>
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={detail.value}
                  duration={2}
                  separator=","
                />
              </Typography>
              <Typography variant="body2">{detail.bottomText}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default GlobalWorldCards;
