import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './assets/css/index.css';
import store from './store'
import FirstScreen from './pages/FirstScreen/index'
import App from './App';


function listen () {
  if (document.readyState === 'complete') { // 资源加载完成
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    )
  } else { // 资源加载中
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <Route path="/" component={FirstScreen} />
        </Router>
      </Provider>,
      document.getElementById('root')
    )
  }
}

document.onreadystatechange = listen


