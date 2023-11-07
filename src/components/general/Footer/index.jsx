import { NavLink } from "react-router-dom";
import "./index.css";
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer>
      <section className="sectionfooter">
        <div className="container">
          <div className="flexable">
            <div className="div1">
              <NavLink to={'/about'}>
                <p>{t("about")}</p>
              </NavLink>
              <NavLink to={'/products'}>
                <p>{t("shakiWines")}</p>
              </NavLink>
              <NavLink to={'/products'}>
                <p>{t("abrauDurso")}</p>
              </NavLink>
            </div>
            <div className="div2">
              <NavLink to={'/map'}>
                <p>{t("salePlaces")}</p>
              </NavLink>
              <NavLink to={'/news'}>
                <p>{t("news")}</p>
              </NavLink>
              <NavLink to={'/contact'}>
                <p>{t("contact")}</p>
              </NavLink>
            </div>
          </div>
          <div className="div3">
            <p>
              {t("phone")} &nbsp;&nbsp;
              <span>
                <a href="tel:+994501234567">+994 50 123 45 67</a>
              </span>
            </p>
            <a href="mailto:info@azabrau.az">
              <p>
                {t("email")} &nbsp;&nbsp;<span>info@azabrau.az</span>
              </p>
            </a>
            <p>
              {t("address")} &nbsp;&nbsp;<span>Port Baku,Neftchilar Avenue 153,Baku Azerbaijan</span>
            </p>
          </div>
          <div className="div4">
            <a href="https://www.instagram.com">
              <img
                src={require("../../../images/home/footerinsta.svg").default}
                alt="insta"
              />
            </a>
            <a href="https://wa.me/+994501234567">
              <img
                src={require("../../../images/home/footerwp.svg").default}
                alt="whatsapp"
              />
            </a>
            <a href="https://www.facebook.com">
              <img
                src={require("../../../images/home/footerfb.svg").default}
                alt="facebook"
              />
            </a>
          </div>
        </div>
        <div className="containertwo">
          <p className="pend1">{t("createdPageAndTime")}</p>
          <img src={require("../../../images/home/logo2.svg").default} alt="logo" />
          <p className="pend2">{t("privacy")}</p>
        </div>
      </section>
    </footer>
  );
}
