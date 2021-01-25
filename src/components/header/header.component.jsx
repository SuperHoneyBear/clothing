import "./header.styles.scss"
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';

const Header =()=>(
    <div className='header'>
        <Link className='logo-container' to='/' >
            <Logo className='logo' />
        </Link>

        <div className='option-container'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>

        </div>
    </div>
    )

export default Header