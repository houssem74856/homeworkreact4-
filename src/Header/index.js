import './index.css'
import {Link} from 'react-router-dom'
import logo from './basket.png'

function Header({titleStore,titleProducts,numOfProducts,lien}) {
    return (
        <header>
            <div className='titleAndBasket'>
                <h1>{titleStore}</h1>
                <Link to={lien}><button className='busket'><img src={logo} alt="basket"/></button></Link>
                <div className='numberOfProductInBasket'>{numOfProducts}</div>
            </div>
            <div className='titleProducts'>
                <h3>{titleProducts}</h3>
            </div>
        </header>
    )
}

export default Header;