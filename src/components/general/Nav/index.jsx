import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../../logo.svg";
import fb from "../../../images/home/fb.svg";
import insta from "../../../images/home/insta.svg";
import search from "../../../images/home/searchicon.svg";
import globus from "../../../images/home/globus.svg";
import "./index.css";

export default function Nav() {
  const [clickedMenuButton, setClickedMenuButton] = useState(false);
  const handleClick = () => {
    setClickedMenuButton(!clickedMenuButton);
  }
  return (
    <nav className='nav'>
      <div className={`container ${ clickedMenuButton && 'clicked-menuList'}`}>
        <div className="left">
          <NavLink to="/"><img className='logo' src={logo} alt='search' /></NavLink>
        </div>
        <div className="center">
          <ul onClick={(e)=>{e.target.nodeName === 'A' && setClickedMenuButton(false)}}>
            <li><NavLink to="about">HAQQIMIZDA</NavLink></li>
            <li><NavLink to='map'>SATIŞ MƏNTƏQƏLƏRİ</NavLink></li>
            <li><NavLink to='news'>XƏBƏRLƏR</NavLink></li>
            <li><NavLink to='products'>MƏHSULLAR</NavLink></li>
            <li><NavLink to="contact">ƏLAQƏ</NavLink></li>
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
          <div className="search-wrapper">
            <img src={search} alt='search' />
            <input type='text' name='search' />
          </div>
          <div className="icons-wrapper">
            <a href="https://www.facebook.com"><img src={fb} alt='facebook' /></a>
            <a href="https://www.instagram.com"><img src={insta} alt='instagram' /></a>
            <div className="lang-container">
              <img src={globus} alt='languages' />
              <ul className="lang-wrapper">
                <li>AZ</li>
                <li>RU</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}
