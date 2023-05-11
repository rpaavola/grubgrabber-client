import './MealBuild.scss';
import mBG from "../../assets/backgrounds/mobile/mobile-bg-build.jpg";
import BG from "../../assets/backgrounds/desktop/desktop-bg-build.jpg";

function MealBuild() {
    return (
        <div>
            <section className="meal-build">
                <img src={mBG} alt="cutting board background" className="meal-build__background-mobile" />
                <img src={BG} alt="cutting board background" className="meal-build__background" />
                <div className="meal-build__form-container">
                    <form className="meal-build__form" >
                        <label className="meal-build__label">Title:
                            <input type="text" className="meal-build__input-text" ></input>
                        </label>
                        <label className="meal-build__label"> Type:
                            <select className="meal-build__select">
                                <option value="" disabled selected>Please select</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                                <option value="snack">Snack</option>
                            </select>
                        </label>
                        <div className="meal-build__label-qty">Qty:</div><div className="meal-build__label-ing">Ingredient:</div>
                        <div className="meal-build__qty-ing-container" >
                            <input type="text" className="meal-build__qty-input" ></input>
                            <input type="text" className="meal-build__ing-input" ></input>
                        </div>
                        <div className="meal-build__qty-ing-container" >
                            <input type="text" className="meal-build__qty-input" ></input>
                            <input type="text" className="meal-build__ing-input" ></input>
                        </div>
                        <div className="meal-build__qty-ing-container" >
                            <input type="text" className="meal-build__qty-input" ></input>
                            <input type="text" className="meal-build__ing-input" ></input>
                        </div>
                        <div className="meal-build__qty-ing-container" >
                            <input type="text" className="meal-build__qty-input" ></input>
                            <input type="text" className="meal-build__ing-input" ></input>
                        </div>
                        <div className="meal-build__qty-ing-container" >
                            <input type="text" className="meal-build__qty-input" ></input>
                            <input type="text" className="meal-build__ing-input" ></input>
                        </div>
                        <div className="meal-build__qty-ing-container" >
                            <input type="text" className="meal-build__qty-input" ></input>
                            <input type="text" className="meal-build__ing-input" ></input>
                        </div>
                        <div className="meal-build__qty-ing-container" >
                            <input type="text" className="meal-build__qty-input" ></input>
                            <input type="text" className="meal-build__ing-input" ></input>
                        </div>
                        <div className="meal-build__qty-ing-container" >
                            <input type="text" className="meal-build__qty-input" ></input>
                            <input type="text" className="meal-build__ing-input" ></input>
                        </div>
                        <div className="meal-build__qty-ing-container" >
                            <input type="text" className="meal-build__qty-input" ></input>
                            <input type="text" className="meal-build__ing-input" ></input>
                        </div>
                        <div className="meal-build__qty-ing-container" >
                            <input type="text" className="meal-build__qty-input" ></input>
                            <input type="text" className="meal-build__ing-input" ></input>
                        </div>
                        <div className="meal-build__qty-ing-container" >
                            <input type="text" className="meal-build__qty-input" ></input>
                            <input type="text" className="meal-build__ing-input" ></input>
                        </div>
                        <button className="meal-build__button">SUBMIT</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default MealBuild;