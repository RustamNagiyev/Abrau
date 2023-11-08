import "./index.css"
import { useTranslation } from 'react-i18next';


export default function Header() {

  const { t } = useTranslation();
  return (
    <section className="header-contact">
      <h1>{t("contact")}</h1>
    </section>
  )
}
