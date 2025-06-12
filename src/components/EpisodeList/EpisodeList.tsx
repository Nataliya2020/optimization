import ItemList from '../ItemList';
import {ApiEndPoints} from '../../constants/apiEndPoints.ts';

export const EpisodeList = () => {
  return <ItemList url={ApiEndPoints.Episodes} itemQueryUrl="/episodes"/>;
}
