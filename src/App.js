import "./App.css";
import Nav from "./components/general/Nav";
import PropsData from "./components/PropsData";
import Footer from "./components/general/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  PRODUCTS_URL,
  NEWS_URL,
  MAP_URL,
  ABOUTDATA_URL,
  AWARDS_URL,
} from "./utils/BASE_URL";

function App() {
  const [data, setData] = useState({
    products: [],
    news: [],
    map: [],
    aboutData: [],
    awards: [],
  });
  const [clickedProductId, setClickedProductId] = useState(null);

  const [errors, setErrors] = useState([]);

  const fetchData = async (url, stateProperty) => {
    try {
      const response = await axios.get(url);
      setData((prevData) => ({ ...prevData, [stateProperty]: response.data }));
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
      setErrors((prevErrors) => [...prevErrors, error]);
      console.log(errors);
    }
  };

  useEffect(() => {
    const endpoints = [
      { url: PRODUCTS_URL, property: "products" },
      { url: NEWS_URL, property: "news" },
      { url: MAP_URL, property: "map" },
      { url: ABOUTDATA_URL, property: "aboutData" },
      { url: AWARDS_URL, property: "awards" },
    ];

    // Fetch data for each URL and update the corresponding state property
    endpoints.forEach(({ url, property }) => fetchData(url, property));
  }, []);

  const handleSetClickedProductIdFromNavAndProducts = (id) => {
    setClickedProductId(id);
  };

  return (
    <div className="App">
      <Nav
        products={data.products}
        handleSetClickedPId={handleSetClickedProductIdFromNavAndProducts}
      />
      <PropsData
        data={data}
        clickedProductId={clickedProductId}
        handleSetClickedPId={handleSetClickedProductIdFromNavAndProducts}
      />
      <Footer />
    </div>
  );
}

export default App;
