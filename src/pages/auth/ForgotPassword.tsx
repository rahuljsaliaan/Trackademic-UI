import AuthHeader from '@/components/auth/AuthHeader';
import InputWithLabelAndButton from '@/components/formElements/inputs/InputWithLabelAndButton';
import InputOTP from '@/components/formElements/inputs/InputOTP';
import Button from '@/components/formElements/buttons/Button';
import forgotPasswordImage from '@/assets/images/forgotPasswordImage.svg';
import { RootColor } from '@/types/enum.types';

export default function ForgotPassword() {
  return (
    <div className="auth-container">
      <AuthHeader
        imageSrc={forgotPasswordImage}
        headingText="Lost your key to Trackademic?"
      />
      <div className="auth-form-container">
        <form className="forgot-email-entry-form" action="/login" method="POST">
          <InputWithLabelAndButton
            label="Email"
            placeholder="Your email please"
            buttonText="Send"
            buttonColor="#131313"
            buttonPadding="12px"
          />
          <InputOTP label="Enter Secret Code" />
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
