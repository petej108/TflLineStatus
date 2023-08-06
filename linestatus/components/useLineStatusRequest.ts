import useSWR from 'swr';
import keys from '../data/keys.json';
const url: string =
  'https://api.tfl.gov.uk/Line/Mode/tube/Status?app_key=' + keys.lineStatusKey;
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useGetLineStatus = () => {
  const { data, error } = useSWR(url, fetcher);

  return { data, error };
};
