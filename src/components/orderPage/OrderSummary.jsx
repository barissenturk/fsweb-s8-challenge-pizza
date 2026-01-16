import styles from "./OrderSummary.module.css";
import { useHistory } from "react-router-dom";

export default function OrderSummary({
  isFormValid,
  handleSubmit,
  handleIncrease,
  orderData,
  handleDecrease,
  totalPrice,
  malzemePrice,
}) {
  const history = useHistory();
  return (
    <div className={styles.orderWrapper}>
      <div className={styles.quantityBox}>
        <button
          className={`${styles.qtyButton} ${styles.left}`}
          onClick={handleDecrease}
        >
          -
        </button>
        <div className={styles.qtyValue}>{orderData.adet}</div>
        <button
          className={`${styles.qtyButton} ${styles.right}`}
          onClick={handleIncrease}
        >
          +
        </button>
      </div>

      <div className={styles.summaryCard}>
        <div className={styles.summary}>
          <div className={styles.summaryInfo}>
            <h3 className={styles.title}>Sipariş Toplamı</h3>

            <div className={styles.summaryRow}>
              <span>Seçimler</span>
              <span>{malzemePrice}₺</span>
            </div>

            <div className={styles.total}>
              <span>Toplam</span>
              <span>{totalPrice.toFixed(2)}₺</span>
            </div>
          </div>
        </div>
        <button
          className={styles.orderButton}
          disabled={!isFormValid}
          onClick={() => {
            handleSubmit();
            history.push("/orderDetail", {
              orderData,
              malzemePrice,
              totalPrice,
            });
          }}
        >
          SİPARİŞ VER
        </button>
      </div>
    </div>
  );
}
