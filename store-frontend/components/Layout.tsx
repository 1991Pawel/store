import Header from './Header'
import Head from 'next/head'


const Layout: React.FC = ({ children }) => {
    return (
        (
            <div>
                <Head>
                    <title>Title</title>
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






