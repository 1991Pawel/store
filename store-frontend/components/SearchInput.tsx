import styles from '../styles/SearchInput.module.scss'
import SvgSearch from './SvgSearchIcon'
const SearchInput = ({ ...res }) => {
    return (
        <form className={styles.search}>
            <div className={styles.wrapper}>
                <input className={styles.input} type="text" {...res} />
                <button className={styles.btn}>
                    <SvgSearch width="20" height="20" fill="#3F3F3F" />
                </button>
            </div>
        </form>
    )
}

export default SearchInput;