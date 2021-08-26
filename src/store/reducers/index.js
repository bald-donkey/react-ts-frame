// 方法一：原生合并
// import Users from './Users'
// import Goods from './Goods'

// export default function (state = {}, action) {
//     return {
//         Users: Users(state.Users, action),
//         Goods: Goods(state.Goods, action)
//     }
// }

// ====================================

// 方法二：redux提供合并方法
import { combineReducers } from "redux"
import Users from './Users.js'
import Goods from './Goods.js'

// const defaultState = {} // 初始化


export default combineReducers({
  Users,
  Goods
})