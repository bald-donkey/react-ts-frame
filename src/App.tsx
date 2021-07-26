import React, { Fragment } from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom"
import './assets/css/App.css';
import routes from "./router"
import CompireRouter from './router/CompireRouter';
import Page404 from './pages/Page404';
import Carousel_JS from "./component/Carousel"


function App(props: any) {
    return (
        <BrowserRouter>
            <Fragment>
                <Carousel_JS></Carousel_JS>
                <div className="heat">热火</div>
                <ul>
                    <li>
                        <Link to="/heat" className="heat">热火</Link>
                    </li>
                    <li>
                        <Link to="/lakers">湖人</Link>
                    </li>
                    <li>
                        <Link to="/nets">篮网</Link>
                    </li>
                </ul>
                {/* </div> */}
                <Switch>
                    <CompireRouter {...props} routes={routes}></CompireRouter>

                    <Route component={Page404}></Route>
                </Switch>
            </Fragment>
        </BrowserRouter>
    );
}

export default App;

