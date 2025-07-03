import "./Formules.css";
import Cards from "./Cards";

const Formules = ({ categories, basket, setBasket }) => {
  return (
    <div>
      {categories.map((category) => (
        <div key={category.name} className="formules">
          {category.meals && category.meals.length > 0 ? (
            <>
              <h2>{category.name}</h2>
              <div className="displayCards">
                {category.meals.map((meals) => (
                  <Cards
                    key={meals.id}
                    meals={meals}
                    basket={basket}
                    setBasket={setBasket}
                  />
                ))}
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};

export default Formules;
