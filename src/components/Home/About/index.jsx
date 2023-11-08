import { Link } from "react-router-dom";
import "./index.css";
import { useTranslation } from 'react-i18next';


export default function About() {
  const { t } = useTranslation();
  return (
    <section className="about">
      <div className="container">
        <div className="flex1">
          <h2>{t("about")}</h2>
          <p className="text1">{t("homeAboutTitle2")}</p>
          <p className="text2">
            {t("homeAboutP1")} <br />
            {t("homeAboutP2")}
          </p>
          <Link to={'/about'}><button>{t("moreInfoButton")}</button></Link>
        </div>
        <div className="flex2">
        </div>
      </div>
    </section>
  );
}
