import ItemList from '../ItemList';
import {ApiEndPoints} from '../../constants/apiEndPoints.ts';

export const LocationList = () => {
  return <ItemList url={ApiEndPoints.Locations} itemQueryUrl="/locations"/>
}
