import React, { useState } from 'react';
import './index.css';

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

  return (
    <section className="brends">
      <h2>Brendlər</h2>
      <div className="brendscontainer" style={{ height: `${showContent ? '100vmin' : 'unset'}`}}>
        {showContent ? (
          <>
            <div className="left">
              <img src={require('../../../images/home/left.png')} alt="Image 1" />
              <div className="text-wrapper">
                <h2>AZERBAYCAN ŞƏRABI</h2>
                <button className='transparent-bg' onClick={handleButtonClick1}>Ətraflı</button>
              </div>
            </div>
            <div className="right">
              <img src={require('../../../images/home/rightmain.png')} alt="Image 2" />
              <div className="text-wrapper">
                <h2>RUSİYA ŞƏRABI</h2>
                <button className='transparent-bg' onClick={handleButtonClick2}>Ətraflı</button>
              </div>
            </div>
          </>
        ) : (
          <>
            {showText1 ? (
              <div className="img1">

                <div className="divflex1">
                  <h3 className='button' onClick={handleBackButtonClick}>&#10006;</h3>
                  <h2>Rusiya şərabı</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book standard dummy text
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
                <div className='divflex2'>
                  <img className='imgru' src={require('../../../images/home/img2.png')} alt="Image 1" />
                </div>
              </div>
            ) : (
              <div className="img2">

                <div className="divflex1">
                  <h3 className='button' onClick={handleBackButtonClick}>&#10006;</h3>
                  <h2>Azərbaycan şərabı</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book standard dummy text
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
                <div className='divflex2'>
                  <img className='imgaz' src={require('../../../images/home/img1.png')} alt="Image 2" />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}