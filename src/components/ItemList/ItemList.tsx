import type {DataList, ItemListProps} from '../../core/interfaces/query/interfaces.ts';
import {useCallback, useRef, useState} from 'react';
import {useGetDataFetch} from '../../hooks/useGetDataFetch.ts';
import {NavLink} from 'react-router-dom';

export const ItemList = ({url, itemQueryUrl}: ItemListProps) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const {
    data,
    isLoading,
    isError,
    isHasMore
  } = useGetDataFetch<DataList>(url, pageNumber);


  const lastNodeRef = useCallback((node: HTMLLIElement) => {
    if (isLoading) {
      return;
    }

    if (observer.current) {
      observer.current.disconnect();
    }
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && isHasMore) {
        setPageNumber((prev) => prev + 1);
      }
    });
    if (node) {
      observer.current?.observe(node);
    }
  }, [isHasMore, isLoading]);

  return (
    <>
      <ul>
        {
          data?.map((item, index) => {
            if (!item.name) {
              throw new Error(`Свойство 'name' отсутствует у элемента с id=${item.id}`); // нужно для перехвата ErrorBoundary
            }
            const isLastItem = index === data.length - 1;
            return (
              <li ref={isLastItem ? lastNodeRef : null} key={item.id}>
                <NavLink to={`${itemQueryUrl}/${item.id}`} className="link">
                  {item.name}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
      {isLoading && <div>Загрузка...</div>}
      {isError && <div>Ошибка загрузки данных</div>}
    </>
  )
}
