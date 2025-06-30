import "./Description.css";

const Description = () => {
  return (
    <>
      <div className="textDescription">
        <h1>Le Pain Quotidien - Montorgueil</h1>
        <p className="description">
          Profitez de chaque plaisir de la vie quotidienne. Le Pain Quotidien
          propose des ingrédients simples et sains, du bon pain, des fruits et
          des légumes frais et de saison issus de l'agriculture biologique.
        </p>
      </div>
      <div className="photoDescription">
        <img src="../../src/assets/img/description.png" alt="description" />
      </div>
    </>
  );
};

export default Description;
