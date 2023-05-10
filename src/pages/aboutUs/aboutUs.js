import './AboutUs.scss';
import BG from "../../assets/backgrounds/desktop/desktop-bg-concrete.jpg";
import Logo from "../../assets/images/logo-textured.png";
import Plate from "../../assets/images/desktop-plate.png";

function AboutUs() {
    return (
        <div>
            <section className="about-us">
                <img src={BG} alt="concrete background" className="about-us__background" />
                <div className="about-us__background-desktop-container">
                    <img src={Logo} alt="logo" className="about-us__background-logo" />
                    <img src={Plate} alt="plate" className="about-us__background-plate" />
                </div>
            </section>
        </div>
    );
}

export default AboutUs;