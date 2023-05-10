import './Groceries.scss';
import mBG from "../../assets/backgrounds/mobile/mobile-bg-grocery.jpg";
import BG from "../../assets/backgrounds/desktop/desktop-bg-grocery.jpg";

function Groceries() {
    return (
        <div>
            <section className="groceries">
                <img src={mBG} alt="grocerybag" className="groceries__background-mobile" />
                <img src={BG} alt="grocerybag" className="groceries__background" />
            </section>
        </div>
    );
}

export default Groceries;