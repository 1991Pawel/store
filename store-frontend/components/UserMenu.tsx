import React from 'react';
import styles from '../styles/UserMenu.module.scss';
import SvgCartIcon from './SvgCartIcon';
import SvgUserIcon from './SvgUserIcon';
import SvgHeartIcon from './SvgHeartIcon';
import { useCartContext } from '../context/CartContext';

const UserMenu: React.FC = () => {
  const { cartItems, totalPrice } = useCartContext();

  return (
    <div className={styles.menu}>
      <button className={styles.menu__option}>
        <SvgUserIcon />
        <span className={styles.menu__desc}>Log in</span>
      </button>
      <button className={styles.menu__option}>
        <SvgCartIcon />
        <span className={styles.menu__desc}>{totalPrice()} $</span>
        {Boolean(cartItems.length) && (
          <span className={styles.menu__count}>
            {cartItems.length}
          </span>
        )}
      </button>
      <button className={styles.menu__option}>
        <SvgHeartIcon />
        <span className={styles.menu__count}>3</span>
      </button>
    </div>
  );
};
export default UserMenu;
