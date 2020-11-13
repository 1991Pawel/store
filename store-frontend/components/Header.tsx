import Link from 'next/link';
import Nav from './Nav'
import SearchInput from './SearchInput'
import styles from '../styles/Header.module.scss'
import SvgCartIcon from './SvgCartIcon'
import SvgUserIcon from './SvgUserIcon'
import SvgHeartIcon from './SvgHeartIcon'


const Header = () => {
    return (
        <div className="wrapper">
            <header className={styles.header}>
                <div className={styles.header__search}>
                    <SearchInput placeholder="Search" />
                </div>
                <div className={styles.header__logo}>
                    <Link href="/">
                        <a>BestStore</a>
                    </Link>
                </div>
                <div className={styles.menu}>
                    <button className={styles.menu__option}>
                        <SvgUserIcon />
                        <span className={styles.menu__desc}>Log in</span>
                    </button>
                    <button className={styles.menu__option}>
                        <SvgCartIcon />
                        <span className={styles.menu__desc}>$0.00</span>
                    </button>
                    <button className={styles.menu__option}>
                        <SvgHeartIcon />
                        <span className={styles.menu__count}>5</span>
                    </button>
                </div>
                <div className={styles.header__nav}>
                    <Nav />
                </div>
            </header>
        </div>
    )
}
export default Header;

