import styles from "./OrderDetail.module.css";

export default function OrderDetail() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <img src="../../../images/iteration-1-images/logo.svg" />
        <div className={styles.orderSuccess}>
          Tebrİkler! SİPARİŞİNİZ ALINDI!
        </div>
      </div>
    </div>
  );
}
