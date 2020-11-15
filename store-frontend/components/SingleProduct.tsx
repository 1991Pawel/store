import styles from '../styles/SingleProduct.module.scss'
import SvgCartIcon from './SvgCartIcon'
import SvgHeartIcon from './SvgHeartIcon'


const SingleProduct = () => {
    return (
        <div className={styles.product}>
            <div className={styles.product__item}>
                <button className={styles.product__heart}>
                    <SvgHeartIcon />
                </button>
                <img src="https://images.pexels.com/photos/2560894/pexels-photo-2560894.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                <div className={styles.product__content}>
                    <p className={styles.product__title}>ALEXA TANK - Top</p>
                    <p className={styles.product__price}>cena: 155zł</p>
                </div>
                <button className={styles.product__cart}>
                    add to cart
                <SvgCartIcon />
                </button>
            </div>
        </div>
    )
}

export default SingleProduct;