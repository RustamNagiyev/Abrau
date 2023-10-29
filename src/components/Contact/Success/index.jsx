import './index.css';
import successImg from '../../../images/contact/success.png';
import { Link } from 'react-router-dom';

export default function Success() {
    return (
        <div className='contact-error common-response'>
            <div className="content-container">
                <h3>Yes! You did it!</h3>
                <img src={successImg} alt="template" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget libero feugiat, faucibus libero id, scelerisque quam</p>
                <Link to={'/'}><button className='contact-btn'>Ana səhifə</button></Link>
                <Link to={'/contact'}>geri dön</Link>
            </div>
        </div>
    )
}

