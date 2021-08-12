import { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../Header'
import AppStyle from '../../assets/css/App.module.css'

class FirstScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className={AppStyle.firstScreen}>
        <Header></Header>
      </div>
    )
  }
}

export default connect()(FirstScreen)