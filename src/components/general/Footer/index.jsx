import "./index.css";
export default function Footer() {
  return (
    <footer>
      <section className="sectionfooter">
        <div className="container">
          <div className="flexable">
            <div className="div1">
              <p>Haqqımızda</p>
              <p>Şəki Şərabları</p>
              <p>Abrau-Dürso</p>
            </div>
            <div className="div2">
              <p>Satış məntəqələri</p>
              <p>Xəbərlər</p>
              <p>Əlaqə</p>
            </div>
          </div>
          <div className="div3">
            <p>
              Telefon
              <span>
                <a href="tel:+994501234567">+994 50 123 45 67</a>
              </span>
            </p>
            <p>
              E-mail<span>info@azabrau.az</span>
            </p>
            <p>
              Ünvan<span>Port Baku,Neftchilar Avenue 153,Baku Azerbaijan</span>
            </p>
          </div>
          <div className="div4">
            <a href="https://www.instagram.com">
              <img
                src={require("../../../images/home/footerinsta.svg").default}
                alt="insta"
              />
            </a>
            <a href="https://wa.me/+994501234567">
              <img
                src={require("../../../images/home/footerwp.svg").default}
                alt="whatsapp"
              />
            </a>
            <a href="https://www.facebook.com">
              <img
                src={require("../../../images/home/footerfb.svg").default}
                alt="facebook"
              />
            </a>
          </div>
        </div>
        <div className="containertwo">
          <p className="pend1">2022 Az Abrau</p>
          <img src={require("../../../images/home/logo2.svg").default} />
          <p className="pend2">Məxfilik Siyasəti | Şərtlər və qaydalar</p>
        </div>
      </section>
    </footer>
  );
}
