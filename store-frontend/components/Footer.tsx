import Link from 'next/link';
import styles from '../styles/Footer.module.scss'
import SvgFacebookIcon from './SvgFacebook'
import SvgInstagramIcon from './SvgInstagram'
import SvgMailIcon from './SvgMailIcon'

const Footer = () => (
    <footer className={styles.footer}>
        <div className="wrapper">
            <ul className={styles.social}>
                <li className={styles.social__item}>
                    <Link href="/">
                        <a>
                            <SvgFacebookIcon />
                        </a>
                    </Link>
                </li>
                <li className={styles.social__item}>
                    <Link href="/">
                        <a>
                            <SvgInstagramIcon />
                        </a>
                    </Link>
                </li>
                <li className={styles.social__item}>
                    <Link href="/">
                        <a>
                            <SvgMailIcon />
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    </footer>
)

export default Footer;