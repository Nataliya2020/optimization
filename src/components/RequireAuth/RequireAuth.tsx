import {useAuth} from '../../hooks/useAuth.tsx';
import type {WithChildren} from '../../core/interfaces/auth/interfaces.ts';
import type {ReactElement} from 'react';
import {useNavigate} from 'react-router-dom';

export const RequireAuth = ({children}: WithChildren): ReactElement | null => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (auth === null || auth.user === null) {
    return (
      <>
        <p>Вы не авторизованы.</p>
        <button onClick={() => navigate("/login", {
          state: {from: location.pathname},
          replace: true
        })}>Авторизоваться
        </button>
      </>
    );
  }

  return (<>{children}</>);
}
