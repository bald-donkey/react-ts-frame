import { Fragment } from 'react';
import { BrowserRouter, Link } from "react-router-dom"
import AppStyle from './assets/css/App.module.css';
import routes from "./router"
import CompireRouter from './router/CompireRouter';
import Carousel_JS from "./component/Carousel"


function App(props: any) {
  return (
    <BrowserRouter>
      <Fragment>
        <Carousel_JS></Carousel_JS>
        <div className="heat">热火</div>
        <ul>
          <li>
            <Link to="/heat" className={AppStyle.heat}>热火</Link>
          </li>
          <li>
            <Link to="/lakers">湖人</Link>
          </li>
          <li>
            <Link to="/nets">篮网</Link>
          </li>
        </ul>
        <CompireRouter {...props} routes={routes}></CompireRouter>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;

