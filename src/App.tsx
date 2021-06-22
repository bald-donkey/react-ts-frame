import React from 'react';
import { BrowserRouter, Link, Route, Switch, Redirect } from "react-router-dom"
import './assets/css/App.css';
import Heat from './pages/Heat';
import Lakers from './pages/Lakers';
import Nets from './pages/Nets';
import Page404 from './pages/Page404';


function App() {
    return (
        <BrowserRouter>
            {/* <div className="App"> */}
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
            {/* </div> */}
            <Switch>
                <Route path="/heat" component={Heat}></Route>
                <Route path="/lakers" component={Lakers}></Route>
                <Route path="/nets" component={Nets}></Route>
                <Redirect from="/" to="/lakers"></Redirect>
                <Route component={Page404}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;


// function App() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.tsx</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Learn React
//                 </a>
//             </header>
//         </div>
//     );
// }

// export default App;
