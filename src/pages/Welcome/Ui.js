import './index.css'
import cs from 'classnames'

export default function ProductUi (props) {
  let { name, jobNumber, btn_small } = props.state
  return (
    <>
      <div className={'container'}>
        <div className={'top'}>
          <div className={'top_left'}>
            <div className={'top_left_img'}>
              <img src={require('../../assets/imgs/touXiang.png').default} alt="" />
            </div>
            <div className={'top_left_name'}>
              <div>{`姓名：${name}`}</div>
              <div>{`工号：${jobNumber}`}</div>
            </div>
          </div>
          <div className={'top_center'}></div>
          <div className={'top_right'}></div>
        </div>
        <div className={'center'}>
          <div className={cs({ 'btn_big': !btn_small, 'btn_small': btn_small })}
            onClick={props.btn_appraise}
          ></div>
        </div>
        <div className={'bottom'}>
          <div className={'btn_introduce'}
            onClick={props.btn_introduce}></div>
          <div className={'btn_video'}
            onClick={props.btn_video}></div>
          <div className={'robot'} onClick={props.btn_counsel}></div>
          <div className={'yuYin'}></div>
        </div>
      </div>
    </>
  )
}