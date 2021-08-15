import React from 'react'

export default class Page extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.history.push({
      pathname: '/heat'
    })
  }

  render() {
    return (<></>)
  }
}