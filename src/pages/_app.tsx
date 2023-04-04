
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Layout from '../components/layout';
import "bootstrap/dist/css/bootstrap.min.css";
import '../pages/global.module.scss';
import { store } from '@/ReduxToolkit/store';
import Router from 'next/router';
import { useState } from 'react';
import ShimmerEffect from './shimmer';
function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setloading] = useState(false);
  Router.events.on('routeChangeStart', (url) => {
    console.log( 'router is changes');
    
    setloading(true);

  })
  Router.events.on('routeChangeComplete', (url) => {
    console.log( 'router is finished');
    setloading(false);
  })
  return (
    <>


      <Provider store={store}>
        <Layout className="my-layout">

          {isLoading && (<ShimmerEffect />)}
          <Component {...pageProps} />


        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;