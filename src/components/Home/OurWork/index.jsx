import { Link } from "react-router-dom"
import "./index.css"
import { useTranslation } from 'react-i18next'

export default function OurWork() {
  const { t } = useTranslation();
  return (
    <section className="ourwork">
      <div>
        <h2>{t("homeOurWorkTitle")}</h2>
        <p>{t("homeOurWorkP")}</p>
        <Link to={'/news'}><button className="black-bg">{t("moreInfoButton")}</button></Link>
      </div>
    </section>
  )
}
