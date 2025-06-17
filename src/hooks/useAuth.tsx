import {useContext} from 'react';
import {AuthContextInstance} from '../context/authContext/authContexInstancet.ts';

export const useAuth = () => {
  const context = useContext(AuthContextInstance);

  if (!context) {
    throw new Error('нет контекста');
  }

  return context;
}
