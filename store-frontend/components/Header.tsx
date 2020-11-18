import Link from 'next/link';
import Nav from './Nav';
import SearchInput from './SearchInput';
import styles from '../styles/Header.module.scss';
import UserMenu from './UserMenu';

const Header: React.FC = () => {
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
        <UserMenu />
        <div className={styles.header__nav}>
          <Nav />
        </div>
      </header>
    </div>
  );
};
export default Header;
