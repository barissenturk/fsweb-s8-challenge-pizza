import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import styles from "./OrderDetail.module.css";

export default function OrderDetail() {
  const location = useLocation();
  const { orderData, totalPrice, malzemePrice } = location.state || {};

  return (
    <div>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <img src="../../../images/iteration-1-images/logo.svg" />
          <div className={styles.promoMessage}> lezzetin yolda</div>
          <div className={styles.orderSuccess}>SİPARİŞ Alındı</div>
          <div className={styles.orderSuccessMobile}>
            Tebrİkler! SİPARİŞİNİZ ALINDI!
          </div>
          <div className={styles.orderDetail}>
            <div className={styles.pizzaName}>Position Absolute Acı Pizza</div>
            <div className={styles.orderDetailContainer}>
              <div className={styles.orderDetailInfoContainer}>
                <p className={styles.orderDetailInfo}>
                  <span className={styles.orderDetailTitle}>Boyut:</span>
                  {orderData.boyut}
                </p>
              </div>
              <div className={styles.orderDetailInfoContainer}>
                <p className={styles.orderDetailInfo}>
                  <span className={styles.orderDetailTitle}>Hamur:</span>
                  {orderData.hamur}
                </p>
              </div>
              <div className={styles.orderDetailInfoContainer}>
                <p className={styles.orderDetailInfo}>
                  <span className={styles.orderDetailTitle}>
                    Ek Malzemeler:
                  </span>{" "}
                  {orderData.malzemeler.join(", ")}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.summaryCard}>
            <div className={styles.summary}>
              <div className={styles.summaryInfo}>
                <h3 className={styles.title}>Sipariş Toplamı</h3>

                <div className={styles.summaryRow}>
                  <span>Seçimler</span>
                  <span>{malzemePrice}₺</span>
                </div>

                <div className={styles.summaryRow}>
                  <span>Toplam</span>
                  <span>{totalPrice.toFixed(2)}₺</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerContainer}>
        <Footer />
      </div>
    </div>
  );
}
