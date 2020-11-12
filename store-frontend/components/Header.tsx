import Link from 'next/link';
import Nav from './Nav'
import SearchInput from './SearchInput'
import styles from '../styles/Header.module.scss'


const Header = () => {
    return (
        <header className={styles.header}>
            <SearchInput placeholder="search" />
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

