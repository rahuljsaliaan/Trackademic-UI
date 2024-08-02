import AuthHeader from '@/components/auth/AuthHeader';
import InputWithLabel from '@/components/formElements/inputs/InputWithLabel';
import Button from '@/components/formElements/buttons/Button';
import loginImage from '@/assets/images/loginImage.svg';
import { RootColor } from '@/types/enum.types';
import useLogin from '@/features/auth/hooks/useLogin';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginDTO, loginSchema } from 'trackademic-schema-toolkit';

export default function Login() {
  const { mutate, status } = useLogin();

  function handleOnSubmit(data: LoginDTO) {
    mutate(data);
  }

  const {
    register,
    handleSubmit
    // formState: { errors }
    // setError
  } = useForm<LoginDTO>({
    resolver: zodResolver(loginSchema)
  });

  if (status === 'pending') {
    return <div>Loading...</div>;
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
          />
          <InputWithLabel
            id="password"
            type="password"
            label="Secret Key"
            placeholder="Is It a Secret?"
            register={register}
            field="password"
          />
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
