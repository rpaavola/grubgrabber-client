import './PlannedMeals.scss';
import mBG from "../../assets/backgrounds/mobile/mobile-bg-planned.jpg";
import BG from "../../assets/backgrounds/desktop/desktop-bg-planned.jpg";
import Plate from "../../assets/images/planned-meals.png";

function PlannedMeals({ title, type, quantity, ingredient }) {
    return (
        <div>
            <section className="planned-meals">
                <div className="planned-meals__plate-container">
                    <img src={Plate} alt="planned meals plate" className="planned-meals__plate" />
                </div>
                <img src={mBG} alt="food prep themed background" className="planned-meals__background-mobile" />
                <img src={BG} alt="food prep themed background" className="planned-meals__background" />
                <div className="planned-meals__container">
                    <div className="planned-meals__meal-container">
                        <form className="planned-meals__form">
                            <div className="planned-meals__title">Cheese Cake</div>
                            <div className="planned-meals__type">dessert</div>
                            <ul className="planned-meals__ing-list">
                                <li className="planned-meals__list-item">2x eggs</li>
                                <li className="planned-meals__list-item">2x eggs</li>
                                <li className="planned-meals__list-item">2x eggs</li>
                                <li className="planned-meals__list-item">2x eggs</li>
                                <li className="planned-meals__list-item">2x eggs</li>
                                <li className="planned-meals__list-item">2x eggs</li>
                                <li className="planned-meals__list-item">2x eggs</li>
                                <li className="planned-meals__list-item">2x eggs</li>
                            </ul>
                            <button className="planned-meals__button">DELETE</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PlannedMeals;

{/* <form className="planned-meals__form">
<div className="planned-meals__">{title}</div>
<div className="planned-meals__">{type}</div>
<ul>
    <li>{quantity} {ingredient}</li>
</ul>
<button className="planned-meals__">DELETE</button>
</form> */}