import "./App.css";
import Header from "./components/Header.jsx";
import Section1 from "./components/Section1.jsx";
import Section2 from "./components/Section2.jsx";
import Footer from "./components/Footer.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [basket, setBasket] = useState([]);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://site--deliveroo-backend--7c4ycv44wqj9.code.run/"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // console.log(data);
  console.log(basket);
  // console.log(counter);

  // basket.map((item) => console.log(item.id));

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Header />
          <Section1
            title={data.restaurant.name}
            description={data.restaurant.description}
            picture={data.restaurant.picture}
          />
          <Section2
            categories={data.categories}
            basket={basket}
            setBasket={setBasket}
            counter={counter}
            setCounter={setCounter}
          />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
