import Head from 'next/head';
import Image from 'next/image';

import styles from '@/pages/index.module.css';
import LineInfoList from '@/components/LineInfoList';
import { useGetLineStatus } from '@/components/useLineStatus';
import mockData from '../data/lineStatusMock.json';

export default function Home() {
  const { data: lineInfoApiData, error } = useGetLineStatus();

  if (error) return <h1>Something went wrong!</h1>;
  if (!lineInfoApiData) return <h1>Loading...</h1>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Tfl line status</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1 className={styles.title}>Line Status</h1>

        <p className={styles.description}>
          Current status of London underground lines [F5] to refresh data.
        </p>

        <div className={[styles.grid, styles.gridOuter].join(' ')}>
          <LineInfoList linesData={lineInfoApiData} />
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
