
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import "bootstrap/dist/css/bootstrap.min.css";
import '../pages/global.module.scss';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout  className="my-layout">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;