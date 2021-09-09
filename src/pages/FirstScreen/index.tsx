import { Component } from 'react'
import { connect } from 'react-redux'

class FirstScreen extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div style={{
        background: 'hotpink',
        height: '100%',
        width: '100%'
      }}>
        首屏渲染加载页面
      </div>
    )
  }
}

export default connect()(FirstScreen)