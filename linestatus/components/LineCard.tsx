//This deals with the styling of lineInfo
import styles from '@/pages/index.module.css';
const LineCard = ({ lineId, children }: any) => {
  return (
    <li      
      id={lineId}
      tabIndex={0}
      className={[styles.card, styles.grid].join(' ')}>
      {children}
    </li>
  );
};

export default LineCard;
