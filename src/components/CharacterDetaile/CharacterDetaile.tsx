import {useGetDataDetaileFetch} from '../../hooks/useGetDataDetaileFetch.ts';
import type {DataDetaileCharacter} from '../../core/interfaces/query/interfaces.ts';
import {useParams} from 'react-router-dom';
import {getDateValue} from '../../core/utils/getDateValue.ts';
import {ApiEndPoints} from '../../constants/apiEndPoints.ts';

export const CharacterDetaile = () => {

  const {id} = useParams();

  const {
    isLoading,
    isError,
    data
  } = useGetDataDetaileFetch<DataDetaileCharacter>(ApiEndPoints.Characters, Number(id));

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      <img src={data?.image} alt={data?.name}/>
      <h4> {data?.name} </h4>
      <p><span className="name-of-parameters">Статус:</span> {data?.status} </p>
      <p><span className="name-of-parameters">Порода:</span> {data?.species} </p>
      <p><span className="name-of-parameters">Тип:</span> {data?.type} </p>
      <p><span className="name-of-parameters">Пол:</span> {data?.gender} </p>
      <p><span
        className="name-of-parameters">Дата создания:</span> {typeof data?.created === "string" ? getDateValue(data?.created) : "дата создания неизвестна"}
      </p>
    </div>
  )
}
