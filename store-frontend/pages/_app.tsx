import '../styles/global.css'
import '../styles/_variables.scss';
import { CartProvider } from '../context/CartContext'


function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  )
}

export default MyApp
