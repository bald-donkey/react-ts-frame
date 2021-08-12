// import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import "lib-flexible"
import './assets/css/index.css';
import App from './App';
import store from './store'



function listen() {
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
          {/* <Route path="/" component={FirstScreen} /> */}
          {/* 资源未加载完成时调用 */}
          <Route path="/" component={() => <div>你个大秃驴</div>} />
        </Router>
      </Provider>,
      document.getElementById('root')
    )
  }
}

document.onreadystatechange = listen

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById("root")
// )
