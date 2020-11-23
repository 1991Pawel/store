import styles from '../styles/SingleProduct.module.scss';
import SvgCartIcon from './SvgCartIcon';
import SvgHeartIcon from './SvgHeartIcon';
import { Product } from '../types/type';

type SingleProductProps = {
  product: Product;
  addItemToCart: (product: Product) => void;
  removeItemFromCart: (id: number) => void;
};

const SingleProduct: React.FC<SingleProductProps> = ({
  product,
  addItemToCart,
  removeItemFromCart,
}) => {
  return (
    <div className={styles.product}>
      <div className={styles.product__item}>
        <button
          onClick={() => removeItemFromCart(product.id)}
          className={styles.product__heart}
        >
          <SvgHeartIcon />
        </button>
        <img
          src={`http://localhost:1337${product.image[0].formats.medium.url}`}
        />
        <div className={styles.product__content}>
          <p className={styles.product__title}>{product.title}</p>
          <p className={styles.product__price}>
            price: ${product.price}
          </p>
        </div>
        <button
          onClick={() => addItemToCart(product)}
          className={styles.product__cart}
        >
          add to cart
          <SvgCartIcon />
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
