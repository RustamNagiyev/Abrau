import { NavLink } from 'react-router-dom';
import logo from "../../../logo.svg";
import fb from "../../../images/home/fb.svg";
import insta from "../../../images/home/insta.svg";
import search from "../../../images/home/searchicon.svg";
import globus from "../../../images/home/globus.svg";
import "./index.css";

export default function Nav() {
  return (
    
      <nav className='nav'>
      <div className='container'>
        <div className="left">
            {/* <img className='logo' src={require('../../../logo.svg').default}/> */}
            <NavLink><img  className='logo' src={logo} alt='search'/></NavLink>
        </div>
        <div className="center">
            <ul>
            <li><NavLink>HAQQIMIZDA</NavLink></li>
            <li><NavLink>AZ ABRAU</NavLink></li>
            <li><NavLink>SATIŞ MƏNTƏQƏLƏRİ</NavLink></li>
            <li><NavLink>XƏBƏRLƏR</NavLink></li>
            <li><NavLink>ƏLAQƏ</NavLink></li>
            </ul> 
        </div>
        <div className="right">
            <div className="search-wrapper">
            <img src={search} alt='search'/>
            <input type='text'/>
            </div>
            <img src={fb} alt='search'/>
            <img src={insta} alt='search'/>
            <img src={globus} alt='search'/>
        </div>
      </div>
      </nav>
    
  )
}
