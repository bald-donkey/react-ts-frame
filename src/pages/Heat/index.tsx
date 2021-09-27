import { Fragment } from "react";
import { Link } from 'react-router-dom'
import { getLawPush } from '../../api'

export default function Heat(props: any) {
    return (
        <Fragment>
            <section>迈阿密·热火 ---- 你个大秃驴</section>
            <div>
                <ul>
                    <li>
                        <Link to="/heat">热火</Link>
                    </li>
                    <li>
                        <Link to="/lakers/davis">湖人</Link>
                    </li>
                    <li>
                        <Link to="/product">产品</Link>
                    </li>
                </ul>
                <button
                    onClick={() => {
                        getLawPush().then(res => {
                            console.log(res);

                        })
                    }}
                >点击</button>
            </div>
        </Fragment>
    )
}