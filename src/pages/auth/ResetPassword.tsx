import AuthHeader from '@/components/auth/AuthHeader';
import InputWithLabel from '@/components/formElements/inputs/InputWithLabel';
import Button from '@/components/formElements/buttons/Button';
import forgotPasswordImage from '@/assets/images/forgotPasswordImage.svg';
import { RootColor } from '@/types/enum.types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  resetPasswordSchema,
  ResetPasswordDTO
} from 'trackademic-schema-toolkit';
import { useResetPassword } from '@/features/auth';

export default function ResetPassword() {
  const { mutate, status } = useResetPassword();

  const {
    register,
    handleSubmit,
    // formState: { errors }
    // setError
    reset
  } = useForm<ResetPasswordDTO>({
    resolver: zodResolver(resetPasswordSchema)
  });

  function handleOnSubmit(data: ResetPasswordDTO) {
    mutate(data, {
      onError: () => {
        reset();
      }
    });
  }

  return (
    <div className="auth-container">
      <AuthHeader
        imageSrc={forgotPasswordImage}
        headingText="Set Your Mighty New Password!"
      />
      <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit(handleOnSubmit)}>
          <InputWithLabel
            id="password"
            type="password"
            label="New Secret Key"
            placeholder="Craft Your Epic Password"
            register={register}
            field="password"
            disabled={status === 'pending'}
          />
          <InputWithLabel
            id="_confirmPassword"
            type="password"
            label="Confirm Your Super Secret Key"
            placeholder="Is It still a Secret?"
            register={register}
            field="_confirmPassword"
            disabled={status === 'pending'}
          />
          <div className="auth-form-button-div">
            <Button
              text="Activate Super Security"
              color={RootColor.AccentColor}
              padding="12px 16px"
              width="100%"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
