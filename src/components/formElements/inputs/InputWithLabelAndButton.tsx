import styled from 'styled-components';

interface InputWithLabelProps {
  label: string;
  placeholder: string;
  type?: string;
  name?: string;
  id?: string;
}

interface ButtonProps {
  buttonText: string;
  buttonColor?: string;
  buttonPadding?: string;
}

type StyledButtonProps = Omit<ButtonProps, 'buttonText'>;

interface InputWithLabelAndButtonProps
  extends InputWithLabelProps,
    ButtonProps {}

const StyledLabel = styled.label`
  font-family: 'Manrope';
  font-size: 14px;
  font-weight: 700;
`;

const StyledInput = styled.input`
  font-family: 'Manrope';
  font-size: 14px;
  font-weight: 700;
`;

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) => props.buttonColor || 'blue'};
  padding: ${(props) => props.buttonPadding || '10px 20px'};
  border: 2px solid #131313;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
`;

const InputWithLabelAndButton: React.FC<InputWithLabelAndButtonProps> = ({
  label,
  placeholder,
  type = 'text',
  name,
  id,
  buttonText,
  buttonColor,
  buttonPadding
}) => {
  return (
    <div className="input-with-label-and-button">
      <div className="input-with-label-div">
        <StyledLabel htmlFor={id || name}>{label}</StyledLabel>
        <StyledInput
          type={type}
          id={id || name}
          name={name}
          placeholder={placeholder}
        />
      </div>
      <div className="input-button-container">
        <StyledButton buttonColor={buttonColor} buttonPadding={buttonPadding}>
          {buttonText}
        </StyledButton>
      </div>
    </div>
  );
};

export default InputWithLabelAndButton;
