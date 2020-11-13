import styles from '../styles/BestSellers.module.scss'

const BestSellers = () => (
    <section className={styles.best}>
        <div className="wrapper">
            <h2>BestSellers</h2>
            <ul className={styles.best__items}>
                <li className={styles.best__item}>
                    <p className={styles.best__title}>description</p>
                    <img src="https://img01.ztat.net/article/spp-media-p1/4e5c287bfcb332fbbb2bd4194f0775a8/aef9d23778ed46a99994a27fe8bdd99a.jpg?imwidth=762" alt="" />
                </li>
                <li className={styles.best__item}>
                    <p className={styles.best__title}>description</p>
                    <img src="https://img01.ztat.net/article/spp-media-p1/7c2d7afa446a332aa033dbd4e42af10f/092fc816b6df4b688940012abb241c53.jpg?imwidth=1800" alt="" />
                </li>
                <li className={styles.best__item}>
                    <p className={styles.best__title}>description</p>
                    <img src="https://img01.ztat.net/article/spp-media-p1/abef8788b9273812951dd4db48b11ac7/e90e74d7b04c4caaa493608422c6ec6f.jpg?imwidth=1800" alt="" />
                </li>
                <li className={styles.best__item}>
                    <p className={styles.best__title}>description</p>
                    <img src="https://img01.ztat.net/article/spp-media-p1/7c2d7afa446a332aa033dbd4e42af10f/092fc816b6df4b688940012abb241c53.jpg?imwidth=1800" alt="" />
                </li>
            </ul>
        </div>
    </section>
)

export default BestSellers;