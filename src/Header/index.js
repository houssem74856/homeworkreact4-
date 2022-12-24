import './index.css'
import {Link} from 'react-router-dom'
import logo from './basket.png'
import { useSelector } from 'react-redux'

function Header({titleStore,titleProducts,lien}) {
    const { value } = useSelector(state => state.products)

    return (
        <header>
            <div className='titleAndBasket'>
                <h1>{titleStore}</h1>
                <Link to={lien}><button className='busket'><img src={logo} alt="basket"/></button></Link>
                <div className='numberOfProductInBasket'>{value}</div>
            </div>
            <div className='titleProducts'>
                <h3>{titleProducts}</h3>
            </div>
        </header>
    )
}

export default Header;