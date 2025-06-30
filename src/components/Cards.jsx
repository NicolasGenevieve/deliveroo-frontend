import "./Cards.css";
import { IoIosStar } from "react-icons/io";

const Cards = () => {
  return (
    <div className="cards">
      <div className="cardsDesc">
        <h3>Brunch authentique 1 personne</h3>
        <p className="descFormules">
          Assiette de jambon cuit, jambon fumeì, terrine, comté bio &
        </p>
        <div className="pricepopular">
          <p className="price">25,00€</p>
          <div className="popular">
            <IoIosStar /> <span>Populaire</span>
          </div>
        </div>
      </div>
      <div className="pictureCards">
        <img src="../../src/assets/img/description.png" alt="description" />
      </div>
    </div>
  );
};

export default Cards;
