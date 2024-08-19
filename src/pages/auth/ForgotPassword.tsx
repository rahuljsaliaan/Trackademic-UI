import { useForm } from 'react-hook-form';
import { VerifyOTPDTO } from 'trackademic-schema-toolkit';
import AuthHeader from '@/components/auth/AuthHeader';
import InputWithLabelAndButton from '@/components/formElements/inputs/InputWithLabelAndButton';
import InputOTP from '@/components/formElements/inputs/InputOTP';
import Button from '@/components/formElements/buttons/Button';
import forgotPasswordImage from '@/assets/images/forgotPasswordImage.svg';
import { RootColor } from '@/types/enum.types';
import { useForgotPassword, useVerifyOTP } from '@/features/auth';

type ForgotPasswordFormData = {
  email: string;
  'digit-1': string;
  'digit-2': string;
  'digit-3': string;
  'digit-4': string;
};

export default function ForgotPassword() {
  const { mutate: mutateVerifyOTP } = useVerifyOTP();
  const { mutate: mutateForgotPassword } = useForgotPassword();

  const {
    register,
    handleSubmit,
    getValues,
    reset
    // formState: { errors }
    // setError
  } = useForm<ForgotPasswordFormData>();

  function handleOnSubmit() {
    const otpFields = ['digit-1', 'digit-2', 'digit-3', 'digit-4'];

    const otp = otpFields.map((field) => getValues(field) as string).join('');
    const email = getValues('email');

    const updatedData: VerifyOTPDTO = { email, otp };

    mutateVerifyOTP(updatedData, {
      onError: () => {
        reset();
      }
    });
  }

  function handleSendForgotPasswordEmail() {
    const email = getValues('email');
    mutateForgotPassword(
      { email },
      {
        onError: () => {
          reset();
        }
      }
    );
  }

  return (
    <div className="auth-container">
      <AuthHeader
        imageSrc={forgotPasswordImage}
        headingText="Lost your key to Trackademic?"
      />
      <div className="auth-form-container">
        <form
          className="forgot-email-entry-form"
          onSubmit={handleSubmit(handleOnSubmit)}
        >
          <InputWithLabelAndButton
            id="email"
            field="email"
            label="Email"
            register={register}
            placeholder="Your email please"
            buttonText="Send"
            buttonColor="#131313"
            buttonPadding="12px"
            onClick={handleSendForgotPasswordEmail}
            disabled={status === 'pending' ? true : false}
          />
          <InputOTP label="Enter Secret Code" register={register} />
          <div className="auth-form-button-div">
            <Button
              type="submit"
              text="Unlock Account"
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
