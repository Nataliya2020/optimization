import type {ReactElement} from 'react';
import type {WithChildren} from '../../core/interfaces/auth/interfaces.ts';
import RequireAuth from '../RequireAuth';

export const PrivateRoute = ({children}: WithChildren): ReactElement | null => {
  return <RequireAuth>{children}</RequireAuth>;
}
