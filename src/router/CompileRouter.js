import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"

/**
 * 3. 这是一个高阶组件，用于编译路由
 * 4. 根据传入的数据，进行遍历，创建同等数量的route，比如[{}, {}, {}]
 * */
export default class CompileRouter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      c: null
    }
  }

  // 5.得到相同数量 route 组件，并返回出去生成可使用<Route />
  renderContent () { // 用于通过数据生成 Route
    let { routes = [] } = this.props;
    let length = routes.length

    let routesEl = routes.map(
      (route, index) => {

        return <Route path={route.path} exact={route.path === '/'} key={index} render={
          (props) => {
            return <route.component {...props} routes={route.children}></route.component>
          }
        }></Route>

      }
    )

    // 6. 配置404页面
    routesEl.push(
      <Redirect to='/notFound' key={length}></Redirect>
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
      <Switch>
        {this.state.c}
      </Switch>
    )
  }
}