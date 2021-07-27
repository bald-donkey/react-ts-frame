import { getProduct } from "../../api"

const creator = (type, payload) => ({ type, payload })

const ProductActon = (dispatch) => {
    getProduct()
      .then(res => {
        // 成功时 --- 稍作延时，制造发起时时间
            dispatch(creator("FETCH_PRODUCT_SUCCESS", {data: res.data}))
      })
      .catch(error => { 
          // 失败时
          dispatch(creator("FETCH_PRODUCT_FAIL", {data: null, error:error}))
      })
}

export default ProductActon