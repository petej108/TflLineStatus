import { lineInfoType } from '../types/lineInfo';
import LineCard from './LineCard';

const LineInfo = ({ lineName, lineStatus, lineId }: lineInfoType) => {
  return (
    <LineCard lineId={lineId}>
      Name: {lineName} status: {lineStatus}
    </LineCard>
  );
};

export default LineInfo;
