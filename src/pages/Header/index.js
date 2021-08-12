import React from 'react'
import HeaderStyle from './Header.module.css'
import { formateDate } from "../../utils/dateUtils";

let timer
export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '江苏省高级人民法院',
      currentTime: formateDate(Date.now()), // 当前时间的字符串形式
      // currentTime: ['10:00:00', '5月4日 周一'], // 当前时间的字符串形式
    };
  }

  componentDidMount () {
    // 获取当前的时间
    this.getTime()
  }

  getTime = () => {
    timer = setInterval(() => {
      const currentTime = formateDate(Date.now())
      this.setState({ currentTime })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(timer)
  }

  render () {
    return (
      <div className={HeaderStyle.header}>
        <div className={HeaderStyle.left}>
          {this.state.name}
        </div>
        <div className={HeaderStyle.right}>
          <div className={HeaderStyle.right_top}>
            {this.state.currentTime[0]}
          </div>
          <div className={HeaderStyle.right_bottom}>
            {this.state.currentTime[1]}
            {/* {'10月20日 周四'} */}
          </div>
        </div>
      </div>
    )
  }
}


