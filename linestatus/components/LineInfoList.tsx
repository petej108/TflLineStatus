import LineInfo from './LineInfo';
import { lineInfoType } from 'types/lineInfo';

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
      {LineInfoListData.map((lineInfo) => (
        <LineInfo {...lineInfo} />
      ))}
    </>
  );
};

export default LineInfoList;
