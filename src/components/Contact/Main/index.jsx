import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CONTACT_URL } from "../../../utils/BASE_URL";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Main() {
  const [inputValues, setInputValues] = useState({});
  const [allInputs, setAllInputs] = useState([]);
  const [submitSuccessed, setSubmitSuccessed] = useState(null);
  const { t } = useTranslation();
  const navigate = useNavigate();


  const handleInputOnchanges = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    let allInputsArray = [...allInputs];
    !allInputs.includes(e.target) && allInputsArray.push(e.target);
    setAllInputs(allInputsArray);
  }

  const postingDataWithAxios = async () => {
    try {
      const response = await axios.post('https://azabrau-database-russian.vercel.app/contact', { ...inputValues });
      setSubmitSuccessed(true);
      console.log(response.data);
      // Redirect to the success page if posting data is successful
      navigate('/contact/success');
      // response.status(200).json({ success: true });
    } catch (error) {
      console.error("Error in /contact endpoint:", error);
      // response.status(500).json({ error: "Internal Server Error" });
      if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
        console.log("");
        console.log('else if');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up the request:", error.message);
        console.log('el');
      }
      setSubmitSuccessed(false);
      // Redirect to the error page if an error occurs
      navigate('/contact/error');
    }
  }





  const submitContactData = async (e) => {
    e.preventDefault();

    // SWAL confirmation:
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })

    swalWithBootstrapButtons.fire({
      title: t("sureToSend"),
      text: t("cantGetBack"),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: t("confirmButtonText"),
      cancelButtonText: t("cancelButtonText"),
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          t("sended"),
          t("sendedSuccessfully"),
          'success'
        )
        // if choosed 'send my note' action, then send axios data to the server:
        postingDataWithAxios();
        console.log('gonderildiiiiiiii');
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          t("canceled"),
          t("noWorries"),
          'error'
        )
        console.log('gonderilmeeeeediiiiiiii');

      }
    })

  }


  return (
    <section className="main-contact">
      <div className="top">
        <div className="container-contact">
          <div className="flex-contact">
            <h2>{t("address")}</h2>
            <p>Port Baku,Neftchilar Avenue 153,Baku Azerbaijan</p>
          </div>
          <div className="flex-contact">
            <h2>{t("phone")}</h2>
            <a href="tel:+944501234567">
              <p>+944 50 123 45 67</p>
            </a>
            <a href="tel:+944501234567">
              <p>+944 50 123 45 67</p>
            </a>
          </div>
          <div className="flex-contact">
            <h2>{t("email")}</h2>
            <a href="mailto:info@azabrau.az">
              <p>info@azabrau.az</p>
            </a>
          </div>
        </div>
      </div>
      <div className="common-input">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="flex-input">
            <input type="text" placeholder={t("yourName")} autoComplete="off" name="name" onChange={handleInputOnchanges} required />
            <input type="text" placeholder={t("yourSurname")} name="surname" onChange={handleInputOnchanges} required />
          </div>
          <div className="flex-input">
            <input type="email" placeholder={t("yourEmail")} name="email" autoComplete="off" onChange={handleInputOnchanges} required />
            <input type="tel" placeholder={t("yourPhone")} pattern="^\d{9,10}$" name="phone" autoComplete="off" onChange={handleInputOnchanges} required />
          </div>
          <textarea placeholder={t("yourNote")} name="note" required onChange={handleInputOnchanges} />
          <button type="button" className="contact-btn" onClick={submitContactData}>{t("moreInfoButton")}</button>
        </form>
      </div>
    </section>
  );
}
