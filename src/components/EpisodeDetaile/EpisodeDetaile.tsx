import {getDateValue} from '../../core/utils/getDateValue.ts';
import {useParams} from 'react-router-dom';
import {useGetDataDetaileFetch} from '../../hooks/useGetDataDetaileFetch.ts';
import type {DataDetaileEpisode} from '../../core/interfaces/query/interfaces.ts';
import {ApiEndPoints} from '../../constants/apiEndPoints.ts';

export const EpisodeDetaile = () => {
  const {id} = useParams();
  const {
    data,
    isLoading,
    isError
  } = useGetDataDetaileFetch<DataDetaileEpisode>(ApiEndPoints.Episodes, Number(id));

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      <div>
        <h4>{data?.name}</h4>
        <p><span className="name-of-parameters">Дата выхода:</span> {data?.air_date}</p>
        <p><span className="name-of-parameters">Эпизод:</span> {data?.episode}</p>
        <p><span
          className="name-of-parameters">Дата создания:</span> {typeof data?.created === "string" ? getDateValue(data?.created) : "дата создания неизвестна"}
        </p>
      </div>
    </>
  )
}
