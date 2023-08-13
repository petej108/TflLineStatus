import { lineInfoType } from '../types/lineInfoType';
import styles from '@/pages/index.module.css';

const LineInfo = ({ lineName, lineStatus, lineId }: lineInfoType) => {
  return (
    <li
      id={lineId}
      tabIndex={0}
      className={[styles.card, styles.grid].join(' ')}>
      <div className={[lineId, styles.linecolor].join(' ')}></div>
      <div>{lineName}</div> <div>{lineStatus}</div>
    </li>
  );
};

export default LineInfo;
