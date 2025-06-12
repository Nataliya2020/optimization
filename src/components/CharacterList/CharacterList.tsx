import ItemList from '../ItemList';
import {ApiEndPoints} from '../../constants/apiEndPoints.ts';

export const CharacterList = () => {
  return <ItemList url={ApiEndPoints.Characters} itemQueryUrl="/characters"/>
}
