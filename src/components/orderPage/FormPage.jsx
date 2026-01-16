import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./FormPage.module.css";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  FormFeedback,
  FormText,
} from "reactstrap";
import OrderSummary from "./OrderSummary";

const extrasList = [
  "Pepperoni",
  "Domates",
  "Biber",
  "Sosis",
  "Mısır",
  "Sucuk",
  "Ananas",
  "Tavuk Izgara",
  "Jalepeno",
  "Kabak",
  "Soğan",
  "Kanada Jambonu",
  "Sarımsak",
];

const initialForm = {
  isim: "",
  boyut: "",
  malzemeler: [],
  özel: "",
  hamur: "",
  adet: 1,
};

export default function FormPage({ pizzaPrice }) {
  const [orderData, setOrderData] = useState(initialForm);

  const malzemePrice = (orderData.malzemeler.length * 5).toFixed(2);
  const totalPrice =
    (Number(pizzaPrice.toFixed(2)) + Number(malzemePrice)) * orderData.adet;
  const isFormValid =
    orderData.isim.length >= 3 &&
    orderData.boyut &&
    orderData.hamur &&
    orderData.malzemeler.length >= 4;

  function handleChange(e) {
    const { name, value } = e.target;
    setOrderData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleExtraItems(e) {
    const { value, checked } = e.target;

    setOrderData((prev) => {
      if (checked && prev.malzemeler.length >= 10) {
        return prev;
      }

      return {
        ...prev,
        malzemeler: checked
          ? [...prev.malzemeler, value]
          : prev.malzemeler.filter((item) => item !== value),
      };
    });
  }

  function handleIncrease() {
    setOrderData((prev) => ({
      ...prev,
      adet: prev.adet + 1,
    }));
  }

  function handleDecrease() {
    setOrderData((prev) => {
      if (orderData.adet <= 1) {
        return prev;
      }
      return { ...prev, adet: prev.adet - 1 };
    });
  }
  function handleSubmit() {
    if (!isFormValid) return;
    axios
      .post("https://reqres.in/api/pizza", orderData, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "reqres_37d74284b4a742929b84220ad74d1b45",
        },
      })
      .then((res) => {
        console.log("POST SUCCESS ", res.data);
      })
      .catch((err) => {
        console.error("POST ERROR ", err);
      });
  }
  useEffect(() => {
    console.log(orderData);
  }, [orderData]);
  return (
    <div className={styles.mainFormContainer}>
      <Form className={styles.formContainer}>
        <FormGroup className={styles.optionsContainer}>
          <FormGroup tag="fieldset" className={styles.sizeOptions}>
            <FormGroup className={styles.sizeOptionsTitle}>
              <Label>
                Boyut Seç <span style={{ color: "red" }}>*</span>
              </Label>
            </FormGroup>
            <FormGroup className={styles.sizeOptionsNameContainer}>
              <FormGroup check className={styles.sizeOptionsName}>
                <Label>
                  <Input
                    type="radio"
                    name="boyut"
                    value="S"
                    checked={orderData.boyut === "S"}
                    onChange={handleChange}
                  />
                  <span className={styles.sizeCircle}>S</span>
                  <span className={styles.sizeText}>Küçük</span>
                </Label>
              </FormGroup>

              <FormGroup check className={styles.sizeOptionsName}>
                <Label>
                  <Input
                    type="radio"
                    name="boyut"
                    value="M"
                    checked={orderData.boyut === "M"}
                    onChange={handleChange}
                  />
                  <span className={styles.sizeCircle}>M</span>
                  <span className={styles.sizeText}>Orta</span>
                </Label>
              </FormGroup>

              <FormGroup check className={styles.sizeOptionsName}>
                <Label>
                  <Input
                    type="radio"
                    name="boyut"
                    value="L"
                    checked={orderData.boyut === "L"}
                    onChange={handleChange}
                  />
                  <span className={styles.sizeCircle}>L</span>
                  <span className={styles.sizeText}>Büyük</span>
                </Label>
              </FormGroup>
            </FormGroup>
          </FormGroup>
          <FormGroup className={styles.doughOptions}>
            <Label for="dough" className={styles.doughOptionsTitle}>
              Hamur Seç <span style={{ color: "red" }}>*</span>
            </Label>
            <Input
              id="dough"
              name="hamur"
              type="select"
              value={orderData.hamur}
              onChange={handleChange}
              className={styles.doughOptionsInput}
            >
              <option value="">--Hamur Kalınlığı Seç --</option>
              <option value="İnce">İnce</option>
              <option value="Normal">Normal</option>
              <option value="Kalın">Kalın</option>
            </Input>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label className={styles.extraItemsTitle}>Ek Malzemeler</Label>
          <div className={styles.extraItemsSubtitle}>
            En fazla 10 malzeme seçebilirsiniz. 5₺
            {orderData.malzemeler.length > 0 &&
              orderData.malzemeler.length < 4 && (
                <FormFeedback className="d-block mt2 fs-6">
                  En az 4 malzeme seçmelisiniz
                </FormFeedback>
              )}
          </div>

          <Row className={`g-2 ${styles.items}`}>
            {extrasList.map((item) => (
              <Col key={item} xs="6" sm="6" md="4" className="p-0">
                <FormGroup check className={styles.extraItem}>
                  <Label className={styles.checkboxLabel}>
                    <Input
                      type="checkbox"
                      value={item}
                      checked={orderData.malzemeler.includes(item)}
                      onChange={handleExtraItems}
                      className={styles.checkboxInput}
                    />
                    <span className={styles.customCheckbox} />
                    <span className={styles.checkboxText}>{item}</span>
                  </Label>
                </FormGroup>
              </Col>
            ))}
          </Row>
        </FormGroup>
        <FormGroup>
          <Label className={styles.orderNote} for="isim">
            İsim
          </Label>
          <Input
            className={styles.nameInput}
            placeholder="İsminizi giriniz"
            id="isim"
            name="isim"
            value={orderData.isim}
            onChange={handleChange}
            invalid={orderData.isim.length > 0 && orderData.isim.length < 3}
          />
          <FormFeedback>İsim en az 3 karakter olmalı</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label className={styles.orderNote} for="özel">
            Sipariş Notu
          </Label>
          <Input
            className={styles.noteInput}
            placeholder="Siparişine eklemek istediğin bir not var mı?"
            id="özel"
            name="özel"
            value={orderData.özel}
            onChange={handleChange}
          />
        </FormGroup>
      </Form>
      <OrderSummary
        isFormValid={isFormValid}
        handleSubmit={handleSubmit}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        orderData={orderData}
        totalPrice={totalPrice}
        malzemePrice={malzemePrice}
      />
    </div>
  );
}
