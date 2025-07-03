import "./Section2.css";
import Formules from "./Formules";
import Basket from "./Basket";

const Section2 = ({ categories, basket, setBasket, counter, setCounter }) => {
  return (
    <main>
      <section className="section2 container">
        <Formules
          categories={categories}
          basket={basket}
          setBasket={setBasket}
          counter={counter}
          setCounter={setCounter}
        />
        <Basket
          basket={basket}
          counter={counter}
          setCounter={setCounter}
          setBasket={setBasket}
        />
      </section>
    </main>
  );
};

export default Section2;
