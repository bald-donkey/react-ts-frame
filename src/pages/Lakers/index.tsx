import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import CompileRouter from '../../router/CompileRouter'

export default class Lakers extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }


  componentDidMount() {
    // this.props.history.push({ pathname: '/lakers/davis' })
  }

  handleJump() {
    this.props.history.push({
      pathname: "/heat",
      state: { name: "sai" },
      params: { name: "liuDi" },
      size: { size: "36" } // 可以随意传参
    })
  }

  render() {
    let { match } = this.props;

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
          <button onClick={this.handleJump.bind(this)}>热火队</button>
        </section>
        <CompileRouter {...this.props} routes={this.props.routes}></CompileRouter>
      </Fragment>
    )
  }
}