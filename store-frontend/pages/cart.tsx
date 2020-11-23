import { useCartContext } from '../context/CartContext';
import styles from '../styles/Cart.module.scss';
import CartItem from '../components/CartItem';
import Layout from '../components/Layout';

const Cart: React.FC = () => {
  const { cartItems, totalPrice } = useCartContext();
  return (
    <Layout>
      <div className="wrapper">
        <div className={styles.cart}>
          <p>lorem</p>
          <ul className={styles.cart}>
            {cartItems.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </ul>
          <span>Total Price: $ {totalPrice()}</span>
        </div>
      </div>
    </Layout>
  );
};
export default Cart;
