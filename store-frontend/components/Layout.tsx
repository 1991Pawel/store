import Head from 'next/head'
import Header from './Header'
import styles from '../styles/Layout.module.scss'


const Layout: React.FC = ({ children }) => {
    return (
        (
            <div className={styles.container}>
                <Head>
                    <title>Zmienić na dynamiczny title</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Header />
                {children}
                <footer>{'I`m here to stay'}</footer>
            </div>
        )
    )
}
export default Layout;






