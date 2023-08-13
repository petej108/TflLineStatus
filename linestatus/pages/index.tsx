import Head from 'next/head';
import styles from '@/pages/index.module.css';

import { useState } from 'react';
import LineStatusWrapper from '@/components/LineStatusWrapper';

export default function Home() {
  const [lineStatusWrapperKey, setLineStatusWrapperKey] = useState(0);

  const refreshHandler = () => {
    setLineStatusWrapperKey(Math.random());
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Tfl line status</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className={styles.title}>Line Status</h1>
        <h2 className={styles.description}>
          Current status of London underground lines.
        </h2>
        <button onClick={refreshHandler}>Refresh Data</button>
        <LineStatusWrapper key={lineStatusWrapperKey} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
