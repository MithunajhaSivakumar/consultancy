import React from "react";
import styles from "./HomeAbout.module.css";
import { useHistory, useLocation } from "react-router-dom";

function HomeAbout() {

    const history = useHistory();
    const location = useLocation();

  return (
    <>
      <div className={styles.driver}>
        <div className={styles.left}>
          <img
            src="https://images.pexels.com/photos/7421299/pexels-photo-7421299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image1"
          />
        </div>
        <div className={styles.right}>
          <h2>
            ChoChi Foods<span> Stay Healthy</span>
          </h2>
          <p>
            Introducing ChoChi - Your Trusted Destination for Personalized
            Nutrient Packs. We are passionate about helping you achieve optimal
            health and well-being through customized nutrition solutions. At
            ChoChi, we understand that each individual has unique dietary
            requirements and health goals. That's why we offer a personalized
            approach to nutrition. Our team of experts combines the latest
            scientific research with advanced algorithms to create tailor-made
            nutrient packs just for you.
          </p>
          <button onClick={(e) => history.push("/")}>Browse Products</button>
        </div>
      </div>
    </>
  );
}

export default HomeAbout;
