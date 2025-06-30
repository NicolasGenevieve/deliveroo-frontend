import "./App.css";
import Header from "./components/Header.jsx";
import Section1 from "./components/Section1.jsx";
import Footer from "./components/Footer.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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

  console.log(data);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Header />
          <Section1 />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
