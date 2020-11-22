import { useCartContext } from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const { cartItems, totalPrice } = useCartContext();
  return (
    <>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
      <span>Total Price {totalPrice()} $</span>
    </>
  );
};
export default Cart;
