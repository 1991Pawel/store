import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'


const Layout: React.FC = ({ children }) => {
    return (
        (
            <div>
                <Head>
                    <title>Zmienić na dynamiczny title</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Header />
                {children}
                <Footer />
            </div>
        )
    )
}
export default Layout;






