import Head from 'next/head';
import Image from 'next/image';

import styles from '@/pages/index.module.css';
import LineInfoList from '@/components/LineInfoList';
import { useGetLineStatus } from '@/components/useLineStatus';

import mockData from '@/data/lineStatusMock.json';
import { useEffect, useState } from 'react';
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
        <p className={styles.description}>
          Current status of London underground lines.
        </p>
        <button onClick={refreshHandler}>Refresh Data</button>
        <LineStatusWrapper key={lineStatusWrapperKey} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
