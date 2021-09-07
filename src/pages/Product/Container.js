import React from "react";
import { connect } from 'react-redux'
import Ui from "./Ui"
import action from '../../store/actions'

const mapStateToProps = (state) => {
  return { Goods: state.Goods }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProductData () {
      dispatch(action)
    }
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    this.props.getProductData();
  }

  render () {
    let { Goods } = this.props; // 返回的对象再次解构
    let { isFetching, data = [], error } = Goods;
    console.log(Goods);

    if (isFetching) {
      // 正在抓取数据
      return (
        <h1>正在获取数据...</h1>
      )
    } else if (!isFetching && data.length) {
      // 成功获取数据
      return (
        <Ui data={data}></Ui>
      )
    } else if (!isFetching && error) {
      return (
        <h1>获取数据出错...</h1>
      )
    }

    return null // 初次需要反回null  }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)