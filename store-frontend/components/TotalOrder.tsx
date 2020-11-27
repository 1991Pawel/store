import { useCartContext } from '../context/CartContext';
import styles from '../styles/TotalOrder.module.scss';

const TotalOrder: React.FC = () => {
  const { totalPrice, totalProducts } = useCartContext();
  return (
    <section className={styles.total}>
      <h2>Cart Totals</h2>
      <div className={styles.total__inner}>
        <p
          className={styles.total__price}
        >{`Total Price: $${totalPrice()}`}</p>
        <p
          className={styles.total__products}
        >{`Total Products: ${totalProducts()}`}</p>
        <div className={styles.total__footer}>
          <button className={styles.total__btn}>
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </section>
  );
};
export default TotalOrder;
