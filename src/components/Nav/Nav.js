import './Nav.scss';
import mBar from "../../assets/images/mobile-navbar.png";
import tBar from "../../assets/images/tablet-navbar.png";
import dBar from "../../assets/images/5k-navbar.png";

function Nav() {
  return (
    <div className="nav">
      <nav className="nav__bar">
        <img src={mBar} alt="wood panel nav bar" className="nav__bar-mobile" />
        <img src={tBar} alt="wood panel nav bar" className="nav__bar-tablet" />
        <img src={dBar} alt="wood panel nav bar" className="nav__bar-desktop" />
      </nav>
    </div>
  );
}

export default Nav;