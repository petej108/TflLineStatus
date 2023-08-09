//This deals with the styling of lineInfo
import styles from '@/pages/index.module.css';
const LineCard = ({ lineId, children }: any) => {
  return (
    <div
      role='listitem'
      id={lineId}
      className={[styles.card, styles.grid].join(' ')}>
      {children}
    </div>
  );
};

export default LineCard;
