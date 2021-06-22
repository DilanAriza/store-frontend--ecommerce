import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../view/Layouts/Layout.home';
import CartCotainer from '../view/pages/Cart.page';
import CheckoutCart from '../view/pages/Checkout-cart.page';
import Home from '../view/pages/Home.page';
import Item from '../view/pages/Item.page';
import NotFound from '../view/pages/NotFound.page';

const App = () => (
    <BrowserRouter>
    <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/item/:id" component={Item} />
            <Route path="/my-cart" component={CartCotainer} />
            <Route path="/checkout-cart" component={CheckoutCart} />
            {/* <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/player/:id" component={Player}/> */}
            <Route component={NotFound}/>
        </Switch>
    </Layout>
    </BrowserRouter>
);

export default App;