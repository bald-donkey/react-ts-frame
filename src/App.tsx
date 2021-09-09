import { Fragment, Suspense } from 'react';
import { BrowserRouter } from "react-router-dom"
import routes from "./router"
import CompireRouter from './router/CompireRouter';
import Carousel_JS from "./component/Carousel"
import Loading from './component/Loading';


function App(props: any) {
  return (
    <BrowserRouter>
      <Fragment>
        <Suspense fallback={<Loading></Loading>}>
          <Carousel_JS></Carousel_JS>
          <CompireRouter {...props} routes={routes}></CompireRouter>
        </Suspense>

      </Fragment>
    </BrowserRouter>
  );
}

export default App;

