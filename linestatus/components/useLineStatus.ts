import useSWR from 'swr';
import appSettings from '../data/appSettings.json';
const url: string =
  appSettings.lineStatusApi + '?app_key=' + appSettings.lineStatusKey;
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useGetLineStatus = () => {
  const { data, error } = useSWR(url, fetcher);

  return { data, error };
};
