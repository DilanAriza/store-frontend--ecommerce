import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../containers/Home';
// import Login from '../containers/Login';
import NotFound from '../containers/NotFound';
// import Player from '../containers/Player';
// import Register from '../containers/Register';

const App = () => (
    <BrowserRouter>
    <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/player/:id" component={Player}/> */}
            <Route component={NotFound}/>
        </Switch>
    </Layout>
    </BrowserRouter>
);

export default App;