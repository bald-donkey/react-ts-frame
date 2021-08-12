import React from 'react'
import { Toast } from "antd-mobile";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount () {
    Toast.loading('加载中...', 0)
  }

  componentWillUnmount () {
    Toast.hide()
  }

  render () {
    return (
      <></>
    )
  }
}