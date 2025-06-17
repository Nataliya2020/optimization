import {useEffect, useState} from 'react';
import type {DataDetaileFull, DataList} from '../core/interfaces/query/interfaces';

export const useGetDataFetch = <T extends DataList>(url: string, pageNumber: number): {
  data: DataList[] | null,
  isLoading: boolean,
  isError: boolean,
  isHasMore: boolean
} => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<DataList[] | null>(null);
  const [isHasMore, setIsHasMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(`${url}?page=${pageNumber}`);

        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const dataQuery: DataDetaileFull<T> = await response.json();
        const dataList: DataList[] = dataQuery.results.map((item) => ({
          id: item.id,
          name: item.name
        }));

        setData((prev) => {
          const uniqueData = dataList
            .filter((newItem) =>
              !prev?.some((existingItem) => existingItem.id === newItem.id));
          return [...(prev || []), ...uniqueData];
        });
        setIsError(false);
        setIsHasMore(dataQuery.info.next !== null);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    void fetchData();
  }, [url, pageNumber]);

  return {data, isLoading, isError, isHasMore};
}
