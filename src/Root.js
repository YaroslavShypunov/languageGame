import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GAME_ROUTE, MAIN_ROUTE, } from './constants/routes';
import GamePage from './pages/gamePage/GamePage';
import MainPage from './pages/mainPage/MainPage';


const Root = (props) => {
    return (
        <BrowserRouter >
            <Switch>
                <Route exact path={GAME_ROUTE} component={GamePage} />
                <Route exact path={MAIN_ROUTE} component={MainPage} />
            </Switch>
        </BrowserRouter>
    )
}


export default Root;