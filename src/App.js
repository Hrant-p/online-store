import React from 'react';
import { Switch, Route } from "react-router-dom";


import Product from './component/Product';
import ProductList from './component/ProductList';
import Navbar from './component/Navbar';
import Details from './component/Details';
import NotFound from './component/NotFound';
import Cart from './component/Cart';

import logo from './logo.svg';
import './App.css';
import Footer from './component/Footer';

function App() {
  return (
    <React.Fragment>
            <Navbar />
        <Switch>
            <Route path='/' component={ProductList} exact />
            <Route path='/details/:id' component={Details} />
            <Route path='/cart' component={Cart} exact />
            <Route component={NotFound} />
        </Switch>
            <Footer />
      
    </React.Fragment>
  );
}

export default App;
