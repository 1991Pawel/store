import { useCartContext } from '../context/CartContext';
import Layout from '../components/Layout';
import styles from '../styles/Cart.module.scss';
import CartItem from '../components/CartItem';
import TotalOrder from '../components/TotalOrder';

const Cart: React.FC = () => {
  const {
    cartItems,
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
              <TotalOrder />
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
