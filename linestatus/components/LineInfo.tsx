import { lineInfoType } from '../types/lineInfoType';
import LineCard from './LineCard';

const LineInfo = ({ lineName, lineStatus, lineId }: lineInfoType) => {
  return (
    <LineCard lineId={lineId}>
      <div>{lineName}</div> <div>{lineStatus}</div>
    </LineCard>
  );
};

export default LineInfo;
