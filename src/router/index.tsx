// 1. 引入组件
import Heat from "../pages/Heat"
import Lakers from "../pages/Lakers"
import Nets from "../pages/Nets"
import Page404 from "../pages/Page404"
import Davis from "../pages/Lakers/Davis"
import Kuzma from "../pages/Lakers/Kuzma"
import LeBron from "../pages/Lakers/LeBron"

// 2. 定义一个路由配置
let routes = [
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
    // {
    //     path: "/404",
    //     component: Page404
    // }
]

export default routes;