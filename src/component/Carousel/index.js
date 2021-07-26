import { Carousel, WingBlank } from 'antd-mobile';

export default function Carousel_JS () {
    return (
        <WingBlank>
            <Carousel className="my-carousel"
                vertical
                dots={false}
                dragging={false}
                swiping={false}
                autoplay
                infinite
            >
                <div className="v-item">carousel 1</div>
                <div className="v-item">carousel 2</div>
                <div className="v-item">carousel 3</div>
            </Carousel>
        </WingBlank>
    )
}
