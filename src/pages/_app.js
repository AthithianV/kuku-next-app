import { Provider } from 'react-redux';
import { useStore } from '../store/store';
import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
    <Head>
        <title>KukuFM Clone</title>
        <meta name="description" content="A clone landing page of Kuku FM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
    </>
  );
}

export default MyApp;
