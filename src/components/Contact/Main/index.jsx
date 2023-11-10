import { useState } from "react";
import "./index.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import database from '../../../utils/firebase';
import { push, ref } from "firebase/database";


export default function Main() {
  const [inputValues, setInputValues] = useState({});
  const [allInputs, setAllInputs] = useState([]);
  const { t } = useTranslation();
  const navigate = useNavigate();


  const handleInputOnchanges = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    let allInputsArray = [...allInputs];
    !allInputs.includes(e.target) && allInputsArray.push(e.target);
    setAllInputs(allInputsArray);
  }

  const postDataToTheDatabase = async () => {
    try {
      // alternative version with axios which our database served on vercel.app gives 500 internal error for readonly files of itself(vercel):
      // const response = await axios.post('https://azabrau-database-russian.vercel.app/contact', { ...inputValues });

      // Get a reference to the 'azabrau-contact' node in our Firebase database
      const dataRef = ref(database, 'azabrau-contact');
      // Push the new data to the database and get the completion promise
      const pushPromise = push(dataRef, {
        value: { ...inputValues },
      });

      // Wait for the completion of the push operation
      await pushPromise;

      // Clear the input field
      setInputValues({});
      // Redirect to the success page if posting data is successful
      navigate('/contact/success');
    } catch (error) {
      console.error(error);
      // Redirect to the error page if an error occurs
      navigate('/contact/error');
    }
  }



  const handleSwalConfirmation = () => {
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
        postDataToTheDatabase();
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          t("canceled"),
          t("noWorries"),
          'error'
        )
      }
    })
  }


  const submitContactData = async (e) => {
    e.preventDefault();
    handleSwalConfirmation();
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
        <form onSubmit={submitContactData}>
          <div className="flex-input">
            <input type="text" placeholder={t("yourName")} autoComplete="off" name="name" onChange={handleInputOnchanges} required />
            <input type="text" placeholder={t("yourSurname")} name="surname" onChange={handleInputOnchanges} required />
          </div>
          <div className="flex-input">
            <input type="email" placeholder={t("yourEmail")} name="email" autoComplete="off" onChange={handleInputOnchanges} required />
            <input type="tel" placeholder={t("yourPhone")} pattern="^\d{9,10}$" name="phone" autoComplete="off" onChange={handleInputOnchanges} required />
          </div>
          <textarea placeholder={t("yourNote")} name="note" required onChange={handleInputOnchanges} />
          <button type="submit" className="contact-btn">{t("moreInfoButton")}</button>
        </form>
      </div>
    </section>
  );
}
