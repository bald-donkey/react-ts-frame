import React, { Fragment } from "react"
import { Route } from "react-router-dom"

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
        let routesLength = routes.length - 1;

        // Route 中 render 属性的作用： 可以用来渲染嵌套的组件
        let routesEl = routes.map(
            (route, index) => {

                if (index == routesLength) {
                    console.log(index);
                    // return <Route key={index} render={() => <route.component></route.component>}></Route>
                    return
                }
                return <Route path={route.path} key={index} render={
                    () => {
                        return <route.component {...this.props} routes={route.children}></route.component>
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
            <Fragment>
                {this.state.c}
            </Fragment>
        )
    }

}
