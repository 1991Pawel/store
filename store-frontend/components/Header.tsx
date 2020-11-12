import Link from 'next/link';
import Nav from './Nav'
import SearchInput from './SearchInput'
import styles from '../styles/Header.module.scss'
import SvgCartIcon from './SvgCartIcon'
import SvgUserIcon from './SvgUserIcon'


const Header = () => {
    return (
        <header className={styles.header}>
            <SearchInput placeholder="Search" />
            <div className={styles.menu}>
                <SvgCartIcon width="25px" height="25px" />
                <SvgUserIcon width="25px" height="25px" />
            </div>
            <div className={styles.logo}>
                <Link href="/">
                    <a className={styles.link}>BestStore</a>
                </Link>
            </div>
            <Nav />
        </header>
    )
}
export default Header;

