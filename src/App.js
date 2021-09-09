import { Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";
import AppStyle from './assets/css/App.module.css';
import routes from "./router/index";
import CompireRouter from './router/CompireRouter';
import Header from './pages/Header'
import Loading from './component/index';

function App (props) {
  return (
    <BrowserRouter>
      <div className={AppStyle.bg_img}>
        <div className={AppStyle.container}>
          <Header></Header>
          <Suspense fallback={<Loading></Loading>}>
            <CompireRouter {...props} routes={routes}></CompireRouter>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
