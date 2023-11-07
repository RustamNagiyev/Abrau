import successImg from '../../../images/contact/success.png';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


export default function Success() {
    const { t } = useTranslation();
    return (
        <div className='contact-error common-response'>
            <div className="content-container">
                <h3>{t("successTitle")}</h3>
                <img src={successImg} alt="template" />
                <p>{t("successMessage")}</p>
                <Link to={'/'}><button className='contact-btn'>{t("mainPage")}</button></Link>
                <Link to={'/contact'}>{t("goBack")}</Link>
            </div>
        </div>
    )
}

