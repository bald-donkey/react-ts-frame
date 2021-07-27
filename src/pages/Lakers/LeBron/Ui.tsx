import React from "react"

export default function ProductUi(props: any) {
    let {data=[]} = props
    return (
        <fieldset>
            <legend>Product</legend>
            <ul>
                {data.map( (item: any) => {
                    return (
                        <li key={item.id}>
                            商品名：
                            <span>{item.title}</span>
                            ---
                            价格：
                            <b>{item.price}</b>
                            ---
                            库存：
                            <span>{item.inventory}</span>
                            <button>加入购物车</button>
                        </li>
                    )
                })}
            </ul>
        </fieldset>
    )
}