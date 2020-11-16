import React, { useEffect, useState } from 'react';
import styles from '../styles/UserMenu.module.scss'
import SvgCartIcon from './SvgCartIcon'
import SvgUserIcon from './SvgUserIcon'
import SvgHeartIcon from './SvgHeartIcon'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext'

const UserMenu = () => {
    const { cartItems } = useContext(CartContext)
    const [cartLength, setCartLength] = useState(0);

    useEffect(() => {
        setCartLength(cartItems.length)
    }, [cartItems])

    return React.useMemo(() => (
        <div className={styles.menu} >
            <button className={styles.menu__option}>
                <SvgUserIcon />
                <span className={styles.menu__desc}>Log in</span>
            </button>
            <button className={styles.menu__option}>
                <SvgCartIcon />
                <span className={styles.menu__desc}>$0.00</span>
                {cartLength && <span className={styles.menu__count}>{cartLength}</span>}
            </button>
            <button className={styles.menu__option}>
                <SvgHeartIcon />
                <span className={styles.menu__count}>5</span>
            </button>
        </div >
    ), [cartItems.length, cartLength, setCartLength])
}
export default UserMenu