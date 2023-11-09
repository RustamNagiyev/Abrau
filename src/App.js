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
  const [switchedLanguage, setSwitchedLanguage] = useState("az");

  useEffect(() => {
    const endpoints = [
      {
        url:
          `https://azabrau-database${
            switchedLanguage === "ru" ? "-russian" : ""
          }.vercel.app` + PRODUCTS_URL,
        property: "products",
      },
      {
        url:
          `https://azabrau-database${
            switchedLanguage === "ru" ? "-russian" : ""
          }.vercel.app` + NEWS_URL,
        property: "news",
      },
      {
        url:
          `https://azabrau-database${
            switchedLanguage === "ru" ? "-russian" : ""
          }.vercel.app` + MAP_URL,
        property: "map",
      },
      {
        url:
          `https://azabrau-database${
            switchedLanguage === "ru" ? "-russian" : ""
          }.vercel.app` + ABOUTDATA_URL,
        property: "aboutData",
      },
      {
        url:
          `https://azabrau-database${
            switchedLanguage === "ru" ? "-russian" : ""
          }.vercel.app` + AWARDS_URL,
        property: "awards",
      },
    ];

    const fetchData = async (url, stateProperty) => {
      try {
        const response = await axios.get(url);
        setData((prevData) => ({
          ...prevData,
          [stateProperty]: response.data,
        }));
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
        setErrors((prevErrors) => [...prevErrors, error]);
        console.log(errors);
      }
    };

    // Fetch data for each URL and update the corresponding state property
    endpoints.forEach(({ url, property }) => fetchData(url, property));
  }, [switchedLanguage, errors]);

  const handleSetClickedProductIdFromNavAndProducts = (id) => {
    setClickedProductId(id);
  };

  const setSwitchedLanguageFromNav = (lang) => {
    setSwitchedLanguage(lang);
  };

  return (
    <div className="App">
      <Nav
        products={data.products}
        handleSetClickedPId={handleSetClickedProductIdFromNavAndProducts}
        setSwitchedLanguageFromNav={setSwitchedLanguageFromNav}
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
