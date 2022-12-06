import './index.css'

function Product({id,products,numOfProducts,setNumOfProducts,dispatch}) {
    const product = products.find((product) => {return product.id === id})

    function handleAdd() {
        dispatch({type:'addToBasket',id:product.id, products: products,numOfProducts:numOfProducts,setNumOfProducts:setNumOfProducts})
    }

    return (
        <div className='product'>
            <div className='productImg'></div>
            <div className='productInfs'>
                <h3 className='productTitle'>{product.title}</h3>
                <p className='productDes'>{product.description}</p>
                <p className='productPrice'>{product.price}</p>
                <button onClick={handleAdd} className='addButton'>Add to basket</button>
            </div>
        </div>
    )
}

export default Product;