import { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from "../../../logo.svg";
import fb from "../../../images/home/fb.svg";
import insta from "../../../images/home/insta.svg";
import search from "../../../images/home/searchicon.svg";
import globus from "../../../images/home/globus.svg";
import "./index.css";


export default function Nav(prop) {
  const [clickedMenuButton, setClickedMenuButton] = useState(false);
  const [clickedSearchButton, setClickedSearchButton] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const searchInput = useRef();
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleClick = () => {
    setClickedMenuButton(!clickedMenuButton);
  }

  const { t } = useTranslation();
  return (
    <nav className='nav'>
      <div className={`container ${clickedMenuButton && 'clicked-menuList'}`}>
        <div className="left">
          <NavLink to="/"><img className='logo' src={logo} alt='search' /></NavLink>
        </div>
        <div className="center">
          <ul onClick={(e) => { e.target.nodeName === 'A' && setClickedMenuButton(false) }}>
            <li><NavLink to="about">{t("about")}</NavLink></li>
            <li><NavLink to='map'>{t("salePlaces")}</NavLink></li>
            <li><NavLink to='news'>{t("news")}</NavLink></li>
            <li><NavLink to='products'>{t("products")}</NavLink></li>
            <li><NavLink to="contact">{t("contact")}</NavLink></li>
          </ul>
        </div>
        <div className={`center-menu-button ${clickedMenuButton && 'clicked'}`} onClick={handleClick}>
          <div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="right">
          <div className='search-container'>
            <div className={`${clickedSearchButton ? "search-wrapper clicked" : "search-wrapper"}`}>
              <img src={search} alt='search' onClick={() => { setClickedSearchButton(!clickedSearchButton) }} />
              <input type='text' name='search' ref={searchInput} onChange={(e) => { setSearchValue(e.target.value); }} />
            </div>
            <ul>
              {clickedSearchButton && prop.products && prop.products.map((product) => {
                return searchValue !== '' && product.name.toLowerCase().includes(searchValue) && <li key={product.id}><Link to={`/products?searching`} onClick={() => { prop.handleSetClickedPId && prop.handleSetClickedPId(product.id); window.scrollTo(0, 0); setSearchValue(''); setClickedSearchButton(false); searchInput.current.value = '' }}>{product.name}</Link></li>
              })}
            </ul>
          </div>
          <div className="icons-wrapper">
            <a href="https://www.facebook.com"><img src={fb} alt='facebook' /></a>
            <a href="https://www.instagram.com"><img src={insta} alt='instagram' /></a>
            <div className="lang-container">
              <img src={globus} alt='languages' />
              <ul className="lang-wrapper">
                <li onClick={() => { changeLanguage('az'); prop.setSwitchedLanguageFromNav('az') }} style={{ color: i18n.resolvedLanguage === 'az' ? 'black' : 'white' }}>AZ</li>
                <li onClick={() => { changeLanguage('ru'); prop.setSwitchedLanguageFromNav('ru') }} style={{ color: i18n.resolvedLanguage === 'ru' ? 'black' : 'white' }}>RU</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}
