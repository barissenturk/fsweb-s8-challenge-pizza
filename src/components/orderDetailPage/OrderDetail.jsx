import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import styles from "./OrderDetail.module.css";

export default function OrderDetail() {
  const location = useLocation();
  const { orderData } = location.state || {};
  console.log(orderData);
  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <img src="../../../images/iteration-1-images/logo.svg" />
          <div className={styles.promoMessage}> lezzetin yolda</div>
          <div className={styles.orderSuccess}>SİPARİŞ Alındı</div>
          <div className={styles.orderDetail}>
            <div className={styles.pizzaName}>Position Absolute Acı Pizza</div>
            <div className={styles.orderDetailContainer}>
              <div className={styles.orderDetailInfoContainer}>
                <p className={styles.orderDetailInfo}>
                  Boyut:{orderData.boyut}
                </p>
              </div>
              <div className={styles.orderDetailInfoContainer}>
                <p className={styles.orderDetailInfo}>
                  <span>Hamur:</span>
                  {orderData.hamur}
                </p>
              </div>
              <div className={styles.orderDetailInfoContainer}>
                <p className={styles.orderDetailInfo}>
                  Ek Malzemeler: {orderData.malzemeler.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
