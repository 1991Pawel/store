import type { AppProps } from 'next/app';
import '../styles/global.css';
import '../styles/_variables.scss';
import CartProvider from '../context/CartContext';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
};

export default App;
