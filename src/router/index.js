import React from 'react'
import Page from '../pages/index'
import Page404 from "../pages/Page404/index"


const TakeNumber = React.lazy(() => import(/*webpackChunkName:"tackNumber"*/'../pages/TakeNumber/index'))
const Welcome = React.lazy(() => import(/*webpackChunkName:"tackNumber"*/'../pages/Welcome/index'))
const InputData = React.lazy(() => import(/*webpackChunkName:"tackNumber"*/'../pages/InputData/index'))
let routes = [
  {
    path: '/',
    component: Page
  },
  {
    path: '/takeNumber',
    component: TakeNumber
  },
  {
    path: '/welcome',
    component: Welcome
  },
  {
    path: '/inputData',
    component: InputData
  },
  {
    path: "/notFound",
    component: Page404
  },
]

export default routes;