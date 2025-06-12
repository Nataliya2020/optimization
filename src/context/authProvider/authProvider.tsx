import {useState} from 'react';
import {AuthContextInstance} from '../authContext/authContexInstancet.ts';
import type {UserProps, WithChildren} from '../../core/interfaces/auth/interfaces.ts';
import {getLocalStorageUser} from '../../core/utils/getLocalStorageUser.ts';

export const AuthProvider = ({children}: WithChildren) => {
  const localStorageUser = getLocalStorageUser('user');
  const [user, setUser] = useState<UserProps | null>(localStorageUser || null);

  const signin = (newUser: { name: string, password: string }, callback: () => void) => {
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    callback();
  }

  const signout = (callback?: () => void) => {
    setUser(null);
    localStorage.removeItem('user');

    if (callback) {
      callback();
    }
  }

  const value = {
    user,
    signin,
    signout
  }

  return (
    <AuthContextInstance.Provider value={value}>
      {children}
    </AuthContextInstance.Provider>
  )
}
