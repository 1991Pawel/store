import styles from '../styles/NewCollection.module.scss';

const NewCollection: React.FC = () => (
  <section className={styles.new}>
    <div className="wrapper">
      <h2>New colection</h2>
      <ul className={styles.new__items}>
        <li className={styles.new__item}>
          <button className={styles.new__btn}>discover</button>
          <img
            src="https://img01.ztat.net/article/spp-media-p1/4e5c287bfcb332fbbb2bd4194f0775a8/aef9d23778ed46a99994a27fe8bdd99a.jpg?imwidth=762"
            alt=""
          />
        </li>
        <li className={styles.new__item}>
          <button className={styles.new__btn}>discover</button>
          <img
            src="https://img01.ztat.net/article/spp-media-p1/c6afcbbdf2173c5da83cb65665ee2236/ffa99fb038674d0e92c2655ddb620333.jpg?imwidth=1800"
            alt=""
          />
        </li>
        <li className={styles.new__item}>
          <button className={styles.new__btn}>discover</button>
          <img
            src="https://img01.ztat.net/article/spp-media-p1/abef8788b9273812951dd4db48b11ac7/e90e74d7b04c4caaa493608422c6ec6f.jpg?imwidth=1800"
            alt=""
          />
        </li>
        <li className={styles.new__item}>
          <button className={styles.new__btn}>discover</button>
          <img
            src="https://img01.ztat.net/article/spp-media-p1/7c2d7afa446a332aa033dbd4e42af10f/092fc816b6df4b688940012abb241c53.jpg?imwidth=1800"
            alt=""
          />
        </li>
      </ul>
    </div>
  </section>
);

export default NewCollection;
