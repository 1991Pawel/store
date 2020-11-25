import { useCartContext } from '../context/CartContext';
import styles from '../styles/Cart.module.scss';
import CartItem from '../components/CartItem';
import Layout from '../components/Layout';

const Cart: React.FC = () => {
  const {
    cartItems,
    totalPrice,
    addItemToCart,
    removeItemFromCart,
    decrementItemFromCart,
  } = useCartContext();
  return (
    <Layout>
      <div className="wrapper">
        <div className={styles.cart}>
          {cartItems.length ? (
            <>
              <ul className={styles.cart__inner}>
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    addItemToCart={addItemToCart}
                    removeItemFromCart={removeItemFromCart}
                    decrementItemFromCart={decrementItemFromCart}
                    product={item}
                  />
                ))}
              </ul>
              <span className={styles.cart__total}>
                Total Price: $ {totalPrice()}
              </span>
            </>
          ) : (
            <p className={styles.cart__info}>
              twój koszyk jest pusty
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};
export default Cart;
