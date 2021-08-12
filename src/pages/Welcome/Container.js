import React from "react";
import { connect } from 'react-redux'
import Ui from "./Ui"

const mapStateToProps = (state) => {
  return { Goods: state.Goods }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProductData () {
      // dispatch(action)
    }
  }
}

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '徐杰',
      jobNumber: 66688,
      btn_small: false, // 控制动态添加类名
    };
  }

  componentDidMount () {
    this.props.getProductData();
  }

  btn_appraise () {
    this.setState({
      btn_small: true
    })
    setTimeout(() => {
      this.props.history.push({
        pathname: '/inputData'
      })
    }, 200)
  }

  btn_introduce () {
    console.log('btn_introduce');
  }

  btn_video () {
    console.log('btn_video');
  }

  btn_counsel () {
    window.open('http://www.baidu.com')
  }

  render () {

    return (<Ui state={this.state} btn_appraise={this.btn_appraise.bind(this)} btn_introduce={this.btn_introduce.bind(this)} btn_video={this.btn_video.bind(this)} btn_counsel={this.btn_counsel.bind(this)}></Ui>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)