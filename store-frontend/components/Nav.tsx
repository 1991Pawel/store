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
                <Link href="/sale">
                    <a>Sale</a>
                </Link>
            </li>
            <li>
                <Link href="/woman">
                    <a>Woman</a>
                </Link>
            </li>
            <li>
                <Link href="/man">
                    <a>Man</a>
                </Link>
            </li>
        </ul>
    </nav>
)
export default Nav;
