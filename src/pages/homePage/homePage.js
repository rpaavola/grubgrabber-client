import './homePage.scss';
import BG from "../../assets/backgrounds/desktop/desktop-bg-concrete.jpg";
import Splash from "../../assets/images/logo-main.png";

function homepage() {
  return (
    <section className="homepage">
      <img src={BG} className="homepage__background" />
      <img src={Splash} className="homepage__splash" />

    </section>
  );
}

export default homepage;