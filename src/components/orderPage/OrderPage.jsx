import FormPage from "./FormPage";
import styles from "./OrderPage.module.css";
import { NavLink } from "react-router-dom";
function OrderPage() {
  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <img
            className={styles.title}
            src="../../../images/iteration-1-images/logo.svg"
          />
          <nav className={styles.menu}>
            <NavLink
              exact
              to="/"
              className={styles.link}
              activeClassName={styles.active}
            >
              Anasayfa -&nbsp;
            </NavLink>

            <NavLink
              to="/order"
              className={styles.link}
              activeClassName={styles.active}
            >
              Sipariş Oluştur
            </NavLink>
          </nav>
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.OrderContainer}>
          <div className={styles.orderInfo}>
            <div className={styles.pizzaName}>Position Absolute Acı Pizza</div>
            <div className={styles.pizzaInfo}>
              <div className={styles.pizzaPrice}>85.50₺</div>
              <div className={styles.pizzaRatingContainer}>
                <div className={styles.pizzaRating}>4.9</div>
                <div className={styles.pizzaRating}>(200)</div>
              </div>
            </div>
          </div>
          <FormPage />
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
