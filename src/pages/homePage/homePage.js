import './HomePage.scss';
import BG from "../../assets/backgrounds/desktop/desktop-bg-concrete.jpg";
import Splash from "../../assets/images/logo-main.png";

function HomePage() {
  return (
    <div>
      <section className="home-page">
        <img src={BG} alt="concrete background" className="home-page__background" />
        <img src={Splash} alt="app name and grocery hero" className="home-page__splash" />
      </section>
    </div>
  );
}

export default HomePage;