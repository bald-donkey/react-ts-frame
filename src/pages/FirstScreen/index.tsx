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
        // background: 'hotpink',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px'
      }}>
        努力加载中，请稍后......
      </div>
    )
  }
}

export default connect()(FirstScreen)