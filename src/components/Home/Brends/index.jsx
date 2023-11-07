import React, { useState } from 'react';
import './index.css';
import { useTranslation } from 'react-i18next';

export default function Brends() {
  const [showContent, setShowContent] = useState(true);
  const [showText1, setShowText1] = useState(true);

  const handleButtonClick1 = () => {
    setShowContent(false);
    setShowText1(false);
  };

  const handleButtonClick2 = () => {
    setShowContent(false);
    setShowText1(true);
  };

  const handleBackButtonClick = () => {
    setShowContent(true);
  };

  const { t } = useTranslation();
  return (
    <section className="brends">
      <h2>{t("homeBrendsTitle")}</h2>
      <div className="brendscontainer" style={{ height: `${showContent ? '100vmin' : 'unset'}` }}>
        {showContent ? (
          <>
            <div className="left">
              <img src={require('../../../images/home/left.png')} alt="template" />
              <div className="text-wrapper">
                <h2>{t("azWine")}</h2>
                <button className='transparent-bg' onClick={handleButtonClick1}>{t("moreInfoButton")}</button>
              </div>
            </div>
            <div className="right">
              <img src={require('../../../images/home/rightmain.png')} alt="template" />
              <div className="text-wrapper">
                <h2>{t("ruWine")}</h2>
                <button className='transparent-bg' onClick={handleButtonClick2}>{t("moreInfoButton")}</button>
              </div>
            </div>
          </>
        ) : (
          <>
            {showText1 ? (
              <div className="img1">

                <div className="divflex1">
                  <h3 className='button' onClick={handleBackButtonClick}>&#10006;</h3>
                  <h2>{t("ruWine")}</h2>
                  <p>{t("ruWineP1")} <br /> {t("ruWineP2")} <br /> {t("ruWineP3")}</p>
                </div>
                <div className='divflex2'>
                  <img className='imgru' src={require('../../../images/home/img2.png')} alt="template" />
                </div>
              </div>
            ) : (
              <div className="img2">

                <div className="divflex1">
                  <h3 className='button' onClick={handleBackButtonClick}>&#10006;</h3>
                  <h2>{t("azWine")}</h2>
                  <p>{t("azWineP1")} <br />{t("azWineP2")} <br />{t("azWineP3")}</p>
                </div>
                <div className='divflex2'>
                  <img className='imgaz' src={require('../../../images/home/img1.png')} alt="template" />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}