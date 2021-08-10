import React from "react";
import {connect} from 'react-redux'
// import store from '../../../store'
import action from '../../../store/actions'
import Ui from "./Ui"

const mapStateToProps = (state: any) => {
  // 将redux中的state映射进入product组件
  return { Goods: state.Goods }
}

const mapDispatchToProps = (dispatch: any) => {
    // 将redux中的dispatch映射进入product组件
    return {
        getProductData() {
        // 发起action，所有的action必须由视图层发起
        dispatch(action)
        }
    }
  }


class LeBron extends React.Component<any> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getProductData();
    }

    render() {
      let {Goods} = this.props; // 返回的对象再次解构
      let {isFetching, data, error} = Goods;
      
      if (isFetching) {
          // 正在抓取数据
          return (<h1>正在获取数据...</h1>)
      } else if (!isFetching && data.length) {
          // 成功获取数据
          return (<Ui data={data}></Ui>)
      } else if (!isFetching && error) {
          return (<h1>获取数据出错...</h1>)
      }
      return null
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LeBron)