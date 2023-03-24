import Popup from "./popup";
import Navbar from "./navbar";

import styles from './homepage.module.css'
import banner from "../img/MCBanner.jpg"
import { useEffect } from "react";

const Homepage = ({}) => {
  let blur = "blur"

  const onClick = () => {
    blur = "none"
  }
  
  return (
    <>
      <div className={styles.container}>
          <Navbar />
          <div className={styles.banner}>
            <img src={banner} alt="macdonalds banner" />
          </div>
        </div>
        <Popup/>
    </>
  );
};

export default Homepage;
