import { useSlideNumber } from '../hooks/useSlideNumber'
import Carousel from 'nuka-carousel';
import styles from '../styles/Slider.module.scss'
import SingleProduct from './SingleProduct'





const slideone = (
    <div className={styles.slider__slide}>
        <SingleProduct />
    </div>
)
const slidetwo = (
    <div className={styles.slider__slide}>
        <SingleProduct />
    </div>
)
const slidethree = (
    <div className={styles.slider__slide}>
        <SingleProduct />
    </div>
)
const slidefour = (
    <div className={styles.slider__slide}>
        <SingleProduct />
    </div>
)
const slidefive = (
    <div className={styles.slider__slide}>
        <SingleProduct />
    </div>
)
const slidesix = (
    <div className={styles.slider__slide}>
        <SingleProduct />
    </div>
)

const slides = [slideone, slidetwo, slidethree, slidefour, slidefive, slidesix]

const Slider = () => {
    const slideNumberToShow = useSlideNumber();
    return (
        <div className="wrapper">
            <div className={styles.slider} >
                <Carousel slidesToShow={slideNumberToShow}
                    renderBottomCenterControls={null}>
                    {slides.map((slide) => slide)}
                </Carousel>
            </div>
        </div >
    )
}

export default Slider

