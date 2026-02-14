import "./Footer.css";
import icon1 from "../../../images/iteration-2-images/footer/icons/icon-1.png";
import icon2 from "../../../images/iteration-2-images/footer/icons/icon-2.png";
import icon3 from "../../../images/iteration-2-images/footer/icons/icon-3.png";
import instaIcon from "../../../images/iteration-2-images/footer/insta/li-0.png";
import instaIcon2 from "../../../images/iteration-2-images/footer/insta/li-1.png";
import instaIcon3 from "../../../images/iteration-2-images/footer/insta/li-2.png";
import instaIcon4 from "../../../images/iteration-2-images/footer/insta/li-3.png";
import instaIcon5 from "../../../images/iteration-2-images/footer/insta/li-4.png";
import instaIcon6 from "../../../images/iteration-2-images/footer/insta/li-5.png";
import footerIcon from "../../../images/iteration-2-images/footer/Vector.png";
export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-info-container">
          <div className="footer-left">
            <h2 className="footer-info-header">Teknolojik Yemekler</h2>
            <ul className="info-list">
              <li className="info-list-item">
                <img src={icon1} />
                341 Londonderry Road, Istanbul Türkiye
              </li>
              <li className="info-list-item">
                <img src={icon2} />
                aciktim@teknolojikyemekler.com
              </li>
              <li className="info-list-item">
                <img src={icon3} />
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
              <img src={instaIcon} />
              <img src={instaIcon2} />
              <img src={instaIcon3} />
              <img src={instaIcon4} />
              <img src={instaIcon5} />
              <img src={instaIcon6} />
            </div>
          </div>
        </div>
        <div className="copyright-container">
          <p>&copy;2023 Teknolojik Yemekler.</p>
          <img src={footerIcon} />
        </div>
      </div>
    </footer>
  );
}
