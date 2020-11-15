import { useSlideNumber } from '../hooks/useSlideNumber'
import Carousel from 'nuka-carousel';
import styles from '../styles/Slider.module.scss'
import SvgCartIcon from './SvgCartIcon'
import SvgHeartIcon from './SvgHeartIcon'

const slideone = (
    <div className={styles.slider__item}>
        <button className={styles.slider__heart}>
            <SvgHeartIcon />
        </button>
        <img src="https://images.pexels.com/photos/2560894/pexels-photo-2560894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <div className={styles.slider__content}>
            <button className={styles.slider__cart}>
                add to cart
                <SvgCartIcon />
            </button>
        </div>
    </div>
)
const slidetwo = (
    <div className={styles.slider__item}>
        <button className={styles.slider__heart}>
            <SvgHeartIcon />
        </button>
        <img src="https://images.pexels.com/photos/1232459/pexels-photo-1232459.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
        <div className={styles.slider__content}>
            <button className={styles.slider__cart}>
                add to cart
            <SvgCartIcon />
            </button>
        </div>
    </div>
)
const slidethree = (
    <div className={styles.slider__item}>
        <button className={styles.slider__heart}>
            <SvgHeartIcon />
        </button>
        <img src="https://images.pexels.com/photos/5159242/pexels-photo-5159242.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <div className={styles.slider__content}>
            <button className={styles.slider__cart}>
                add to cart
            <SvgCartIcon />
            </button>
        </div>
    </div>
)
const slidefour = (
    <div className={styles.slider__item}>
        <button className={styles.slider__heart}>
            <SvgHeartIcon />
        </button>
        <img src="https://images.pexels.com/photos/3268529/pexels-photo-3268529.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        <div className={styles.slider__content}>
            <button className={styles.slider__cart}>
                add to cart
            <SvgCartIcon />
            </button>
        </div>
    </div>
)
const slidefive = (
    <div className={styles.slider__item}>
        <button className={styles.slider__heart}>
            <SvgHeartIcon />
        </button>
        <img src="https://images.pexels.com/photos/3152187/pexels-photo-3152187.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <div className={styles.slider__content}>
            <button className={styles.slider__cart}>
                add to cart
            <SvgCartIcon />
            </button>
        </div>
    </div>
)
const slidesix = (
    <div className={styles.slider__item}>
        <button className={styles.slider__heart}>
            <SvgHeartIcon />
        </button>
        <img src="https://img01.ztat.net/article/spp-media-p1/7c2d7afa446a332aa033dbd4e42af10f/092fc816b6df4b688940012abb241c53.jpg?imwidth=1800" />
        <div className={styles.slider__content}>
            <button className={styles.slider__cart}>
                add to cart
            <SvgCartIcon />
            </button>
        </div>
    </div>
)

const Slider = () => {
    const slideNumber = useSlideNumber();

    return (
        <div className="wrapper">
            <div className={styles.slider} >
                <Carousel slidesToShow={slideNumber}
                    renderBottomCenterControls={null}>
                    {slideone}
                    {slidetwo}
                    {slidethree}
                    {slidefour}
                    {slidefive}
                    {slidesix}
                </Carousel>
            </div>
        </div >
    )
}

export default Slider

