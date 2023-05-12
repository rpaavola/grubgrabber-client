import './Groceries.scss';
import mBG from "../../assets/backgrounds/mobile/mobile-bg-grocery.jpg";
import BG from "../../assets/backgrounds/desktop/desktop-bg-grocery.jpg";
import Plate from "../../assets/images/grocery-list.png";

function Groceries() {

    function strikeText(fieldObj) {
        var style = (fieldObj.style.textDecoration != 'line-through') ? 'line-through' : 'none';
        fieldObj.style.textDecoration = style;
        return true;
    }

    return (
        <div>
            <section className="groceries">
                <div className="groceries__plate-container">
                    <img src={Plate} alt="groceries plate" className="groceries__plate" />
                </div>
                <img src={mBG} alt="grocerybag" className="groceries__background-mobile" />
                <img src={BG} alt="grocerybag" className="groceries__background" />
                <div className="groceries__container">
                    <div className="groceries__item" onclick="strikeText()">eggs</div>
                    <div className="groceries__item">eggs</div>
                    <div className="groceries__item">eggs</div>
                    <div className="groceries__item">eggs</div>
                    <div className="groceries__item">eggs</div>
                    <div className="groceries__item">eggs</div>
                    <div className="groceries__item">eggs</div>
                    <div className="groceries__item">eggs</div>
                    <div className="groceries__item">eggs</div>
                    <div className="groceries__item">eggs</div>
                    <div className="groceries__item">eggs</div>
                    <div className="groceries__item">eggs</div>
                    <div className="groceries__item">eggs</div>
                    <div className="groceries__item">eggs</div>
                    <div className="groceries__item">eggs</div>
                    <div className="groceries__item">eggs</div>
                </div>
            </section>
        </div>
    );
}

export default Groceries;