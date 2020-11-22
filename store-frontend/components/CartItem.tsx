import styles from '../styles/CartItem.module.scss';

const CartItem = ({ item }) => {
  {
    console.log(item);
  }
  return (
    <li className={styles.cartItem}>
      <p>Tytuł Produktyu</p>
      <span>cena: {item.price} $</span>
      <img
        src={`http://localhost:1337${item.image[0].formats.medium.url}`}
      />
    </li>
  );
};

export default CartItem;
