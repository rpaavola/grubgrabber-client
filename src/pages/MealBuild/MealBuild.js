import './MealBuild.scss';
import mBG from "../../assets/backgrounds/mobile/mobile-bg-build.jpg";
import BG from "../../assets/backgrounds/desktop/desktop-bg-build.jpg";
import Plate from "../../assets/images/meal-builder.png";
import { createMeal, createIngredient } from "../../JS/utils";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MealBuild() {

    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [ingredients, setIngredients] = useState([{ quantity: "", ingredient: "" }]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            alert("Enter title in order to continue")
            return;
        }

        if (!type) {
            alert("Select type in order to continue")
            return;
        }

        createMeal(title, type)
            .then((meal) => {
                const promises = [];
                for (let i = 0; i < ingredients.length - 1; i++) {
                    const ingredient = ingredients[i];
                    promises.push(createIngredient(meal.id, ingredient.quantity, ingredient.ingredient));
                } Promise.all(promises)
                    .then(() => {
                        navigate("/plannedmeals")
                    })
            });
    };

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleChangeType = (e) => {
        setType(e.target.value);
    };

    const handleIngredientChange = (e, index) => {
        const { name, value } = e.target;
        const ingredient = ingredients[index]
        if (name === "quantity") {
            ingredient.quantity = value
        } else if (name === "ingredient") {
            ingredient.ingredient = value
        }

        if (index === ingredients.length - 1 && ingredient.quantity && ingredient.ingredient) {
            setIngredients([...ingredients, { quantity: "", ingredient: "" }])
        } else {
            setIngredients([...ingredients])
        }
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
                    <form className="meal-build__form" onSubmit={handleSubmit}>
                        <label className="meal-build__label">Title:
                            <input type="text" className="meal-build__input-text" name="title" onChange={handleChangeTitle} value={title}></input>
                        </label>
                        <label className="meal-build__label"> Type:
                            <select className="meal-build__select" name="type" onChange={handleChangeType} value={type}>
                                <option value="" disabled>Please select</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                                <option value="snack">Snack</option>
                                <option value="snack">Dessert</option>
                            </select>
                        </label>
                        <div className="meal-build__label-qty">Qty:</div><div className="meal-build__label-ing">Ingredient:</div>
                        {ingredients.map((ingredient, index) => <div key={index} className="meal-build__qty-ing-container" >
                            <input type="text" className="meal-build__qty-input" name="quantity" onChange={e => handleIngredientChange(e, index)} value={ingredient.quantity}></input>
                            <input type="text" className="meal-build__ing-input" name="ingredient" onChange={e => handleIngredientChange(e, index)} value={ingredient.ingredient}></input>
                        </div>)}
                        <button className="meal-build__button" type="submit"></button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default MealBuild;