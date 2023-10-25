import "./index.css"
export default function HomeAbout() {
  return (
    <section className="about">
      <div className="container">
        <div className="flex1">
      <h2>Haqqımızda</h2>
      <p className='text1'>Lorem Ipsum is simply </p>
      <p className='text2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum hasLorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
      <button>Ətraflı</button>
        </div>
        <div className="flex2">
        <img src={require('../../../images/home/winesabout.svg').default}/>
        </div>
        </div>
    </section>
  )
}
