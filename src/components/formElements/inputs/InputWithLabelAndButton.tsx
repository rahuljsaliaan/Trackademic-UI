import styled from 'styled-components';
import { FieldPath, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputWithLabelProps<T extends FieldValues> {
  label: string;
  placeholder: string;
  type?: string;
  id?: string;
  register: UseFormRegister<T>;
  field: FieldPath<T>;
  disabled?: boolean;
}

interface ButtonProps {
  buttonText: string;
  buttonColor?: string;
  buttonPadding?: string;
  onClick?: () => void;
}

type StyledButtonProps = Omit<ButtonProps, 'buttonText'>;

interface InputWithLabelAndButtonProps<T extends FieldValues>
  extends InputWithLabelProps<T>,
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

const InputWithLabelAndButton = <T extends FieldValues>({
  label,
  placeholder,
  type = 'text',
  id,
  register,
  field,
  disabled = false,
  buttonText,
  buttonColor,
  buttonPadding,
  onClick
}: InputWithLabelAndButtonProps<T>) => {
  return (
    <div className="input-with-label-and-button">
      <div className="input-with-label-div">
        <StyledLabel htmlFor={id || field}>{label}</StyledLabel>
        <StyledInput
          type={type}
          id={id || field}
          placeholder={placeholder}
          {...register(field)}
          disabled={disabled}
        />
      </div>
      <div className="input-button-container">
        <StyledButton
          type="button"
          buttonColor={buttonColor}
          buttonPadding={buttonPadding}
          onClick={onClick}
        >
          {buttonText}
        </StyledButton>
      </div>
    </div>
  );
};

export default InputWithLabelAndButton;
