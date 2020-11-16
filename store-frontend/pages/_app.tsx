import '../styles/global.css'
import '../styles/_variables.scss';
import CartProvider from '../context/CartContext'

const App = ({ Component, pageProps }: any) => {
  const { storeData } = pageProps;

  return (
    <>
      <CartProvider data={storeData}>
        <Component {...pageProps} />
      </CartProvider>
    </>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  const __SERVER__ = typeof window === "undefined";
  const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  if (!__SERVER__) return { pageProps: { ...appProps } };

  const storeData = [{ id: 1, name: "Bluza" }, { id: 2, name: "Koszula " }];

  return { pageProps: { ...appProps, storeData } };
};

export default App;