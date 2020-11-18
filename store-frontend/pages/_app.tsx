import '../styles/global.css';
import '../styles/_variables.scss';
import CartProvider from '../context/CartContext';

const App = ({ Component, pageProps }) => {
  const { storeData } = pageProps;

  return (
    <>
      <CartProvider data={storeData}>
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  const __SERVER__ = typeof window === 'undefined';
  const appProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  const appData = {};

  if (__SERVER__) {
    try {
      const { user_id: userId = null } = ctx.req.cookies;

      // const response = await fetch(`/saved_store/${userId}`);
      // const data = response.json();

      const storeData = [
        { id: 1, name: 'Bluza' },
        { id: 2, name: 'Koszula ' },
      ];

      appData.storeData = storeData;
      appData.userId = userId;
    } catch {}
  }

  return { pageProps: { ...appProps, ...appData } };
};

export default App;
