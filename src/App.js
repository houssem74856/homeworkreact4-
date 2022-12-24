import './App.css';
import Header from './Header';
import Products from './Products';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import BasketProducts from './BasketProducts'

function App() { 
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Header titleStore='Adventure Store' titleProducts='All Products' lien='/basket' />
            <Products />
        </Route>
        <Route exact path='/basket'>
          <Header titleStore='Adventure Store' titleProducts='Your Basket' lien='/' />
          <BasketProducts />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
