import './MealBuild.scss';
import mBG from "../../assets/backgrounds/mobile/mobile-bg-build.jpg";
import BG from "../../assets/backgrounds/desktop/desktop-bg-build.jpg";
import Plate from "../../assets/images/meal-builder.png";
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function MealBuild() {

    const handleUpload = (e) => {
        e.preventDefault();

        // get the DOM object of form
        const form = e.target;

        // get the field values from form
        const title = form.title.value;
        const description = form.description.value;

        // adds logic/validation to confirm all fields filled
        if (!title) {
            alert("Enter title in order to continue")
            return;
        }

        if (!description) {
            alert("Enter description in order to continue")
            return;
        }

        // making an axios request to add upload to backend database
        axios
            .post(`${BASE_URL}/videos`, { title, description, image: "http://localhost:8080/images/image9.jpeg" })
            .then(() => {
                alert("Upload successful");

            })
            .catch(({ response }) => {
                alert(`${response.data}`);
            });
    };

    return (
        <div>
            <section className="meal-build">
                <div className="meal-build__plate-container">
                    <img src={Plate} alt="meal builder plate" className="meal-build__plate" />
                </div>
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
                                <option value="snack">Dessert</option>
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