import Link from 'next/link';
import styles from '../styles/Footer.module.scss';
import SvgFacebookIcon from './SvgFacebook';
import SvgInstagramIcon from './SvgInstagram';
import SvgMailIcon from './SvgMailIcon';

const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className="wrapper">
      <h5 className={styles.footer__title}>BestStore</h5>
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
      <p className={styles.footer__copyright}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
        dicta.
      </p>
    </div>
  </footer>
);

export default Footer;
