import type { AppProps } from 'next/app';
import '../styles/global.css';
import '../styles/_variables.scss';
import CartProvider from '../context/CartContext';
import FavoriteProvider from '../context/FavoriteContext';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <CartProvider>
        <FavoriteProvider>
          <Component {...pageProps} />
        </FavoriteProvider>
      </CartProvider>
    </>
  );
};

export default App;
