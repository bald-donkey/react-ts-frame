import { getProduct } from "../../api"

const creator = (type, payload) => ({ type, payload })

const ProductActon = (dispatch) => {
    getProduct()
        .then(res => {
            dispatch({
                type: 'FETCH_PRODUCT',
                payload: res.data
            })
        })
}

export default ProductActon