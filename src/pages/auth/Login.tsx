import { useNavigate } from 'react-router-dom';
import { useForm, FieldErrors } from 'react-hook-form';

import AuthHeader from '@/components/auth/AuthHeader';
import InputWithLabel from '@/components/formElements/inputs/InputWithLabel';
import Button from '@/components/formElements/buttons/Button';
import ErrorMessage from '@/components/formElements/errorMessage/ErrorMessage';
import loginImage from '@/assets/images/loginImage.svg';
import { RootColor } from '@/types/enum.types';
import { useLogin } from '@/features/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginDTO, loginSchema } from 'trackademic-schema-toolkit';
import { useGetCurrentUser } from '@/features/users';
import { UserRoleRouteMap } from '@/types/enum.types.ts';
import { AppRoute } from '@/types/enum.types';

export default function Login() {
  const navigate = useNavigate();
  const { mutate, status } = useLogin();
  const { user } = useGetCurrentUser();

  if (user) navigate(`${UserRoleRouteMap[user.role]}`);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
    // reset
  } = useForm<LoginDTO>({
    resolver: zodResolver(loginSchema)
  });

  function handleOnSubmit(data: LoginDTO) {
    if (Object.keys(errors).length === 0) {
      mutate(data, {
        onError: (error) => {
          setError('email', {
            type: 'manual',
            message: error.message || 'An error occurred'
          });
        }
      });
    }
  }

  function getFirstError(errors: FieldErrors<LoginDTO>) {
    if (errors.email) {
      return errors.email.message;
    }
    if (errors.password) {
      return errors.password.message;
    }
    return null;
  }

  const firstError = getFirstError(errors);

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
          <ErrorMessage message={firstError} />
          <div className="auth-form-forgot-anchor-container">
            <a href={`${AppRoute.ForgotPassword}`}>
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
