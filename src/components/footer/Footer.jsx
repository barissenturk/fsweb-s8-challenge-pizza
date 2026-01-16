import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info-container">
          <div className="footer-left">
            <h2 className="footer-info-header">Teknolojik Yemekler</h2>
            <ul className="info-list">
              <li className="info-list-item">
                <img src="../../../images/iteration-2-images/footer/icons/icon-1.png" />
                341 Londonderry Road, Istanbul Türkiye
              </li>
              <li className="info-list-item">
                <img src=".../../../images/iteration-2-images/footer/icons/icon-2.png" />
                aciktim@teknolojikyemekler.com
              </li>
              <li className="info-list-item">
                <img src="../../../images/iteration-2-images/footer/icons/icon-3.png" />
                +90 216 123 45 67
              </li>
            </ul>
          </div>
          <div className="footer-middle">
            <h2 className="hot-menu-header">Hot Menu</h2>
            <ul className="hot-menu-list">
              <li className="hot-menu-list-item">Terminal Pizza</li>
              <li className="hot-menu-list-item">5 Kişilik Hackathlon Pizza</li>
              <li className="hot-menu-list-item">useEffect Tavuklu Pizza</li>
              <li className="hot-menu-list-item">Beyaz Console Frosty</li>
              <li className="hot-menu-list-item">Testler Geçti Mutlu Burger</li>
              <li className="hot-menu-list-item">
                Position Absolute Acı Burger
              </li>
            </ul>
          </div>
          <div className="footer-right">
            <h2 className="instagram-header">Instagram</h2>
            <div className="footer-img-container">
              <img src="../../../images/iteration-2-images/footer/insta/li-0.png" />
              <img src="../../../images/iteration-2-images/footer/insta/li-1.png" />
              <img src="../../../images/iteration-2-images/footer/insta/li-2.png" />
              <img src="../../../images/iteration-2-images/footer/insta/li-3.png" />
              <img src="../../../images/iteration-2-images/footer/insta/li-4.png" />
              <img src="../../../images/iteration-2-images/footer/insta/li-5.png" />
            </div>
          </div>
        </div>
        <div className="copyright-container">
          <p>&copy;2023 Teknolojik Yemekler.</p>
          <img src="../../../images/iteration-2-images/footer/Vector.png" />
        </div>
      </div>
    </footer>
  );
}
