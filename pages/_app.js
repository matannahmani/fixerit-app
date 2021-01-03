import '../styles/index.scss';
import NProgress from 'nprogress';
import Router from 'next/router';
import 'nprogress/nprogress.css'; //styles of nprogress

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: true });

Router.onRouteChangeStart = () => {
  // console.log('onRouteChangeStart triggered');
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChangeComplete triggered');
  NProgress.done();
};

Router.onRouteChangeError = () => {
  // console.log('onRouteChangeError triggered');
  NProgress.done();
};
  return (
  <Component {...pageProps} />
  )
}

export default MyApp
