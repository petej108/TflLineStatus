import LineInfo from './LineInfo';
import { lineInfoType } from 'types/lineInfo';
import mockData from '../data/lineStatusMock.json';

interface IlineInfo {
  lineName: string;
  lineStatus: string;
}

//const data = mockData as lineInfoType[];

const LineInfoList = () => {
  const getLineInfo = (lineInfoRaw: any): lineInfoType => {
    const lineInfo: lineInfoType = {
      lineName: lineInfoRaw.name as string,
      lineStatus: lineInfoRaw.lineStatuses[0]
        .statusSeverityDescription as string,
    };
    return lineInfo;
  };

  const LineInfoList2: lineInfoType[] = mockData.map(getLineInfo);

  return (
    <>
      {LineInfoList2.map((lineInfo) => (
        <LineInfo {...lineInfo} />
      ))}
    </>
  );
};

export default LineInfoList;
