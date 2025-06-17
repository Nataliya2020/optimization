import {getDateValue} from '../../core/utils/getDateValue.ts';
import {useParams} from 'react-router-dom';
import {useGetDataDetaileFetch} from '../../hooks/useGetDataDetaileFetch.ts';
import type {DataDetaileLocation} from '../../core/interfaces/query/interfaces.ts';
import {ApiEndPoints} from '../../constants/apiEndPoints.ts';

export const LocationDetaile = () => {

  const {id} = useParams();
  const {data, isLoading, isError} = useGetDataDetaileFetch<DataDetaileLocation>(ApiEndPoints.Locations, Number(id));

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      <h4>{data?.name}</h4>
      <p><span className="name-of-parameters">Тип:</span> {data?.type}</p>
      <p><span className="name-of-parameters">Измерение:</span> {data?.dimension}</p>
      <p><span
        className="name-of-parameters">Дата создания:</span> {data?.created ? getDateValue(data?.created) : "дата создания неизвестна"}
      </p>
    </div>
  )
}
