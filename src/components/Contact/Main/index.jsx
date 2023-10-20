import "./index.css";

export default function Main() {
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
            <p className="p2">+944 50 123 45 67</p>
          </div>
          <div className="flex-contact">
            <h2>e-mail</h2>
            <p>info@azabrau.az</p>
          </div>
        </div>
      </div>
      
      <div className="common-input">
        <div className="flex-input">
      <input type="text" placeholder="Adınız" />
      <input type="text" placeholder="Soyadınız" />
        </div>
        <div className="flex-input">
        <input type="email" placeholder="E-mail adresi"/>
      <input type="number" placeholder="Telefon nömrəsi" />
        </div>
      <input type="text" placeholder="Əlavə qeyd" />
      </div>
      <button className="contact-btn">Ətraflı</button>
    </section>
  );
}
