import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import CompireRouter from '../../router/CompireRouter'

export default function Lakers(props: any) {
  let { match, history } = props;
  // console.log(props);

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
          <Link to={match.url + "/kuzma"}>库兹马</Link>
        </li>
        <li>
          <Link to={match.url + "/lebron"}>詹姆斯</Link>
        </li>
      </ul>
      <section>
        <button onClick={handleJump}>热火队</button>
      </section>
      <CompireRouter {...props} routes={props.routes}></CompireRouter>
    </Fragment>
  )
}