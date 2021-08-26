import { Fragment } from "react";
import { Link } from 'react-router-dom'

export default function Heat(props: any) {
  return (
    <Fragment>
      <section>迈阿密·热火 ---- 你个大秃驴</section>
      <div>
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
      </div>
    </Fragment>
  )
}