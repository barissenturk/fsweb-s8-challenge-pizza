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
  "Kanada Jambonu",
  "Ananas",
  "Tavuk Izgara",
  "Jalepeno",
  "Kabak",
  "Soğan",
  "Sarımsak",
];

const initialForm = {
  isim: "",
  boyut: "",
  malzemeler: [],
  özel: "",
  hamur: "",
};

export default function FormPage() {
  const [orderData, setOrderData] = useState(initialForm);

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
  // useEffect(() => {
  //   console.log(orderData);
  // }, [orderData]);
  return (
    <div className={styles.mainFormContainer}>
      <div className={styles.formText}>
        Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer
        malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir
        fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş
        mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir
        yemektir. . Küçük bir pizzaya bazen pizzetta denir.
      </div>
      <Form className={styles.formContainer}>
        <FormGroup className={styles.optionsContainer}>
          <FormGroup tag="fieldset" className={styles.sizeOptions}>
            <Label className={styles.sizeOptionsTitle}>
              Boyut Seç <span style={{ color: "red" }}>*</span>
            </Label>
            <FormGroup check className={styles.sizeOptionsName}>
              <Input
                name="boyut"
                value="küçük"
                checked={orderData.boyut === "küçük"}
                onChange={handleChange}
                type="radio"
              />
              <Label check>Küçük</Label>
            </FormGroup>
            <FormGroup check className={styles.sizeOptionsName}>
              <Input
                name="boyut"
                value="orta"
                checked={orderData.boyut === "orta"}
                onChange={handleChange}
                type="radio"
              />
              <Label check>Orta</Label>
            </FormGroup>
            <FormGroup check className={styles.sizeOptionsName}>
              <Input
                name="boyut"
                value="büyük"
                checked={orderData.boyut === "büyük"}
                onChange={handleChange}
                type="radio"
              />
              <Label check>Büyük</Label>
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
            >
              <option value="">Hamur Kalınlığı</option>
              <option value="ince">İnce</option>
              <option value="orta">Orta</option>
              <option value="kalin">Kalın</option>
            </Input>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label>Ek Malzemeler</Label>
          <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
          {orderData.malzemeler.length > 0 &&
            orderData.malzemeler.length < 4 && (
              <FormFeedback className="d-block mb-2">
                En az 4 malzeme seçmelisiniz
              </FormFeedback>
            )}
          <Row>
            {extrasList.map((item, index) => (
              <Col md="4" key={index}>
                <FormGroup check className="mb-2">
                  <Input
                    type="checkbox"
                    value={item}
                    checked={orderData.malzemeler.includes(item)}
                    onChange={handleExtraItems}
                  />
                  <Label check>{item}</Label>
                </FormGroup>
              </Col>
            ))}
          </Row>
        </FormGroup>
        <FormGroup>
          <Label for="isim">isim</Label>
          <Input
            id="isim"
            name="isim"
            value={orderData.isim}
            onChange={handleChange}
            invalid={orderData.isim.length > 0 && orderData.isim.length < 3}
          />
          <FormFeedback>İsim en az 3 karakter olmalı</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="özel">Sipariş Notu</Label>
          <Input
            id="özel"
            name="özel"
            type="textarea"
            value={orderData.özel}
            onChange={handleChange}
          />
        </FormGroup>
      </Form>
      <OrderSummary isFormValid={isFormValid} handleSubmit={handleSubmit} />
    </div>
  );
}
