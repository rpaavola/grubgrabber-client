import './Groceries.scss';
import mBG from "../../assets/backgrounds/mobile/mobile-bg-grocery.jpg";
import BG from "../../assets/backgrounds/desktop/desktop-bg-grocery.jpg";
import Plate from "../../assets/images/grocery-list.png";
import { deleteAllMeals } from '../../JS/utils';
import { updateIngredient } from '../../JS/utils';
import { getIngredients } from "../../JS/utils";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Groceries({ quantity, ingredient }) {

    const navigate = useNavigate();
    const [ingredients, setIngredients] = useState();

    useEffect(() => {
        getIngredients()
            .then((ingredients) => setIngredients(ingredients))
    }, []);


    if (!ingredients) {
        return <div>loading...</div>;
    }

    const lineThroughHandle = (ingredient) => {
        if (ingredient.completed === 1) { ingredient.completed = 0 }
        else { ingredient.completed = 1 }
        updateIngredient(ingredient.mealId, ingredient.id, ingredient.completed);
        setIngredients([...ingredients])
    };

    const handleClearList = () => {
        deleteAllMeals();
        setIngredients([]);
        navigate("/aboutus")
    };

    return (
        <div>
            <section className="groceries">
                <div className="groceries__plate-container">
                    <img src={Plate} alt="groceries plate" className="groceries__plate" />
                </div>
                <img src={mBG} alt="grocerybag" className="groceries__background-mobile" />
                <img src={BG} alt="grocerybag" className="groceries__background" />
                <div className="groceries__container">
                    {ingredients.map((ingredient) =>
                        <div onClick={() => { lineThroughHandle(ingredient) }} className={`groceries__ingredient-item ${ingredient.completed === 1 ? "groceries__ingredient-item--completed" : ""}`} key={ingredient.id}>{ingredient.quantity} {ingredient.ingredient}</div>)}
                    <button className="groceries__button" onClick={handleClearList}></button>
                </div>
            </section>
        </div>
    );
}

export default Groceries;