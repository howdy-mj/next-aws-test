import type { AppProps } from 'next/app';
import '../styles/globals.css';

import { wrapper } from '../stores/index';

const WrappedApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(WrappedApp);
