import LineInfoList from './LineInfoList';
import { useGetLineStatus } from './useLineStatus';
import { lineStatusResponseType } from '@/types/lineStatusResponseType';

const LineStatusWrapper = () => { 
  const lineStatusResponse = useGetLineStatus();

  if (lineStatusResponse?.error) return <h1>Something went wrong!</h1>;
  if (!lineStatusResponse?.data) return <h1>Loading...</h1>;

  return (
    <>
      {lineStatusResponse?.data && (
        <LineInfoList linesData={lineStatusResponse?.data} />
      )}
    </>
  );
};

export default LineStatusWrapper;
