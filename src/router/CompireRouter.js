import React, { Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import Loading from '../pages/Loading'

/**
 * 3. 这是一个高阶组件，用于编译路由
 * 4. 根据传入的数据，进行遍历，创建同等数量的route，比如[{}, {}, {}]
 * */
export default class CompireRouter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      c: null
    }
  }

  // 5.得到相同数量 route 组件，并返回出去生成可使用<Route />
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
      <Suspense fallback={<Loading></Loading>}>
        {/* <Suspense fallback={<p>加载中.....</p>}> */}
        <Switch>
          {this.state.c}
        </Switch>
      </Suspense>
    )
  }

}
