import Head from 'next/head';
import Image from 'next/image';

import styles from '@/pages/index.module.css';
import LineInfoList from '@/components/LineInfoList';

export default function Home() {
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

        <div className={styles.grid}>
          <LineInfoList />          
        </div>
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  );
}
