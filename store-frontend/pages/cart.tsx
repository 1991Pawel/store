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
  } = useCartContext();
  return (
    <Layout>
      <div className="wrapper">
        <div className={styles.cart}>
          <ul className={styles.cart}>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                addItemToCart={addItemToCart}
                removeItemFromCart={removeItemFromCart}
                product={item}
              />
            ))}
          </ul>
          <span>Total Price: $ {totalPrice()}</span>
        </div>
      </div>
    </Layout>
  );
};
export default Cart;
