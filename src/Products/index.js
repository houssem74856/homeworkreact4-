import './index.css'
import Product from '../Product'

function Products({numOfProducts,setNumOfProducts,products,dispatch}) {
    return (
        <div className='products'>
            <Product id="1" products={products} numOfProducts={numOfProducts} setNumOfProducts={setNumOfProducts} dispatch={dispatch}/>
            <Product id="2" products={products} numOfProducts={numOfProducts} setNumOfProducts={setNumOfProducts} dispatch={dispatch}/>
            <Product id="3" products={products} numOfProducts={numOfProducts} setNumOfProducts={setNumOfProducts} dispatch={dispatch}/>
            <Product id="4" products={products} numOfProducts={numOfProducts} setNumOfProducts={setNumOfProducts} dispatch={dispatch}/>
            <Product id="5" products={products} numOfProducts={numOfProducts} setNumOfProducts={setNumOfProducts} dispatch={dispatch}/>
            <Product id="6" products={products} numOfProducts={numOfProducts} setNumOfProducts={setNumOfProducts} dispatch={dispatch}/>
        </div>
    )
}

export default Products;