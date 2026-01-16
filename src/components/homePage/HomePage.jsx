import Footer from "../footer/Footer";
import HomePageMain from "../homePageMain/HomePageMain";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <img src="../../../images/iteration-1-images/logo.svg" />
          <div className={styles.header}>KOD ACIKTIRIR PİZZA, DOYURUR</div>
          <Link className={styles.orderButton} to="/order">
            ACIKTIM
          </Link>
        </div>
      </div>
      <HomePageMain />
      <Footer />
    </div>
  );
}
export default HomePage;
