import './MealBuild.scss';
import mBG from "../../assets/backgrounds/mobile/mobile-bg-build.jpg";
import BG from "../../assets/backgrounds/desktop/desktop-bg-build.jpg";

function MealBuild() {
    return (
        <div>
            <section className="meal-build">
                <img src={mBG} alt="cutting board background" className="meal-build__background-mobile" />
                <img src={BG} alt="cutting board background" className="meal-build__background" />

            </section>
        </div>
    );
}

export default MealBuild;