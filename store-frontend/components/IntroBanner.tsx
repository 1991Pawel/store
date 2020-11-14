import styles from '../styles/IntroBanner.module.scss'

const IntroBanner = () => (
    <div className="wrapper">
        <div className={styles.intro}>
            <div className={styles.intro__content}>
                <h1 className={styles.intro__title}>Mid Season Sale up to 70%</h1>
                <button className={styles.intro__btn}>Discover</button>
            </div>
        </div>

    </div>
)

export default IntroBanner;