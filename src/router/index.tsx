// 1. 引入组件
import React from 'react'
import Page from '../pages'
import Heat from "../pages/Heat/index"

// import Lakers from "../pages/Lakers"
// import Nets from "../pages/Nets"
// import Davis from "../pages/Lakers/Davis"
// import Kuzma from "../pages/Lakers/Kuzma"
// import LeBron from "../pages/Lakers/LeBron"
// import Page404 from '../pages/Page404'

const Lakers = React.lazy(() => import(/*webpackChunkName:"tackNumber"*/'../pages/Lakers/index'))
const Nets = React.lazy(() => import(/*webpackChunkName:"tackNumber"*/'../pages/Nets/index'))
const Davis = React.lazy(() => import(/*webpackChunkName:"tackNumber"*/'../pages/Lakers/Davis/index'))
const Kuzma = React.lazy(() => import(/*webpackChunkName:"tackNumber"*/'../pages/Lakers/Kuzma/index'))
const LeBron = React.lazy(() => import(/*webpackChunkName:"tackNumber"*/'../pages/Lakers/LeBron/index'))
const Page404 = React.lazy(() => import(/*webpackChunkName:"tackNumber"*/'../pages/Page404'))


// 2. 定义一个路由配置
let routes = [
  {
    path: '/',
    component: Page
  },
  {
    path: "/heat",
    component: Heat
  },
  {
    path: "/lakers",
    component: Lakers,
    children: [
      {
        path: "/lakers/davis",
        component: Davis
      },
      {
        path: "/lakers/kuzma",
        component: Kuzma
      },
      {
        path: "/lakers/lebron",
        component: LeBron
      }
    ]
  },
  {
    path: "/nets",
    component: Nets
  },
  {
    path: "/404",
    component: Page404
  }
]

export default routes;