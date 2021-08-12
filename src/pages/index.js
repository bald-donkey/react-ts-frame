import React from 'react';
import { getProduct } from '../api'

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount () {
    getProduct().then(res => console.log(res))

    this.props.history.push({
      pathname: '/takeNumber'
    })

  }

  render () {
    return (<></>);
  }
}

export default Page;
