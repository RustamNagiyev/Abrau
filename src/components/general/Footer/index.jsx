import "./index.css"
export default function Footer() {
  return (
    <footer>
      <section className='sectionfooter'>
        <div className='container'>
            <div className='flexable'>
        <div className='div1'>
          <p>Haqqımızda</p>
          <p>Şəki Şərabları</p>
          <p>Abrau-Dürso</p>
        </div>
        <div className='div2'>
          <p>Satış məntəqələri</p>
          <p>Xəbərlər</p>
          <p>Əlaqə</p>
        </div>
        </div>
        <div className='div3'>
          <p>Telefon<span>+994 50 123 45 67</span></p>
          <p>E-mail<span>info@azabrau.az</span></p>
          <p>Ünvan<span>Port Baku,Neftchilar Avenue 153,Baku Azerbaijan</span></p>
        </div>
        <div className='div4'>
        <img src={require('../../../images/home/footerinsta.svg').default}/>
        <img src={require('../../../images/home/footerwp.svg').default}/>
        <img src={require('../../../images/home/footerfb.svg').default}/>
        </div>
        </div>
        <div className='containertwo'>
            <p className='pend1'>2022 Az Abrau</p>
            <img src={require('../../../images/home/logo2.svg').default}/>
            <p className='pend2'>Məxfilik Siyasəti  |  Şərtlər və qaydalar</p>
        </div>
      </section>
    </footer>
  );
}
