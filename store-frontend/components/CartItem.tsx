import styles from '../styles/CartItem.module.scss';
import { Product } from '../types/type';

type CartItemProps = {
  product: Product;
};

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  return (
    <li className={styles.cartItem}>
      {console.log(product)}
      <p>lorem</p>
      <img
        className={styles.cartItem__img}
        src={`http://localhost:1337${product.image[0].formats.medium.url}`}
      />
      <div className={styles.cartItem__content}>
        <h5 className={styles.cartItem__title}>{product.title}</h5>
        <p className={styles.cartItem__desc}>{product.description}</p>
        <span className={styles.cartItem__price}>
          price: ${product.price}
        </span>
      </div>
    </li>
  );
};

export default CartItem;
