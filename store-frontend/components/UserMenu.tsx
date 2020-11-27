import React from 'react';
import Link from 'next/link';
import styles from '../styles/UserMenu.module.scss';
import SvgCartIcon from './SvgCartIcon';
import SvgUserIcon from './SvgUserIcon';
import SvgHeartIcon from './SvgHeartIcon';
import { useCartContext } from '../context/CartContext';

const UserMenu: React.FC = () => {
  const { totalProducts, totalPrice } = useCartContext();

  return (
    <div className={styles.menu}>
      <div className={styles.menu__option}>
        <SvgUserIcon />
        <span className={styles.menu__desc}>Log in</span>
      </div>
      <Link href="/cart">
        <a className={styles.menu__option}>
          <SvgCartIcon />
          <span className={styles.menu__desc}>$ {totalPrice()}</span>
          {Boolean(totalProducts()) && (
            <span className={styles.menu__count}>
              {totalProducts()}
            </span>
          )}
        </a>
      </Link>
      <div className={styles.menu__option}>
        <SvgHeartIcon />
        <span className={styles.menu__count}>3</span>
      </div>
    </div>
  );
};
export default UserMenu;
