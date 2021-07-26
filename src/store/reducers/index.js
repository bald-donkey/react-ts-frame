import Users from './Users'
import Goods from './Goods'

export default function (state = {}, action) {
    return {
        Users: Users(state.Users, action),
        Goods: Goods(state.Goods, action)
    }
}