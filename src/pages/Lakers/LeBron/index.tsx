import React, { Fragment } from "react";
import store from '../../../store'
import action from '../../../store/actions'

export default class LeBron extends React.Component {
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        store.dispatch(action)
    }

    render() {
        return (
            <Fragment>
                <section>勒布朗·詹姆斯</section>
            </Fragment>
        )
    }
}