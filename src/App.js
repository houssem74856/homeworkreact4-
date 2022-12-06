import './App.css';
import Header from './Header';
import Products from './Products';
import { useReducer, useState } from 'react';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import BasketProducts from './BasketProducts'

function reducer(basketProducts,action) {
  let inBasket = undefined
  switch (action.type) {
    case 'addToBasket' :
      const basketProduct = action.products.find((product) => {return product.id === action.id})
      basketProducts.forEach(basketProduct => {if(basketProduct.id === action.id) {
        inBasket= true
      }})

      if(!inBasket) {
        action.setNumOfProducts(action.numOfProducts++)
        return [...basketProducts,{...basketProduct,howManny:1}]
      }
      
      return basketProducts
    case 'plus' : 
      return basketProducts.map(basketProduct => {
        if(basketProduct.id === action.id) {
          /*let actualPrice = basketProduct.price.split('')
          actualPrice.pop()
          actualPrice = actualPrice.join('')
          actualPrice = parseInt(actualPrice)
          actualPrice = actualPrice + (actualPrice / basketProduct.howManny)
          actualPrice = JSON.stringify(actualPrice) + '$'*/
          return {...basketProduct,price:basketProduct.howManny+=1}
        }
        return basketProduct
      })
    case 'minus' : 
      return basketProducts.map(basketProduct => {
        if(basketProduct.id === action.id && basketProduct.howManny>1) { 
          return {...basketProduct,howManny:basketProduct.howManny-=1}
        }
        return basketProduct
    })
    case 'delete' :
      action.setNumOfProducts(action.numOfProducts--)
      return basketProducts.filter(basketProduct => {return basketProduct.id !== action.id})
}
}

function App() {
  const [numOfProducts,setNumOfProducts] = useState(0);
  const products =[{title:"Item 1",description:"Item description",price:"20$",id:"1"},
                   {title:"Item 2",description:"Item description",price:"50$",id:"2"},
                   {title:"Item 3",description:"Item description",price:"5$",id:"3"},
                   {title:"Item 4",description:"Item description",price:"160$",id:"4"},
                   {title:"Item 5",description:"Item description",price:"28$",id:"5"},
                   {title:"Item 6",description:"Item description",price:"40$",id:"6"}]
  const [basketProducts,dispatch] = useReducer(reducer,[])
  
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Header titleStore='Adventure Store' titleProducts='All Products' numOfProducts={numOfProducts} lien='/basket' />
            <Products numOfProducts={numOfProducts} setNumOfProducts={setNumOfProducts} products={products} dispatch={dispatch}/>
        </Route>
        <Route exact path='/basket'>
          <Header titleStore='Adventure Store' titleProducts='Your Basket' numOfProducts={numOfProducts} lien='/' />
          <BasketProducts numOfProducts={numOfProducts} setNumOfProducts={setNumOfProducts} basketProducts={basketProducts} dispatch={dispatch}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
