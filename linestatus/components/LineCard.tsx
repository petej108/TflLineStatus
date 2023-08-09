//This deals with the styling of lineInfo
import styles from '@/pages/index.module.css';
const LineCard = ({ lineId, children }: any) => {
  //TODO  Warning: Each child in a list should have a unique "key" prop
  return (
    <div
      role='listitem'
      id={lineId}
      key={lineId}
      className={[styles.card, styles.grid].join(' ')}>
      {children}
    </div>
  );
};

export default LineCard;
