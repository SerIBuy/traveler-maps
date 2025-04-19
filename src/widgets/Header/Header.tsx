import {signOut} from 'firebase/auth';
import {auth} from '@/shared/lib/firebase';
import {useNavigate} from 'react-router-dom';
import styles from './Header.module.scss';
import {useAuth} from "@/shared/lib/useAuth";

export const Header = () => {
    const navigate = useNavigate();
    const {user} = useAuth();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error('Ошибка при выходе:', error);
        }
    }
  return (
    <header className={styles.header}>
      <div className={styles.logo}>🌍 TravelMap</div>
      <nav className={styles.nav}>
        {user ? (
            <button onClick={handleLogout} className={styles.logoutBtn}>
          Выйти
        </button>
        ): null}
      </nav>
    </header>
  );
};
