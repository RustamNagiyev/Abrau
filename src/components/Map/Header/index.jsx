import "./index.css";
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  return (
    <section className="header-map">
      <h1>{t("salePlaces")}</h1>
    </section>
  )
}
