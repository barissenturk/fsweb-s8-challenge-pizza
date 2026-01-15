import styles from "./OrderSummary.module.css";
import { Link } from "react-router-dom";

export default function OrderSummary({ isFormValid, handleSubmit }) {
  return (
    <div className={styles.orderWrapper}>
      <div className={styles.quantityBox}>
        <button className={`${styles.qtyButton} ${styles.left}`}>-</button>
        <div className={styles.qtyValue}>1</div>
        <button className={`${styles.qtyButton} ${styles.right}`}>+</button>
      </div>

      <div className={styles.summaryCard}>
        <div className={styles.summary}>
          <div className={styles.summaryInfo}>
            <h3 className={styles.title}>Sipariş Toplamı</h3>

            <div className={styles.summaryRow}>
              <span>Seçimler</span>
              <span>25.00₺</span>
            </div>

            <div className={styles.total}>
              <span>Toplam</span>
              <span>110.50₺</span>
            </div>
          </div>
        </div>
        <Link
          className={styles.orderButton}
          disabled={!isFormValid}
          onClick={handleSubmit}
          to="/orderDetail"
        >
          SİPARİŞ VER
        </Link>
      </div>
    </div>
  );
}
