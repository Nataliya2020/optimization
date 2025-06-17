import {useNavigate} from 'react-router-dom';
import {useAuth} from '../../hooks/useAuth.tsx';
import styles from './Logout.module.css';

export const Logout = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth?.user) {
    return null;
  }

  const logout = () => {
    auth?.signout(() => {
    });
    navigate("/");
  };

  return (
    <button onClick={logout} className={styles.button_out}>Выйти</button>
  )
}
