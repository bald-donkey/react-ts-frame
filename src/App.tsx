import { Suspense } from 'react';
import { BrowserRouter } from "react-router-dom"
import routes from "./router"
import CompileRouter from './router/CompileRouter';
import Loading from './component/Loading';


function App(props: any) {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading></Loading>}>
        <CompileRouter {...props} routes={routes}></CompileRouter>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

