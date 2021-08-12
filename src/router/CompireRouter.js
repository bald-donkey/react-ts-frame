import React, { Suspense } from "react"
import { Route, Switch } from "react-router-dom"
// import Loading from '../pages/Loading'

/**
 * 渲染组件
 * */
export default class CompireRouter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      c: null
    }
  }

  renderContent () { // 用于通过数据生成 Route
    let { routes = [] } = this.props;
    let length = routes.length - 1

    let routesEl = routes.map(
      (route, index) => {

        if (length === index) { // 配置404
          return <Route component={route.component} key={index}></Route>
        }
        return <Route path={route.path} exact={route.path === '/'} key={index} render={
          (props) => {
            return <route.component {...props} routes={route.children}></route.component>
          }
        }></Route>
      }
    )

    this.setState({
      c: routesEl
    })
  }

  componentDidMount () {
    this.renderContent()
  }

  render () {
    return (
      // <Suspense fallback={<Loading></Loading>}>
      <Suspense fallback={<p>加载中.....</p>}>
        <Switch>
          {this.state.c}
        </Switch>
      </Suspense>
    )
  }

}
