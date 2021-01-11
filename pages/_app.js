import '../styles/index.scss';
import NProgress from 'nprogress';
import Router from 'next/router';
import 'nprogress/nprogress.css'; //styles of nprogress

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: true });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = (url) => {
  NProgress.done();
  console.log(url);
};

Router.onRouteChangeError = () => {
  NProgress.done();
};
  return (
  <Component {...pageProps} />
  )
}

export default MyApp
