import React, { useState } from "react";
import "./index.css";

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

  return (
    <>
      {!showReadProduct ? (
        <section className="products-main">
          <div className="products-container">
            <div className="categories">
              <div className="cat-div">
                <h3 className="h3-cat">Kateqoriya</h3>
                <button className="clean-btn" onClick={handleResetCategories}>
                  təmizlə
                </button>
              </div>
              <p className="headp">-Şəki şərabı</p>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("SekiHamısı")}
                  onChange={() => handleCategoryChange("SekiHamısı")}
                />
                Hamısı
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Yüngül şərablar")}
                  onChange={() => handleCategoryChange("Yüngül şərablar")}
                />
                Yüngül şərablar
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Portveyn")}
                  onChange={() => handleCategoryChange("Portveyn")}
                />
                Portveyn
              </label>
              <p className="headp">-Azabrau</p>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("AzabrauHamısı")}
                  onChange={() => handleCategoryChange("AzabrauHamısı")}
                />
                Hamısı
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Alkaqolsuz içkilər")}
                  onChange={() => handleCategoryChange("Alkaqolsuz içkilər")}
                />
                Alkaqolsuz içkilər
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(
                    "Yüksək alkoqollu içkilər"
                  )}
                  onChange={() =>
                    handleCategoryChange("Yüksək alkoqollu içkilər")
                  }
                />
                Yüksək alkoqollu içkilər
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes("Köpüklü şərablar")}
                  onChange={() => handleCategoryChange("Köpüklü şərablar")}
                />
                Köpüklü şərablar
              </label>
            </div>

            <div className="products-filter">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product">
                  <img
                    src={require(`../../../images/home/${product.img}`)}
                    alt={product.name}
                  />
                  <h3>{product.name}</h3>
                  <p>{product.sort}</p>
                  <p>{product.alcohol}</p>
                  <p>{product.madeIn}</p>
                  <button
                    onClick={() => {
                      setShowReadProduct(true);
                      setClickedId(product.id);
                    }}
                  >
                    Ətraflı
                  </button>
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
                clickedId === product.id && (
                  <div>
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
                        <h4 className="product-h4">Mənşəyi</h4>
                        <p className="product-p">{product.madeIn}</p>
                        <hr className="product-hr" />
                        <h4 className="product-h4">Alkoqol dərəcəsi</h4>
                        <p className="product-p">{product.alcohol}</p>
                        <hr className="product-hr" />
                        <h4 className="product-h4">İstehsal ili</h4>
                        <p className="product-p">{product.productionYear}</p>
                        <hr className="product-hr" />
                        <h4 className="product-h4">Məhsul haqqında</h4>
                        <p className="product-p">{product.about}</p>
                        <img
                          className="wolt"
                          src={require("../../../images/home/wolt.png")}
                          alt="Image 1"
                        />
                      </div>
                    </div>
                    <div className="container-product">
                      <div className="composition">
                      <img
                          className="wolt"
                          src={require("../../../images/home/grape.png")}
                          alt="Image 1"
                        />
                      <h4 className="product-h42">Tərkibi</h4>
                      <p className="product-p2">{product.ingredients}</p>
                      </div>
                      <div className="composition">
                      <img
                          className="composition-img"
                          src={require("../../../images/home/availability.png")}
                          alt="Image 1"
                        />
                        <h4 className="product-h43">Uygunluq</h4>
                        <p className="product-p2">{product.suitability}</p>
                      </div>
                      <div className="composition">
                      <img
                          className="composition-img"
                          src={require("../../../images/home/temperature.png")}
                          alt="Image 1"
                        />
                        <h4 className="product-h43">Temperatur</h4>
                        <p className="product-p2">{product.temperatur}</p>
                      </div>
                      <div className="composition">
                      <img
                          className="composition-img"
                          src={require("../../../images/home/storage.png")}
                          alt="Image 1"
                        />
                        <h4 className="product-h43">Saxlama forması</h4>
                        <p className="product-p2">{product.storageForm}</p>
                      </div>
                    </div>
                    <h3 className="product-h32">Digər Məhsullar</h3>
                    <div className="container-flex-products">
                    {filteredProducts.slice(0, 4).map((product) => (
                     
                <div key={product.id} className="product">
                  <img
                    src={require(`../../../images/home/${product.img}`)}
                    alt={product.name}
                  />
                  <h3>{product.name}</h3>
                  <p>{product.sort}</p>
                  <p>{product.alcohol}</p>
                  <p>{product.madeIn}</p>
                  <button
                    onClick={() => {
                      setShowReadProduct(true);
                      setClickedId(product.id);
                    }}
                  >
                    Ətraflı
                  </button>
                </div>
               
              ))}
               </div>
                  </div>
                )
              );
            })}
        </section>
      )}
    </>
  );
}
