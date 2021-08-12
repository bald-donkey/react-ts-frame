import Users from './Users'
import Goods from './Goods'

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
    return {
        Users: Users(state.Users, action),
        Goods: Goods(state.Goods, action)
    }
}