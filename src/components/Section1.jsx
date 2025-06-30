import "./Section1.css";
import Description from "./Description";

const Section1 = ({ title, description, picture }) => {
  return (
    <section className="section1 container">
      <Description title={title} description={description} picture={picture} />
    </section>
  );
};

export default Section1;
