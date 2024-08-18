import AuthHeader from '@/components/auth/AuthHeader';
import InputWithLabelAndButton from '@/components/formElements/inputs/InputWithLabelAndButton';
import InputOTP from '@/components/formElements/inputs/InputOTP';
import Button from '@/components/formElements/buttons/Button';
import forgotPasswordImage from '@/assets/images/forgotPasswordImage.svg';
import { RootColor } from '@/types/enum.types';
import { useForgotPassword } from '@/features/auth';
import { useForm } from 'react-hook-form';
import { LoginDTO } from 'trackademic-schema-toolkit';

export default function ForgotPassword() {
  const { mutate, status } = useForgotPassword();

const {
  register,
  handleSubmit,
  getValues,
  reset
  // formState: { errors }
  // setError
} = useForm<LoginDTO>();

function handleOnSubmit(data: LoginDTO) {
  mutate(data, {
    onError: () => {
      reset();
    }
  });
}

function handleSendForgotPasswordEmail() {
  const email = getValues('email');
  mutate(
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
            onClick={handleEmailSubmit}
            disabled={status === "pending" ? true : false}
          />
          <InputOTP label="Enter Secret Code" />
        </form>
        <form className="forgot-email-entry-form">
          <div className="auth-form-button-div">
            <Button
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
