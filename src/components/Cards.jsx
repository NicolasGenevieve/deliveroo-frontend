import "./Cards.css";
import { IoIosStar } from "react-icons/io";

const Cards = ({ meals }) => {
  return (
    <div className="cards">
      <div className="cardsDesc">
        <h3>{meals.title}</h3>
        <p className="descFormules">{meals.description}</p>
        <div className="pricepopular">
          <p className="price">{meals.price}€</p>
          <div className="popular">
            {meals.popular ? (
              <>
                <IoIosStar /> <span>Populaire</span>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="pictureCards">
        {meals.picture ? <img src={meals.picture} alt="description" /> : <></>}
      </div>
    </div>
  );
};

export default Cards;
