import styles from '@/pages/index.module.css';
const LineCard = ({ children }: any) => {
  return <div className={styles.card}>{children}</div>;
};

export default LineCard;
