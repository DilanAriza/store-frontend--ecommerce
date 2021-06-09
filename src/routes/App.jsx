import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Cart from '../containers/Cart';
import Home from '../containers/Home';
import Item from '../containers/Item';
import NotFound from '../containers/NotFound';

const App = () => (
    <BrowserRouter>
    <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/item/:id" component={Item} />
            <Route path="/my-cart" component={Cart} />
            {/* <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/player/:id" component={Player}/> */}
            <Route component={NotFound}/>
        </Switch>
    </Layout>
    </BrowserRouter>
);

export default App;