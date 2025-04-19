import AuthForm from "@/features/auth/AuthForm/AuthForm";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/shared/lib/firebase";
import { useNavigate } from "react-router-dom";
export const RegisterPage = () => {
    const navigate = useNavigate();

    const handleRegister = async ({email, password}: {email: string, password: string}) => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (e) {
            alert("Ошибка регистрации: " + (e as Error).message);
        }
    };

  return (
    <AuthForm onSubmit={handleRegister} title="Регистрация" submitText="Зарегистрироваться"/>
  );
};