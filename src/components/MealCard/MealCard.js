import './MealCard.scss';

function MealCard({ meal, onDelete }) {
  return (
    <article className="meal-card">
      <div className="meal-card__meal-container">
        <div className="meal-card__title">{meal.title}</div>
        <div className="meal-card__type-button">
          <div className="meal-card__type">{meal.type}</div>
          <button className="meal-card__button" onClick={onDelete}></button>
        </div>
      </div>
    </article>
  );
}

export default MealCard;