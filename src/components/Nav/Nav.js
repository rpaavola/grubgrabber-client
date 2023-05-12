import './Nav.scss';
import mBar from "../../assets/images/mobile-navbar3.png";
import tBar from "../../assets/images/tablet-navbar3.png";
import dBar from "../../assets/images/5k-navbar3.png";
import Arrow from "../../assets/icons/arrow.png";
import { NavLink } from "react-router-dom";


function Nav() {
  return (
    <div className="nav">
      <img src={Arrow} alt="arrow nav bar" className="nav-bar__arrow" />
      <nav className="nav-bar">
        <img src={mBar} alt="wood panel nav bar" className="nav-bar__m-bg" />
        <img src={tBar} alt="wood panel nav bar" className="nav-bar__t-bg" />
        <img src={dBar} alt="wood panel nav bar" className="nav-bar__d-bg" />
        <div className="nav-bar__container">
          <ul className="nav-bar__list">
            <NavLink to="/" className="nav-bar__item"><li className="nav-bar__item">HOME</li></NavLink>
            <NavLink to="/build" className="nav-bar__item"><li className="nav-bar__item">BUILD</li></NavLink>
            <NavLink to="/plannedmeals" className="nav-bar__item"><li className="nav-bar__item">PLANNED</li></NavLink>
            <NavLink to="/groceries" className="nav-bar__item"><li className="nav-bar__item">GROCERIES</li></NavLink>
            <NavLink to="/aboutus" className="nav-bar__item"><li className="nav-bar__item">ABOUT US</li></NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;