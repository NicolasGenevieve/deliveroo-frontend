import "./Brand.css";
import logo from "../../src/assets/img/logo.svg";

const Brand = () => {
  return (
    <div className="brand">
      <img src={logo} alt="calculatrice" />
      {/* <span>Ready To Go</span> */}
    </div>
  );
};

export default Brand;
