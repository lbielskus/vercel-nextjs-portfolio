import Layout from '../components/Layout';
import '../assets/styles/global.scss'; // Import global styles

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
