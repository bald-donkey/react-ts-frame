import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import "lib-flexible"
import './assets/css/index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import store from './store'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)

// reportWebVitals();
