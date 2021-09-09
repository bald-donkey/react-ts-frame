import React, { Fragment } from "react";
import { Link } from 'react-router-dom'
import HeatStyle from '../../assets/css/Heat.module.css';
// import qr from "query-string"

export default function Heat(props: any) {
  // let { location } = props
  console.log(props);


  // console.log(location.params);
  // console.log(location.state);
  // console.log(location.size);

  // let params = qr.parse(location.params)
  // let state = qr.parse(location.state)
  // let size = qr.parse(location.size)
  // console.log(params);
  // console.log(state);
  // console.log(size);

  return (
    <Fragment>
      <div className={HeatStyle.heat}>热火</div>
      <ul>
        <li>
          <Link to="/heat">热火</Link>
        </li>
        <li>
          <Link to="/lakers/davis">湖人</Link>
        </li>
        <li>
          <Link to="/nets">篮网</Link>
        </li>
      </ul>
    </Fragment>
  )
}