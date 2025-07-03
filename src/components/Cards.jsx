import "./Cards.css";
import { IoIosStar } from "react-icons/io";

const Cards = ({ meals, basket, setBasket, counter, setCounter }) => {
  return (
    <>
      {/* {basket.map((index)=>{})} */}
      <div
        className="cards"
        onClick={() => {
          const itemFound = basket.find((item) => item.id === meals.id);
          console.log(itemFound);

          if (itemFound) {
            const newBasket = basket.map((item) => {
              if (item.id === meals.id) {
                return {
                  ...item,
                  qty: item.qty + 1,
                };
              } else {
                return item;
              }
            });
            setBasket(newBasket);
          } else {
            const newBasket = [...basket];
            newBasket.push({
              id: meals.id,
              title: meals.title,
              qty: 1,
              price: meals.price,
            });
            setBasket(newBasket);
            setCounter(counter);
          }

          //console.log(newBasket);
          // newBasket.map((newitem) => console.log(newitem));

          // console.log(meals.title);
          // console.log(meals.price);}
        }}
      >
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
          {meals.picture ? (
            <img src={meals.picture} alt="description" />
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Cards;
