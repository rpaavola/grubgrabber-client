import './PlannedMeals.scss';
import mBG from "../../assets/backgrounds/mobile/mobile-bg-planned.jpg";
import BG from "../../assets/backgrounds/desktop/desktop-bg-planned.jpg";
import Plate from "../../assets/images/planned-meals.png";
import MealCard from '../../components/MealCard/MealCard';
import { getMeals, deleteMeal } from "../../JS/utils";
import { useEffect, useState } from "react";
function PlannedMeals({ title, type }) {

    const [meals, setMeals] = useState();

    useEffect(() => {
        getMeals()
            .then((meals) => setMeals(meals))
    }, []);

    const handleDelete = (mealId) => {
        deleteMeal(mealId);
        const filteredMealList = meals.filter((meal) => meal.id !== mealId);
        setMeals(filteredMealList);
    };

    if (!meals) {
        return <div>loading...</div>;
    }

    return (
        <div>
            <section className="planned-meals">
                <div className="planned-meals__plate-container">
                    <img src={Plate} alt="planned meals plate" className="planned-meals__plate" />
                </div>
                <img src={mBG} alt="food prep themed background" className="planned-meals__background-mobile" />
                <img src={BG} alt="food prep themed background" className="planned-meals__background" />
                <div className="planned-meals__container">
                    {meals.map((meal) => <MealCard
                        key={meal.id}
                        meal={meal}
                        onDelete={() => { handleDelete(meal.id) }} />)}
                </div>
            </section>
        </div>
    );
}

export default PlannedMeals;