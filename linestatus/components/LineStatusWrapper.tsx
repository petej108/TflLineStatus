import LineInfoList from './LineInfoList';
import { useGetLineStatus } from '../hooks/useLineStatus';
import { getLineInfoData } from '../helpers/mapLineStatusApiData';

const LineStatusWrapper = () => {
  const lineStatusResponse = useGetLineStatus();

  if (lineStatusResponse?.error) return <h3>Something went wrong!</h3>;
  if (!lineStatusResponse?.data) return <h3>Loading...</h3>;
  return (
    <>
      {lineStatusResponse?.data && (
        <LineInfoList linesData={getLineInfoData(lineStatusResponse?.data)} />
      )}
    </>
  );
};

export default LineStatusWrapper;
