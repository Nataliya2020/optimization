import {useEffect, useState} from 'react';

export const useGetDataDetaileFetch = <T>(url: string, id: number) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchDataDetaile = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(`${url}/${id}`);

        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }

        const dataQuery: T = await response.json();
        setData(dataQuery);
        setIsError(false);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    void fetchDataDetaile();
  }, [url, id]);
  return {data, isLoading, isError};
}
