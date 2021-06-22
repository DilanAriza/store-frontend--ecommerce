import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../view/Layouts/Layout.home';
import CartPage from '../view/pages/Cart.page';
import CategoriesPage from '../view/pages/Categories.page';
import CheckoutCartPage from '../view/pages/Checkout-cart.page';
import HomePage from '../view/pages/Home.page';
import ItemPage from '../view/pages/Item.page';
import NotFoundPage from '../view/pages/NotFound.page';

const App = () => (
    <BrowserRouter>
    <Layout>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/item/:id" component={ItemPage} />
            <Route path="/my-cart" component={CartPage} />
            <Route path="/checkout-cart" component={CheckoutCartPage} />
            <Route exact path="/categories/" component={CategoriesPage} />
            {/* <Route path="/categories/:id" component={CategoriesPage} /> */}
            {/* <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />*/}
            <Route component={NotFoundPage}/>
        </Switch>
    </Layout>
    </BrowserRouter>
);

export default App;