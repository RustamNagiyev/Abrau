import "./index.css";
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { t } = useTranslation();
  return (
    <section className="header-products">
      <h2 className="header-h2">{t("products")}</h2>
    </section>
  )
}
