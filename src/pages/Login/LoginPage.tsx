import  AuthForm  from "@/features/auth/AuthForm/AuthForm";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/shared/lib/firebase";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.scss";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = async ({ email, password }: { email: string; password: string }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (e) {
      alert("Ошибка входа: " + (e as Error).message);
    }
  };

  return (
    <>
    <AuthForm onSubmit={handleLogin} title="Вход" submitText="Войти" />
    <div className={styles['register-message']}>
      <p className={styles['register-message__text']}>Нет аккаунта?</p>
      <a href="/register" className={styles['register-message__link']}>Зарегистрироваться</a>
    </div>
    </>
  )
};
