import AuthHeader from '@/components/auth/AuthHeader';
import InputWithLabel from '@/components/formElements/inputs/InputWithLabel';
import Button from '@/components/formElements/buttons/Button';
import forgotPasswordImage from '@/assets/images/forgotPasswordImage.svg';

export default function Login() {
  return (
    <div className="auth-container">
        <AuthHeader imageSrc={forgotPasswordImage} headingText="Set Your Mighty New Password!" />
        <div className='auth-form-container'>
          <form className='login-form' action="/login" method="POST">
            <InputWithLabel 
              label="New Secret Key"
              placeholder="Craft Your Epic Password"
              type="password"
              name="newPassword"
              id="newPassword"
            />
            <InputWithLabel 
              label="Confirm Your Super Secret Key"
              placeholder="Is It still a Secret?"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
            />
            <div className='auth-form-button-div'>
              <Button text="Activate Super Security" color="#4535EA" padding="12px 16px" width="100%"/>
            </div>
          </form>
        </div>
    </div>
  )
}
