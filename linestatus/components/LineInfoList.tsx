import LineInfo from './LineInfo';
import { lineInfoType } from 'types/lineInfo';
import mockData from '../data/lineStatusMock.json';

interface IlineInfo {
  lineName: string;
  lineStatus: string;
}

//const data = mockData as lineInfoType[];

const LineInfoList = () => {
  const lineInfoData: lineInfoType = {
    lineName: 'circle line',
    lineStatus: 'all is good!',
  };
  const lineInfoData2: lineInfoType = {
    lineName: 'district line',
    lineStatus: 'all is good!',
  };
  const lineInfoData3: lineInfoType = {
    lineName: 'elizabeth line',
    lineStatus: 'all is good!',
  };
  const lineInfoData4: lineInfoType = {
    lineName: 'hammersmith and city line',
    lineStatus: 'all is good!',
  };

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
      <LineInfo {...lineInfoData} />
      <LineInfo {...lineInfoData2} />
      <LineInfo {...lineInfoData3} />
      <LineInfo {...lineInfoData4} />
    </>
  );
};

export default LineInfoList;
