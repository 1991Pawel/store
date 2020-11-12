import Nav from './Nav'
import styles from '../styles/header.module.scss'


const Header = () => {
    return (
        <header className={styles.header}>
            <form className="search">
                <input className="search__input" type="text" placeholder="Search.." />
            </form>
            <div className="logo">
                BestStore
            </div>
            <Nav />
        </header>
    )
}


export default Header;