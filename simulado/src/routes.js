import {  BrowserRouter, Switch, Route } from 'react-router-dom';

import Site from './pages/index';
import Login from './pages/login';
import Registrar from './pages/registrar';

export default function Rotes() {
    return (
        <BrowserRouter>
            <Switch> 
                
                <Route  path="/"  exact={true}  component={Login} />
                <Route path="/registrar" component={Registrar} />
                <Route  path="/site" component={Site} />
            </Switch>
        </BrowserRouter> 
    )
}