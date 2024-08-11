import { useNavigate } from 'react-router-dom';
import AuthHeader from '@/components/auth/AuthHeader';
import InputWithLabel from '@/components/formElements/inputs/InputWithLabel';
import Button from '@/components/formElements/buttons/Button';
import ErrorMessage from '@/components/formElements/errorMessage/ErrorMessage';
import loginImage from '@/assets/images/loginImage.svg';
import { RootColor } from '@/types/enum.types';
import { useLogin } from '@/features/auth';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginDTO, loginSchema } from 'trackademic-schema-toolkit';
import { useGetCurrentUser } from '@/features/users';
import { UserRoleRouteMap } from '@/types/enum.types.ts';

export default function Login() {
  const navigate = useNavigate();
  const { mutate, status } = useLogin();
  const { user } = useGetCurrentUser();

  if (user) navigate(`${UserRoleRouteMap[user.role]}`);

  const {
    register,
    handleSubmit,
    // formState: { errors }
    // setError
    reset
  } = useForm<LoginDTO>({
    resolver: zodResolver(loginSchema)
  });

  function handleOnSubmit(data: LoginDTO) {
    mutate(data, {
      onError: () => {
        reset();
      }
    });
  }

  return (
    <div className="auth-container">
      <AuthHeader
        imageSrc={loginImage}
        headingText="Hey There! Let's Get You Logged In."
      />
      <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit(handleOnSubmit)}>
          <InputWithLabel
            id="email"
            type="email"
            label="Email"
            placeholder="Your email please"
            register={register}
            field="email"
            disabled={status === 'pending'}
          />
          <InputWithLabel
            id="password"
            type="password"
            label="Secret Key"
            placeholder="Is It a Secret?"
            register={register}
            field="password"
            disabled={status === 'pending'}
          />
          <ErrorMessage message="This is an error message." />
          <div className="auth-form-forgot-anchor-container">
            <a href="#">
              Lost Your Key?<span> Let's Find It Together!</span>
            </a>
          </div>
          <div className="auth-form-button-div">
            <Button
              text="Login & Begin Your Journey"
              color={RootColor.AccentColor}
              padding="12px 16px"
              width="100%"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
