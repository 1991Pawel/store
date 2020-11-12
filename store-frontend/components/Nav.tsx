import Link from 'next/link';
import styles from '../styles/Nav.module.scss'

const Nav = () => (
    <nav className={styles.nav}>
        <ul>
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a>Sale</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a>Woman</a>
                </Link>
            </li>
            <li>
                <Link href="/">
                    <a>Man</a>
                </Link>
            </li>
        </ul>
    </nav>
)
export default Nav;
