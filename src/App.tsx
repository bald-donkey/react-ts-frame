import { Suspense } from 'react';
import { BrowserRouter } from "react-router-dom"
import './assets/css/App.css';
import routes from "./router"
import CompireRouter from './router/CompireRouter';
import Loading from './component/Loading';


function App(props: any) {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading></Loading>}>
        <CompireRouter {...props} routes={routes}></CompireRouter>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

