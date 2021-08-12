import { BrowserRouter } from "react-router-dom"
import AppStyle from './assets/css/App.module.css';
import routes from "./router/index"
import CompireRouter from './router/CompireRouter';
import Header from './pages/Header'

function App (props) {
  return (
    <BrowserRouter>
      <div className={AppStyle.bg_img}>
        <div className={AppStyle.container}>
          <Header></Header>
          <CompireRouter {...props} routes={routes}></CompireRouter>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
