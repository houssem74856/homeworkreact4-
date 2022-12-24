import { useDispatch } from 'react-redux'
import {addToBasket} from '../redux/products'
import './index.css'

function Product({title,description,price,id}) {

    const dispatch = useDispatch()
    
    return (
        <div className='product'>
            <div className='productImg'></div>
            <div className='productInfs'>
                <h3 className='productTitle'>{title}</h3>
                <p className='productDes'>{description}</p>
                <p className='productPrice'>{price}</p>
                <button onClick={() => dispatch(addToBasket({id}))} className='addButton'>Add to basket</button>
            </div>
        </div>
    )
}

export default Product;