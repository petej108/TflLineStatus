import useSWR from 'swr';
import appSettings from '../data/appSettings.json';
import { lineStatusResponseType } from '../types/lineStatusResponseType';
const url: string =
  appSettings.lineStatusApi + '?app_key=' + appSettings.lineStatusKey;
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useGetLineStatus = () => {
  const lineStatusResponse: lineStatusResponseType = useSWR(url, fetcher);

  return lineStatusResponse;
};
