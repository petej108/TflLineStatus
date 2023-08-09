import LineInfo from './LineInfo';
import { lineInfoType } from 'types/lineInfo';
import styles from '@/pages/index.module.css';

const LineInfoList = ({ linesData }: any) => {
  const getLineInfo = (lineInfoRaw: any): lineInfoType => {
    const lineInfo: lineInfoType = {
      lineId: lineInfoRaw.id as string,
      lineName: lineInfoRaw.name as string,
      lineStatus: lineInfoRaw.lineStatuses[0]
        .statusSeverityDescription as string,
    };
    return lineInfo;
  };

  const LineInfoListData: lineInfoType[] = linesData.map(getLineInfo);

  return (
    <>
      <div role='list' className={[styles.grid, styles.gridOuter].join(' ')}>
        {LineInfoListData.map((lineInfo) => (
          <LineInfo {...lineInfo} key={lineInfo.lineId} />
        ))}
      </div>
    </>
  );
};

export default LineInfoList;
