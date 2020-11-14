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
        <img src="https://img01.ztat.net/article/spp-media-p1/7c2d7afa446a332aa033dbd4e42af10f/092fc816b6df4b688940012abb241c53.jpg?imwidth=1800" />
        <div className={styles.slider__content}>
            <h5 className={styles.slider__desc}>Name of this products</h5>
            <button className={styles.slider__cart}>
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
        <img src="https://img01.ztat.net/article/spp-media-p1/7c2d7afa446a332aa033dbd4e42af10f/092fc816b6df4b688940012abb241c53.jpg?imwidth=1800" />
        <div className={styles.slider__content}>
            <h5 className={styles.slider__desc}>Name of this products</h5>
            <button className={styles.slider__cart}>
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
        <img src="https://img01.ztat.net/article/spp-media-p1/7c2d7afa446a332aa033dbd4e42af10f/092fc816b6df4b688940012abb241c53.jpg?imwidth=1800" />
        <div className={styles.slider__content}>
            <h5 className={styles.slider__desc}>Name of this products</h5>
            <button className={styles.slider__cart}>
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
        <img src="https://img01.ztat.net/article/spp-media-p1/7c2d7afa446a332aa033dbd4e42af10f/092fc816b6df4b688940012abb241c53.jpg?imwidth=1800" />
        <div className={styles.slider__content}>
            <h5 className={styles.slider__desc}>Name of this products</h5>
            <button className={styles.slider__cart}>
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
        <img src="https://img01.ztat.net/article/spp-media-p1/7c2d7afa446a332aa033dbd4e42af10f/092fc816b6df4b688940012abb241c53.jpg?imwidth=1800" />
        <div className={styles.slider__content}>
            <h5 className={styles.slider__desc}>Name of this products</h5>
            <button className={styles.slider__cart}>
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
            <h5 className={styles.slider__desc}>Name of this products</h5>
            <button className={styles.slider__cart}>
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
                <Carousel slidesToShow={slideNumber}>
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

