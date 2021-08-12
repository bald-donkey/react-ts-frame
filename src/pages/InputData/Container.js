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

    };
  }

  componentDidMount () {
    this.props.getProductData();
  }

  render () {

    return (<Ui></Ui>)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)