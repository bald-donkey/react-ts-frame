import React, { Fragment } from "react";
import LoadingStyle from './index.module.scss'

export default class Loading extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className={LoadingStyle.box}>
          <div className={LoadingStyle.top__text}>
            ᴵˈᵐ ᵒᵏ(ᵕ̣̣̣̣̣ ͜ ᵕ̣̣̣̣̣ ˶ )♡ л̵

          </div>
          <div className={LoadingStyle.center_text}>
            努力加载中，请稍后...
          </div>
        </div>
      </Fragment>
    )
  }
}