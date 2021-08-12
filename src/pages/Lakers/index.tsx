import React, { Fragment } from "react";
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import CompireRouter from '../../router/CompireRouter';

const mapState = (state: any) => {
  return {
    state
  }
}

const mapDispatch = (dispatch: any) => {
  return {}
}

const connects: Function = connect;

@connects(mapState, mapDispatch)
class Lakers extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
    // let { computedMatch, history, routes, match } = this.props;
    // console.log("=====", this.props);
  }

  handleJump(history: any) {
    history.push({
      pathname: "/heat",
      state: { name: "sai" },
      params: { name: "liuDi" },
      size: { size: "36" } // 可以随意传参
    })
  }

  render() {
    console.log("=====", this.props);

    let { history, routes, match, state }: any = this.props;

    return (

      <Fragment>
        <section>{state.Goods[0]}</section>
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
          <button onClick={() => this.handleJump(history)}>热火队</button>
        </section>

      </Fragment>
    )
  }
}

export default Lakers;