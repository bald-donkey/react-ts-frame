import { getProduct } from "../../api"

const creator = (type, payload) => ({ type, payload })

const ProductActon = (dispatch) => {
  getProduct()
    .then(res => {
      dispatch(creator("FETCH_PRODUCT_SUCCESS", { data: res.data }))
    })
    .catch(error => {
      dispatch(creator("FETCH_PRODUCT_FAIL", { data: null, error: error }))
    })
}

export default ProductActon