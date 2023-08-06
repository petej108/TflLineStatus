import LineInfo from './LineInfo';
import { lineInfoType } from 'types/lineInfo';
import mockData from '../data/lineStatusMock.json';

const LineInfoList = () => {
  const getLineInfo = (lineInfoRaw: any): lineInfoType => {
    const lineInfo: lineInfoType = {
      lineName: lineInfoRaw.name as string,
      lineStatus: lineInfoRaw.lineStatuses[0]
        .statusSeverityDescription as string,
    };
    return lineInfo;
  };

  const LineInfoListData: lineInfoType[] = mockData.map(getLineInfo);

  return (
    <>
      {LineInfoListData.map((lineInfo) => (
        <LineInfo {...lineInfo} />
      ))}
    </>
  );
};

export default LineInfoList;
