import "./Description.css";

const Description = ({ title, description, picture }) => {
  return (
    <>
      <div className="textDescription">
        <h1>{title}</h1>
        <p className="description">{description}</p>
      </div>
      <div className="photoDescription">
        <img src={picture} alt="description" />
      </div>
    </>
  );
};

export default Description;
