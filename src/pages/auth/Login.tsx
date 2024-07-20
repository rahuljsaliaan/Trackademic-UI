import AuthHeader from '@/components/auth/AuthHeader';
import InputWithLabel from '@/components/formElements/inputs/InputWithLabel';
import Button from '@/components/formElements/buttons/Button';
import loginImage from '@/assets/images/loginImage.svg';
import { RootColor } from '@/types/enum.types';

export default function Login() {
  return (
    <div className="auth-container">
      <AuthHeader
        imageSrc={loginImage}
        headingText="Hey There! Let's Get You Logged In."
      />
      <div className="auth-form-container">
        <form className="login-form" action="/login" method="POST">
          <InputWithLabel
            label="Email"
            placeholder="Your email please"
            type="email"
            name="email"
            id="email"
          />
          <InputWithLabel
            label="Secret Key"
            placeholder="Is It a Secret?"
            type="password"
            name="password"
            id="password"
          />
          <div className="auth-form-forgot-anchor-container">
            <a href="#">
              Lost Your Key?<span> Let's Find It Together!</span>
            </a>
          </div>
          <div className="auth-form-button-div">
            <Button
              text="Login & Begin Your Journey"
              color={RootColor.ACCENT_COLOR}
              padding="12px 16px"
              width="100%"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
