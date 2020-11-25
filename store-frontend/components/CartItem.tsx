import styles from '../styles/CartItem.module.scss';
import { Product } from '../types/type';

type CartItemProps = {
  product: Product;
  addItemToCart: any;
  removeItemFromCart: any;
  decrementItemFromCart: any;
};

const CartItem: React.FC<CartItemProps> = ({
  product,
  addItemToCart,
  removeItemFromCart,
  decrementItemFromCart,
}) => {
  const price = (product.price * product.quantity).toFixed(2);
  return (
    <li className={styles.cartItem}>
      <img
        className={styles.cartItem__img}
        src={`http://localhost:1337${product.image[0].formats.medium.url}`}
      />
      <div className={styles.cartItem__inner}>
        <button
          className={styles.cartItem__removeBtn}
          onClick={() => removeItemFromCart(product.id)}
        >
          x
        </button>
        <h5 className={styles.cartItem__title}>{product.title}</h5>
        <div className={styles.cartItem__controlls}>
          <div className={styles.cartItem__row}>
            <div className={styles.quantity}>
              <button
                onClick={() => decrementItemFromCart(product.id)}
                className={styles.quantity__btn}
              >
                -
              </button>
              <span className={styles.quantity__count}>
                {product.quantity}
              </span>
              <button
                onClick={() => addItemToCart(product)}
                className={styles.quantity__btn}
              >
                +
              </button>
            </div>
            <span className={styles.cartItem__price}>$ {price}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
