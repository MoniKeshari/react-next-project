
import type { AppProps } from 'next/app';
import {Provider} from 'react-redux';
import Layout from '../components/layout';
import "bootstrap/dist/css/bootstrap.min.css";
import '../pages/global.module.scss';
import { store } from '@/ReduxToolkit/store';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Provider store={store}>
    <Layout  className="my-layout">
      <Component {...pageProps} />
    </Layout>
    </Provider>
    </>
  );
}

export default MyApp;