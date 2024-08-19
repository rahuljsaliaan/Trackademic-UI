import {
  passwordOnlySchema,
  PasswordOnlyDTO
} from 'trackademic-schema-toolkit';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

import AuthHeader from '@/components/auth/AuthHeader';
import InputWithLabel from '@/components/formElements/inputs/InputWithLabel';
import Button from '@/components/formElements/buttons/Button';
import forgotPasswordImage from '@/assets/images/forgotPasswordImage.svg';
import { RootColor, QueryKeys } from '@/types/enum.types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useResetPassword } from '@/features/auth';

export default function ResetPassword() {
  const queryClient = useQueryClient();
  const verificationData = queryClient.getQueryData([
    QueryKeys.VerificationToken
  ]);
  const { mutate, status } = useResetPassword();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError
    reset
  } = useForm<PasswordOnlyDTO>({
    resolver: zodResolver(passwordOnlySchema)
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  function handleOnSubmit(data: ResetPasswordDTO) {
    const updatedData = {
      ...data,
      email: (verificationData as { email: string; verificationToken: string })
        .email,
      verificationToken: (
        verificationData as { email: string; verificationToken: string }
      ).verificationToken
    };

    mutate(updatedData, {
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
              type="submit"
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
