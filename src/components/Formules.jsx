import "./Formules.css";
import Cards from "./Cards";

const Formules = ({ categories }) => {
  return (
    <div>
      {categories.map((category) => (
        <div key={category.name} className="formules">
          {category.meals && category.meals.length > 0 ? (
            <>
              <h2>{category.name}</h2>
              <div className="displayCards">
                {category.meals.map((meals) => (
                  <Cards key={meals} meals={meals} />
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
