import React from 'react';
import { BrowserRouter, Link } from "react-router-dom"
import './assets/css/App.css';
import routes from "./router"
import CompireRouter from './router/CompireRouter';


function App(props: any) {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/heat">热火</Link>
        </li>
        <li>
          <Link to="/lakers">湖人</Link>
        </li>
        <li>
          <Link to="/nets">篮网</Link>
        </li>
      </ul>
      <CompireRouter {...props} routes={routes}></CompireRouter>
    </BrowserRouter>
  );
}

export default App;

