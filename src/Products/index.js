import './index.css'
import Product from '../Product'
import { useSelector } from 'react-redux';

function Products () {

    const { products } = useSelector(state => state.products)

    return (
        <div className='products'>
            {products.map(product => {
                return (
                    <Product title={product.title} description={product.description} price={product.price} id={product.id}/>
                )
            })}
        </div>
    )
}

export default Products;