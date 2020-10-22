import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MAIN_ROUTE, } from './constants/routes';
import MainPage from './pages/mainPage/MainPage';


const Root = (props) => {
    return (
        <BrowserRouter >
            <Switch>
                <Route exact path={MAIN_ROUTE} component={MainPage} />
            </Switch>
        </BrowserRouter>
    )
}


export default Root;