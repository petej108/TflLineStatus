import LineInfo from './LineInfo';
import { lineInfoType } from 'types/lineInfoType';
import styles from '@/pages/index.module.css';

const LineInfoList = ({linesData }: {linesData :lineInfoType[]}) => {
  return (
    <>
      <ul className={[styles.grid, styles.gridOuter].join(' ')}>
        {linesData.map((lineInfo) => (
          <LineInfo {...lineInfo} key={lineInfo.lineId} />
        ))}
      </ul>
    </>
  );
};

export default LineInfoList;
