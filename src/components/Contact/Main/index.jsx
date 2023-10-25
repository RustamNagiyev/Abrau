import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";

export default function Main() {
  const [inputValues, setInputValues] = useState({});
  const [allInputs, setAllInputs] = useState([]);

  // useEffect(() => {
  //   axios
  // }, [])

  const handleInputOnchanges = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    let allInputsArray = [...allInputs, !allInputs.includes(e.target) && e.target];
    console.log(allInputsArray);
    setAllInputs(allInputsArray);
  }

  const submitContactData = (e) => {
    e.preventDefault();
    console.log(inputValues);
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
      <form onSubmit={submitContactData}>
        <div className="common-input">
          <div className="flex-input">
            <input type="text" placeholder="Adınız" autoComplete="off" name="name" onChange={handleInputOnchanges} required />
            <input type="text" placeholder="Soyadınız" name="surname" onChange={handleInputOnchanges} required />
          </div>
          <div className="flex-input">
            <input type="email" placeholder="E-mail adresi" name="email" autoComplete="off" onChange={handleInputOnchanges} required />
            <input type="tel" placeholder="Telefon nömrəsi" pattern="[0-9]" name="phone" autoComplete="off" onChange={handleInputOnchanges} required />
          </div>
          <textarea placeholder="Əlavə qeyd" name="note" required onChange={handleInputOnchanges} />
        </div>
        <button className="contact-btn">Ətraflı</button>
      </form>
    </section>
  );
}
