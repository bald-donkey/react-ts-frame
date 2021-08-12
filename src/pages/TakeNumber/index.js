import React from 'react'
import Style from './index.module.css'

export default class TakeNumber extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 1070,
      floor: 10,
      window: 1,
    }
  }

  getDouble (num) {
    return num < 10 ? '0' + num : num;
  }

  click () {
    this.props.history.push({
      pathname: '/welcome'
    })
  }

  render () {
    return (
      <>
        <div className={Style.container} onClick={this.click.bind(this)}>
          <div className={Style.top}>{this.state.number}</div>
          <div className={Style.bottom}>
            <span className={Style.color}>{this.state.floor}</span>
            <span>楼层</span>
            <span className={Style.color}>{this.getDouble(this.state.window)}</span>
            <span>窗口</span>
          </div>
        </div>
      </>
    )
  }
}

