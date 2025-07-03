import "./Section2.css";
import Formules from "./Formules";
import Basket from "./Basket";

const Section2 = ({ categories, basket, setBasket }) => {
  return (
    <main>
      <section className="section2 container">
        <Formules
          categories={categories}
          basket={basket}
          setBasket={setBasket}
        />
        <Basket basket={basket} setBasket={setBasket} />
      </section>
    </main>
  );
};

export default Section2;
