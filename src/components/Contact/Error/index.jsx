import './index.css';
import errorImg from '../../../images/contact/error.png'
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className='contact-error common-response'>
      <div className="content-container">
        <h3>Opps! Seems you found nothing here!</h3>
        <img src={errorImg} alt="template" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero feugiat, faucibus libero id, scelerisque quam</p>
        <Link to={'/'}><button className='contact-btn'>Ana səhifə</button></Link>
        <Link to={'/contact'}>geri dön</Link>
      </div>
    </div>
  )
}
