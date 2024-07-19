interface AuthHeaderProps {
    imageSrc: string;
    headingText: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ imageSrc, headingText }) => {
    return (
        <div className="auth-header">
            <div className="auth-logo-container">
                <img src="/src/assets/logo/logo-light.svg"/>
            </div>
            <div className="auth-image-container">
                <img src={imageSrc} alt="Image" />
            </div>
            <div className="login-header-content">
                <h1>{headingText}</h1>
            </div>
        </div>    
    );
};

export default AuthHeader;