import styles from '@/pages/index.module.css';
const LineCard = ({lineId, children }: any) => {
  //TODO  Warning: Each child in a list should have a unique "key" prop
  return (
    <div id={lineId} key={lineId} className={styles.card}>
      {children}
    </div>
  );
};

export default LineCard;
