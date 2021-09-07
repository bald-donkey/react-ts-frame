// 1. 引入组件
import React from 'react'

import Page from '../pages/index'
import Heat from "../pages/Heat"


const Lakers = React.lazy(() => import(/*webpackChunkName:"tackNumber"*/'../pages/Lakers/index'))
const Product = React.lazy(() => import(/*webpackChunkName:"tackNumber"*/'../pages/Product/index'))
const Davis = React.lazy(() => import(/*webpackChunkName:"tackNumber"*/'../pages/Lakers/Davis/index'))
const Kuzma = React.lazy(() => import(/*webpackChunkName:"tackNumber"*/'../pages/Lakers/Kuzma/index'))
const LeBron = React.lazy(() => import(/*webpackChunkName:"tackNumber"*/'../pages/Lakers/LeBron/index'))
const Page404 = React.lazy(() => import(/*webpackChunkName:"tackNumber"*/'../pages/Page404'))


// 2. 定义一个路由配置
let routes = [
  {
    path: '/',
    component: Page,
  },
  {
    path: "/heat",
    component: Heat
  },
  {
    path: "/lakers",
    component: Lakers,
    redirect: '/lakers/davis',
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
      },
      // {
      //   path: "/notFound",
      //   component: Page404
      // }
    ]
  },
  {
    path: "/product",
    component: Product
  },
  {
    path: "/notFound",
    component: Page404
  }
]

export default routes;