let defaultState = {
  isFetching: false,
  data: [],
  error: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default  (state = defaultState, action) => {
  let {type, payload} = action;
  console.log(type);
  switch(type) {
      case "FETCH_PRODUCT_REQUEST": // 正在抓取数据
          return Object.assign({}, state, {
              isFetching: true,
          })
      case "FETCH_PRODUCT_SUCCESS": // 抓取数据成功
          return Object.assign({}, state, {
              isFetching: false,
              data: payload.data
          })
      case "FETCH_PRODUCT_FAIL": // 抓取数据失败
          return Object.assign({}, state, {
              isFetching: false,
              error: payload.error
          })
      default:
          return {...state};
  }
}