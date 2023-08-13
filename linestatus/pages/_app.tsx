import '@/styles/global.css';
import type { AppProps } from 'next/app';
import React from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}
