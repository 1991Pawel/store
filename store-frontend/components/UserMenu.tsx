import React from 'react';
import styles from '../styles/UserMenu.module.scss'
import SvgCartIcon from './SvgCartIcon'
import SvgUserIcon from './SvgUserIcon'
import SvgHeartIcon from './SvgHeartIcon'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext'


const UserMenu = () => {
    const { cartItems } = useContext(CartContext)

    return (
        <div className={styles.menu} >
            {console.log(cartItems)}
            <button className={styles.menu__option}>
                <SvgUserIcon />
                <span className={styles.menu__desc}>Log in</span>
            </button>
            <button className={styles.menu__option}>
                <SvgCartIcon />
                <span className={styles.menu__desc}>$0.00</span>
                <span className={styles.menu__count}>{cartItems.length}</span>
            </button>
            <button className={styles.menu__option}>
                <SvgHeartIcon />
                <span className={styles.menu__count}>5</span>
            </button>
        </div >
    )
}
export default UserMenu