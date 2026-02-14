import "./HomePageMain.css";

import navIcon from "../../../images/iteration-2-images/icons/1.svg";
import navIcon2 from "../../../images/iteration-2-images/icons/2.svg";
import navIcon3 from "../../../images/iteration-2-images/icons/3.svg";
import navIcon4 from "../../../images/iteration-2-images/icons/4.svg";
import navIcon5 from "../../../images/iteration-2-images/icons/5.svg";
import navIcon6 from "../../../images/iteration-2-images/icons/6.svg";

import foodCard from "../../../images/iteration-2-images/pictures/food-1.png";
import foodCard2 from "../../../images/iteration-2-images/pictures/food-2.png";
import foodCard3 from "../../../images/iteration-2-images/pictures/food-3.png";

export default function HomePageMain() {
  return (
    <div className="bodyContainer">
      <section className="navigation">
        <nav>
          <a className="nav-items">
            <img src={navIcon} />
            YENİ! Kore{" "}
          </a>
          <a className="nav-items">
            <img src={navIcon2} />
            Pizza
          </a>
          <a className="nav-items">
            <img src={navIcon3} />
            Burger
          </a>
          <a className="nav-items">
            <img src={navIcon4} />
            Kızartmalar
          </a>
          <a className="nav-items">
            <img src={navIcon5} />
            Fast food
          </a>
          <a className="nav-items">
            <img src={navIcon6} />
            Gazlı İçecek
          </a>
        </nav>
      </section>
      <section className="order-now">
        <div className="left-side">
          <div className="left-side-container">
            <p id="left-side-header1">Özel Lezzetus</p>
            <p id="left-side-header2">Position:Absolute Acı Burger</p>
            <button className="order-btn">SİPARİŞ VER</button>
          </div>
        </div>
        <div className="right-side">
          <div className="right-side-top">
            <div className="right-side-top-container">
              <p id="right-side-header1">Hackathlon Burger Menü</p>
              <button className="order-btn">SİPARİŞ VER</button>
            </div>
          </div>
          <div className="right-side-bottom">
            <div className="right-side-bottom-container">
              <p id="right-side-header2">
                <span className="highlight">Çoooook</span> hızlı npm gibi kurye
              </p>
              <button className="order-btn">SİPARİŞ VER</button>
            </div>
          </div>
        </div>
      </section>
      <section className="menu">
        <div className="menu-header">
          <p clclassNameass="most-ordered-title">en çopk paketlenen menüler</p>
          <p className="promoCode-title">Acıktıran Kodlara Doyuran Lezzetler</p>
        </div>

        <nav className="nav-menu">
          <a className="menu-items">
            <img src={navIcon} />
            Ramen
          </a>
          <a className="active">
            <img src={navIcon2} />
            Pizza
          </a>
          <a className="menu-items">
            <img src={navIcon3} />
            Burger
          </a>
          <a className="menu-items">
            <img src={navIcon4} />
            French fries
          </a>
          <a className="menu-items">
            <img src={navIcon5} />
            Fast food
          </a>
          <a className="menu-items">
            <img src={navIcon6} />
            Soft drinks
          </a>
        </nav>
        <div className="food-container">
          <div className="food-items">
            <div className="food-items-card">
              <img src={foodCard} />
              <div className="food-information">
                <h3 className="food-name">Terminal Pizza</h3>
                <div className="food-subinfo">
                  <p className="food-rating">4.9</p>
                  <div className="food-price">
                    <p className="food-rating">(200)</p>
                    <p className="price">60₺</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="food-items">
            <div className="food-items-card">
              <img src={foodCard2} />
              <div className="food-information">
                <h3 className="food-name">Position Absolute Acı Pizza</h3>
                <div className="food-subinfo">
                  <p className="food-rating">4.9</p>
                  <div className="food-price">
                    <p className="food-rating">(200)</p>
                    <p className="price">60₺</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="food-items">
            <div className="food-items-card">
              <img src={foodCard3} />
              <div className="food-information">
                <h3 className="food-name">useEffect Tavuklu Burger</h3>
                <div className="food-subinfo">
                  <p className="food-rating">4.9</p>
                  <div className="food-price">
                    <p className="food-rating">(200)</p>
                    <p className="price">60₺</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
