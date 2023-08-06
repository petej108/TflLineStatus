import { lineInfoType } from '../types/lineInfo';
import LineCard from './LineCard';

const LineInfo = ({ lineName, lineStatus }: lineInfoType) => {
  return (
    <LineCard>
      Name: {lineName} status: {lineStatus}
    </LineCard>
  );
};

export default LineInfo;
