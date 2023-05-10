import './PlannedMeals.scss';
import mBG from "../../assets/backgrounds/mobile/mobile-bg-planned.jpg";
import BG from "../../assets/backgrounds/desktop/desktop-bg-planned.jpg";

function PlannedMeals() {
    return (
        <div>
            <section className="planned-meals">
                <img src={mBG} alt="food prep themed background" className="planned-meals__background-mobile" />
                <img src={BG} alt="food prep themed background" className="planned-meals__background" />

            </section>
        </div>
    );
}

export default PlannedMeals;