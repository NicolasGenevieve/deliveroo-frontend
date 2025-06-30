import "./Formules.css";
import Cards from "./Cards";

const Formules = ({ categories }) => {
  return (
    <div>
      {categories.map((category) => (
        <div className="formules">
          <h2>{category.name}</h2>
          <div className="displayCards">
            <Cards />
            <Cards />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Formules;
