import './index.css';
import logo from './delete.png';
import {plus,minus,supprimer} from '../redux/products'
import { useDispatch, useSelector } from 'react-redux';

function BasketProducts() {

    const { products } = useSelector(state => state.products)
    const dispatch = useDispatch()
    const basketProducts = products.filter(product => {return product.howMannyAdded>0})

    return (
        <div className='basketProducts'>
            {basketProducts.map(({title,price,id,howMannyAdded}) => {
            return (
            <div className='basketProduct'>
                <div className='BproductImg'></div>
                <div className='BproductInfs'>
                    <div className='infs'>
                    <h3 className='BproductTitle'>{title}</h3>
                    <button className='minus' onClick={() => {dispatch(minus({id}))}}>-</button>
                    <div className='howManny'>{howMannyAdded}</div>
                    <button className='plus' onClick={() => {dispatch(plus({id}))}}>+</button>
                    <p className='BproductPrice'>{price}</p>
                    </div>
                    <button className='deleteIcon' onClick={() => {dispatch(supprimer({id}))}}><img src={logo} alt='Delete'></img></button>
                </div>
            </div>
            )})}
        </div>
    )
}

export default BasketProducts;