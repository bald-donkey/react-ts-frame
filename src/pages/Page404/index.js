import React from "react";
import { Link } from 'react-router-dom'
import notFound from './index.module.scss'

export default function Page404 (props) {
  let { history } = props;

  return (
    <div className={notFound.bg__box}>
      <div className={notFound.bg__container}>
        <div className={notFound.head404}></div>
        <div className={notFound.txtbg404}>
          <div className={notFound.txtbox}>
            <p>对不起，您请求的页面不存在、或已被删除、或暂时不可用</p>
            <p className={notFound.paddingbox}>请点击以下链接继续浏览网页</p>
            <p>
              》
              <a href="url" onClick={(e) => {
                e.preventDefault();
                history.go(-1);
              }}>返回上一个页面</a>
              <br />
            </p>
            <p>
              》
              <Link to='/'>
                返回网站首页
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}