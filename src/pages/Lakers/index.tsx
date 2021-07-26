import React, { Fragment } from "react";
import { Link, Route, Redirect } from "react-router-dom"
import CompireRouter from '../../router/CompireRouter';
import router from '../../router'
import Davis from "./Davis";
import Kuzma from "./Kuzma";
import LeBron from "./LeBron";

export default function Lakers(props: any) {
    let { computedMatch, history, routes, match } = props;
    console.log("=====", props);

    function handleJump() {
        history.push({
            pathname: "/heat",
            state: { name: "sai" },
            params: { name: "liuDi" },
            size: { size: "36" } // 可以随意传参
        })
    }
    return (
        <Fragment>
            <section>洛杉矶·湖人</section>
            <ul>
                <li>
                    <Link to={match.url + "/davis"}>戴维斯</Link>
                </li>
                <li>
                    <Link to={"/lakers/kuzma"}>库兹马</Link>
                </li>
                <li>
                    <Link to={match.url + "/lebron"}>詹姆斯</Link>
                </li>
            </ul>

            {/* <CompireRouter routes={router[1].children}></CompireRouter> */}
            <CompireRouter routes={routes}></CompireRouter>


            <section>
                <button onClick={handleJump}>热火队</button>
            </section>

        </Fragment>
    )
}