import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import styles from './AuthForm.module.scss';

const schema = z.object({
    email: z.string().email("Неверный email"),
    password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
});

type FormData = z.infer<typeof schema>;

interface AuthFormProps {
    onSubmit: (data: FormData) => void;
    title: string;
    submitText: string;
}
const AuthForm = ({onSubmit, title, submitText}: AuthFormProps) => {
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({resolver: zodResolver(schema)});
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['auth-form']}>
      <h2>{title}</h2>
      <label className={styles['auth-form__label']}>
        Email
        <input type="email" {...register('email')} className={styles['auth-form__input']} />
        {errors.email && <span className={styles['auth-form__error']}>{errors.email.message}</span>}
      </label>
      <label className={styles['auth-form__label']}>
        Пароль
        <input type="password" {...register('password')} className={styles['auth-form__input']} />
        {errors.password && <span className={styles['auth-form__error']}>{errors.password.message}</span>}
        </label>
      <button type="submit" className={styles['auth-form__button']}>{submitText}</button>
    </form>
  );
};

export default AuthForm;