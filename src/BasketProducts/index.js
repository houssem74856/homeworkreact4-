import './index.css';
import logo from './delete.png';

function BasketProducts({numOfProducts,setNumOfProducts,basketProducts,dispatch}) {
    return (
        <div className='basketProducts'>
            {basketProducts.map(basketProduct => {
            return (
            <div className='basketProduct'>
                <div className='BproductImg'></div>
                <div className='BproductInfs'>
                    <div className='infs'>
                    <h3 className='BproductTitle'>{basketProduct.title}</h3>
                    <button className='minus' onClick={() => {dispatch({type : 'minus' ,id : basketProduct.id})}}>-</button>
                    <div className='howManny'>{basketProduct.howManny}</div>
                    <button className='plus' onClick={() => {dispatch({type : 'plus' ,id : basketProduct.id})}}>+</button>
                    <p className='BproductPrice'>{basketProduct.price}</p>
                    </div>
                    <button className='deleteIcon' onClick={() => {dispatch({type:'delete',id:basketProduct.id,numOfProducts:numOfProducts,setNumOfProducts:setNumOfProducts})}}><img src={logo} alt='Delete'></img></button>
                </div>
            </div>
            )})}
        </div>
    )
}

export default BasketProducts;