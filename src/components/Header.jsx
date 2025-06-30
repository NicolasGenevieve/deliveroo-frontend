import "./Header.css";
import Brand from "../components/Brand";

const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <Brand />
        </div>
      </header>
    </>
  );
};

export default Header;
