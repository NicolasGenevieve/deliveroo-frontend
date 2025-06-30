import "./Section2.css";
import Formules from "./Formules";
import Basket from "./Basket";

const Section2 = ({ categories }) => {
  return (
    <main>
      <section className="section2 container">
        <Formules categories={categories} />
        <Basket />
      </section>
    </main>
  );
};

export default Section2;
