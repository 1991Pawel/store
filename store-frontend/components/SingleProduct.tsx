import styles from '../styles/SingleProduct.module.scss'
import SvgCartIcon from './SvgCartIcon'
import SvgHeartIcon from './SvgHeartIcon'


const SingleProduct = ({ product, addItemToCart, removeItemFromCart }: any) => {
    return (
        <div className={styles.product}>
            <div className={styles.product__item}>
                <button onClick={() => addItemToCart(product)} className={styles.product__heart}>
                    <SvgHeartIcon />
                </button>
                <img src={`http://localhost:1337${product.image[0].formats.medium.url}`} />
                <div className={styles.product__content}>
                    <p className={styles.product__title}>{product.title}</p>
                    <p className={styles.product__price}>cena: {product.price}</p>
                </div>
                <button onClick={() => addItemToCart(product)} className={styles.product__cart}>
                    add to cart
                <SvgCartIcon />
                </button>
            </div>
        </div>
    )
}

export default SingleProduct;