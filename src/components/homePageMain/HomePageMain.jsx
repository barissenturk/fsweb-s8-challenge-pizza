import "./HomePageMain.css";

export default function HomePageMain() {
  return (
    <div className="bodyContainer">
      <section className="navigation">
        <nav>
          <a className="nav-items">
            <img src="../../../images/iteration-2-images/icons/1.svg" />
            YENİ! Kore{" "}
          </a>
          <a className="nav-items">
            <img src="../../../images/iteration-2-images/icons/2.svg" />
            Pizza
          </a>
          <a className="nav-items">
            <img src="../../../images/iteration-2-images/icons/3.svg" />
            Burger
          </a>
          <a className="nav-items">
            <img src="../../../images/iteration-2-images/icons/4.svg" />
            Kızartmalar
          </a>
          <a className="nav-items">
            <img src="../../../images/iteration-2-images/icons/5.svg" />
            Fast food
          </a>
          <a className="nav-items">
            <img src="../../../images/iteration-2-images/icons/6.svg" />
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
            <img src="../../../images/iteration-2-images/icons/1.svg" />
            Ramen
          </a>
          <a className="active">
            <img src="../../../images/iteration-2-images/icons/2.svg" />
            Pizza
          </a>
          <a className="menu-items">
            <img src="../../../images/iteration-2-images/icons/3.svg" />
            Burger
          </a>
          <a className="menu-items">
            <img src="../../../images/iteration-2-images/icons/4.svg" />
            French fries
          </a>
          <a className="menu-items">
            <img src="../../../images/iteration-2-images/icons/5.svg" />
            Fast food
          </a>
          <a className="menu-items">
            <img src="../../../images/iteration-2-images/icons/6.svg" />
            Soft drinks
          </a>
        </nav>
        <div className="food-container">
          <div className="food-items">
            <div className="food-items-card">
              <img src="../../../images/iteration-2-images/pictures/food-1.png" />
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
              <img src="../../../images/iteration-2-images/pictures/food-2.png" />
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
              <img src="../../../images/iteration-2-images/pictures/food-3.png" />
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
