import React, { useState } from "react";
import "./index.css";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

export default function Main(props) {
  const [showReadProduct, setShowReadProduct] = useState(false);
  const [clickedId, setClickedId] = useState(1);
  const { products } = props;
  const [selectedCategories, setSelectedCategories] = useState([]);


  //xeta almamaq ucun
  // if (!props.products) {
  //   return null;
  // }
  //temizlemek ucun
  const handleResetCategories = () => {
    setSelectedCategories([]);
  };
  // Kategori seçimini yönetmek
  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Seçilen kategoriyalara göre mehsullari filterlemek
  const filteredProducts =
    products !== undefined
      ? products.filter((product) => {
        const { light, portveyn, alcohol, sparklingWine, madeIn } = product;
        if (
          selectedCategories.length === 0 ||
          (selectedCategories.includes("Yüngül şərablar") && light) ||
          (selectedCategories.includes("Portveyn") && portveyn) ||
          (selectedCategories.includes("SekiHamısı") && madeIn === "Şəki") ||
          (selectedCategories.includes("AzabrauHamısı") &&
            madeIn === "Ağdam") ||
          (selectedCategories.includes("AzabrauHamısı") &&
            madeIn === "Bakı") ||
          (selectedCategories.includes("Alkaqolsuz içkilər") &&
            alcohol === "0%") ||
          (selectedCategories.includes("Yüksək alkoqollu içkilər") &&
            alcohol === "19%") ||
          (selectedCategories.includes("Köpüklü şərablar") && sparklingWine)
        ) {
          return true; // Seçilen kategoriyalardan her hansi birine aid mehsullari goster
        } else {
          return false; // mehsullari gizlet
        }
      })
      : [];

  const { t } = useTranslation();
  return (
    <div className="all-products-sections">
      {!showReadProduct & window.location.search === '' ? (
        <section className="products-main">
          <div className="page-info-nav">
            <Link to={'/'}><h4>{t("mainPage")} /</h4></Link>
            <span>&nbsp; {t("products")}</span>
          </div>
          <div className="products-container">
            <div className="categories">
              <div className="cat-div">
                <h3 className="h3-cat">{t("category")}</h3>
                <button className="clean-btn" onClick={handleResetCategories}>
                  {t("clear")}
                </button>
              </div>
              <p className="headp">-{t("homeHeaderTitle2")}</p>
              <label>
                <span className='checkbox-container'>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("SekiHamısı")}
                    onChange={() => handleCategoryChange("SekiHamısı")}
                  />
                  <span></span>
                </span>
                {t("all")}
              </label>
              <label>
                <span className='checkbox-container'>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Yüngül şərablar")}
                    onChange={() => handleCategoryChange("Yüngül şərablar")}
                  />
                  <span></span>
                </span>
                {t("lightWines")}
              </label>
              <label>
                <span className='checkbox-container'>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Portveyn")}
                    onChange={() => handleCategoryChange("Portveyn")}
                  />
                  <span></span>
                </span>
                {t("portveyn")}
              </label>
              <p className="headp">-{t("azabrau")}</p>
              <label>
                <span className='checkbox-container'>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("AzabrauHamısı")}
                    onChange={() => handleCategoryChange("AzabrauHamısı")}
                  />
                  <span></span>
                </span>
                {t("all")}
              </label>
              <label>
                <span className='checkbox-container'>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Alkaqolsuz içkilər")}
                    onChange={() => handleCategoryChange("Alkaqolsuz içkilər")}
                  />
                  <span></span>
                </span>
                {t("alcoholless")}
              </label>
              <label>
                <span className='checkbox-container'>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(
                      "Yüksək alkoqollu içkilər"
                    )}
                    onChange={() =>
                      handleCategoryChange("Yüksək alkoqollu içkilər")
                    }
                  />
                  <span></span>
                </span>
                {t("highAlcohol")}
              </label>
              <label>
                <span className='checkbox-container'>
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes("Köpüklü şərablar")}
                    onChange={() => handleCategoryChange("Köpüklü şərablar")}
                  />
                  <span></span>
                </span>
                {t("sparklingWines")}
              </label>
            </div>

            <div className="products-filter">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product">
                  <img
                    src={require(`../../../images/home/${product.img}`)}
                    alt={product.name}
                  />
                  <div className="content-container">
                    <h3>{product.name}</h3>
                    <p>{product.sort}</p>
                    <p>{product.alcohol}</p>
                    <p>{product.madeIn}</p>
                    <button
                      onClick={() => {
                        setShowReadProduct(true);
                        setClickedId(product.id);
                        window.scrollTo(0, 0);
                      }}
                    >
                      {t("moreInfoButton")}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section>
          {products &&
            products.map((product) => {
              return (
                ((props.clickedProductId === null) ? (clickedId === product.id) : (product.id === props.clickedProductId)) && (
                  <div key={product.id}>
                    <div className="container-clicked">
                      <div className="back-imgClicked">
                        <img
                          src={require(`../../../images/home/${product.img}`)}
                          alt={product.name}
                        />
                      </div>
                      <div className="flex-product">
                        <h3 className="product-h3">{product.name}</h3>
                        <p className="product-p">{product.advertText}</p>
                        <hr className="product-hr" />
                        <h4 className="product-h4">{t("origin")}</h4>
                        <p className="product-p">{product.madeIn}</p>
                        <hr className="product-hr" />
                        <h4 className="product-h4">{t("alcoholDegree")}</h4>
                        <p className="product-p">{product.alcohol}</p>
                        <hr className="product-hr" />
                        <h4 className="product-h4">{t("productionYear")}</h4>
                        <p className="product-p">{product.productionYear}</p>
                        <hr className="product-hr" />
                        <h4 className="product-h4">{t("aboutProduct")}</h4>
                        <p className="product-p">{product.about}</p>
                        <img
                          className="wolt"
                          src={require("../../../images/home/wolt.png")}
                          alt="wolt"
                        />
                      </div>
                    </div>
                    <div className="container-product">
                      <div className="composition">
                        <img
                          className="wolt"
                          src={require("../../../images/home/grape.png")}
                          alt="wolt"
                        />
                        <h4 className="product-h42">{t("ingredient")}</h4>
                        <p className="product-p2">{product.ingredients}</p>
                      </div>
                      <div className="composition">
                        <img
                          className="composition-img"
                          src={require("../../../images/home/availability.png")}
                          alt="availability"
                        />
                        <h4 className="product-h43">{t("suitability")}</h4>
                        <p className="product-p2">{product.suitability}</p>
                      </div>
                      <div className="composition">
                        <img
                          className="composition-img"
                          src={require("../../../images/home/temperature.png")}
                          alt="temperature"
                        />
                        <h4 className="product-h43">{t("temperature")}</h4>
                        <p className="product-p2">{product.temperatur}</p>
                      </div>
                      <div className="composition">
                        <img
                          className="composition-img"
                          src={require("../../../images/home/storage.png")}
                          alt="storage"
                        />
                        <h4 className="product-h43">{t("storageForm")}</h4>
                        <p className="product-p2">{product.storageForm}</p>
                      </div>
                    </div>
                    <h3 className="product-h32">{t("otherProducts")}</h3>
                    <div className="container-flex-products">
                      {filteredProducts.slice(0, 4).map((product) => (

                        <div key={product.id} className="product">
                          <img
                            src={require(`../../../images/home/${product.img}`)}
                            alt={product.name}
                          />
                          <div className="content-container">
                            <h3>{product.name}</h3>
                            <p>{product.sort}</p>
                            <p>{product.alcohol}</p>
                            <p>{product.madeIn}</p>
                            <button
                              onClick={() => {
                                setShowReadProduct(true);
                                setClickedId(product.id);
                                props.handleSetClickedPId(product.id);
                                window.scrollTo(0, 0);
                              }}
                            >
                              {t("moreInfoButton")}
                            </button>
                          </div>
                        </div>

                      ))}
                    </div>
                  </div>
                )
              );
            })}
        </section>
      )}
    </div>
  );
}
