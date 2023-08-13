import { lineInfoType } from "@/types/lineInfoType";
import {lineStatusResponseType} from "@/types/lineStatusResponseType";


export const getLineInfoData = (lineStatusResponseData: any) => { 
    const getLineInfo = (lineInfoRaw: any): lineInfoType => {    
        const lineInfo: lineInfoType = {
          lineId: lineInfoRaw.id as string,
          lineName: lineInfoRaw.name as string,
          lineStatus: lineInfoRaw.lineStatuses[0]
            .statusSeverityDescription as string,
        };
        return lineInfo;
      };

      const LineInfoListData: lineInfoType[] =
        lineStatusResponseData.map(getLineInfo);
        return LineInfoListData;
};



 