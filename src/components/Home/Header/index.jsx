import "./index.css"
import { useTranslation } from 'react-i18next'


export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="home-header">
      <img src={require('../../../images/home/abrauheaderlogo.svg').default} alt="logo" />
      <p className='p1'>{t("homeHeaderP1")}</p>
      <h1>{t("homeHeaderTitle2")}</h1>
      <p className='p2'>{t("homeHeaderP2")} </p>
    </header>
  )
}
