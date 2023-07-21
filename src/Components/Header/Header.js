import React from "react";
// import styles from "../../App.module.css";
import styles from "../../App.module.css";
import image from "../../images/image.png";
const Header = (props) => {
  return (
    <>
      <img className={styles.image} src={image} alt="COVID-19" />
      <br />
      <text>
        <b>Global and Country Wise Cases of Corona Virus</b>
      </text>
      <br />
      <br />
    </>
  );
};

export default Header;
