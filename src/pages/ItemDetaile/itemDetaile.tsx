import {useParams} from 'react-router-dom';
import NotFoundPage from '../notFound/index.ts';
import type {FC} from 'react';

export const ItemDetaile = ({ item }: {item: FC}) => {
  const { id } = useParams();

  if (!id || isNaN(Number(id))) {
    return <NotFoundPage/>;
  }

  const Item = item;

  return (
    <div>
      {  <Item /> }
    </div>
  )
}
