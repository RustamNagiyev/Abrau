import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CONTACT_URL } from "../../../utils/BASE_URL";

export default function Main() {
  const [inputValues, setInputValues] = useState({});
  const [allInputs, setAllInputs] = useState([]);
  const [submitSuccessed, setSubmitSuccessed] = useState(null);

  const { t } = useTranslation();

  // useEffect(() => {
  //   async function handlePostRequest() {
  //     try {
  //       const response = await axios.post(CONTACT_URL, { ...inputValues });
  //       setSubmitSuccessed(true);
  //       console.log(response.data);
  //     } catch (error) {
  //       setSubmitSuccessed(false);
  //       console.error(error);
  //     }
  //   }
  // }, [inputValues])


  const handleInputOnchanges = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    let allInputsArray = [...allInputs];
    !allInputs.includes(e.target) && allInputsArray.push(e.target);
    setAllInputs(allInputsArray);
  }

  const submitContactData = async (e) => {
    e.preventDefault();

    // setSubmitSuccessed(true);

    try {
      const response = await axios.post(CONTACT_URL, { ...inputValues });
      setSubmitSuccessed(true);
      console.log(response.data);
    } catch (error) {
      setSubmitSuccessed(false);
      console.error(error);
    }

  }
  // console.log(submitSuccessed);

  return (
    <section className="main-contact">
      <div className="top">
        <div className="container-contact">
          <div className="flex-contact">
            <h2>{t("address")}</h2>
            <p>Port Baku,Neftchilar Avenue 153,Baku Azerbaijan</p>
          </div>
          <div className="flex-contact">
            <h2>Telefon</h2>
            <a href="tel:+944501234567">
              <p>+944 50 123 45 67</p>
            </a>
            <a href="tel:+944501234567">
              <p>+944 50 123 45 67</p>
            </a>
          </div>
          <div className="flex-contact">
            <h2>e-mail</h2>
            <a href="mailto:info@azabrau.az">
              <p>info@azabrau.az</p>
            </a>
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
          <button type="submit" className="contact-btn">{allInputs.length === 5 & submitSuccessed !== null ? <Link to={submitSuccessed ? '/contact/success' : '/contact/error'}>Ətraflı</Link> : 'Ətraflı'}</button>
        </form>
      </div>
    </section>
  );
}
