import errorImg from '../../../images/contact/error.png'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

export default function Error() {
  const { t } = useTranslation();
  return (
    <div className='contact-error common-response'>
      <div className="content-container">
        <h3>{t("errorTitle")}</h3>
        <img src={errorImg} alt="template" />
        <p>{t("errorMessage")}</p>
        <Link to={'/'}><button className='contact-btn'>{t("mainPage")}</button></Link>
        <Link to={'/contact'}>{t("goBack")}</Link>
      </div>
    </div>
  )
}
