import { useState } from "react";
import "./index.css";
import axios from "axios";

export default function Main() {
  const [inputValues, setInputValues] = useState({});
  const [allInputs, setAllInputs] = useState([]);

  const handleInputOnchanges = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    let allInputsArray = [...allInputs];
    !allInputs.includes(e.target) && allInputsArray.push(e.target);
    setAllInputs(allInputsArray);
  }

  const submitContactData = (e) => {
    e.preventDefault();
    
    // // clear all input values after submit:
    // allInputs.length === 5 && allInputs.forEach((element) => {
    //   element.value = ''
    // })

    // axios({
    //   method: 'POST',
    //   url: 'http://localhost:3000/contact',
    //   data: inputValues
    // }).then(response => {
    //   console.log(response);
    // }).then(error => {
    //   console.log(error);
    // })

    console.log(inputValues);
    // console.log(window.location.pathname = '/success');
    // console.log(window.location.pathname = '/error');

  }
  return (
    <section className="main-contact">
      <div className="top">
        <div className="container-contact">
          <div className="flex-contact">
            <h2>Ünvan</h2>
            <p>Port Baku,Neftchilar Avenue 153,Baku Azerbaijan</p>
          </div>
          <div className="flex-contact">
            <h2>Telefon</h2>
            <p>+944 50 123 45 67</p>
            <p>+944 50 123 45 67</p>
          </div>
          <div className="flex-contact">
            <h2>e-mail</h2>
            <p>info@azabrau.az</p>
          </div>
        </div>
      </div>
      <div className="common-input">
        <form onSubmit={submitContactData}>
          <div className="flex-input">
            <input type="text" placeholder="Adınız" autoComplete="off" name="name" onChange={handleInputOnchanges} required />
            <input type="text" placeholder="Soyadınız" name="surname" onChange={handleInputOnchanges} required />
          </div>
          <div className="flex-input">
            <input type="email" placeholder="E-mail adresi" name="email" autoComplete="off" onChange={handleInputOnchanges} required />
            <input type="tel" placeholder="Telefon nömrəsi" pattern="^\d{9,10}$" name="phone" autoComplete="off" onChange={handleInputOnchanges} required />
          </div>
          <textarea placeholder="Əlavə qeyd" name="note" required onChange={handleInputOnchanges} />
          <button type="submit" className="contact-btn">Ətraflı</button>
        </form>
      </div>
    </section>
  );
}
