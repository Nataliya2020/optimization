import type {UserProps} from '../interfaces/auth/interfaces.ts';

export const getLocalStorageUser = (key: string): UserProps | null => {
  const user = localStorage.getItem(key);
  let localStorageUserParse;

  if (user) {
    try {
      localStorageUserParse = JSON.parse(user);
      return localStorageUserParse;
    } catch (error) {
      const resultError = error as Error;
      throw new Error(resultError.message);
    }
  }
  return null;
}
