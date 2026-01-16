import Footer from "../footer/Footer";
import FormPage from "./FormPage";
import styles from "./OrderPage.module.css";
import { NavLink } from "react-router-dom";
function OrderPage() {
  const pizzaPrice = 85.5;
  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <img
            className={styles.title}
            src="../../../images/iteration-1-images/logo.svg"
          />
        </div>
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.menuContainer}>
          <img
            className={styles.headerBanner}
            src="../../../images/iteration-2-images/pictures/form-banner.png"
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
        <div className={styles.OrderContainer}>
          <div className={styles.orderInfo}>
            <div className={styles.pizzaName}>Position Absolute Acı Pizza</div>
            <div className={styles.pizzaInfo}>
              <div className={styles.pizzaPrice}>{pizzaPrice.toFixed(2)}₺</div>
              <div className={styles.pizzaRatingContainer}>
                <div className={styles.pizzaRating}>4.9</div>
                <div className={styles.pizzaRating}>(200)</div>
              </div>
            </div>
          </div>
          <div className={styles.formText}>
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
            denir.
          </div>
        </div>
      </div>
      <div className={styles.formContainer}>
        <FormPage pizzaPrice={pizzaPrice} />
      </div>
      <Footer />
    </div>
  );
}

export default OrderPage;
