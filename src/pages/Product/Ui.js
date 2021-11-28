import Style from './style/index.module.css'

export default function ProductUi (props) {
  let { data } = props
  return (
    <>
      <div className={Style.container}>
        {console.log(props.data)}
        <ul>
          {data.map(item => {
            return (
              <li key={item.id}>
                商品名：
                <span>{item.title}</span>
                -------
                价格：
                <span>{item.price}</span>
                库存：
                <span>{item.inventory}</span>
                -----
                <button>加入购物车</button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}