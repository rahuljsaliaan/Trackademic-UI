import styled from 'styled-components';

interface InputWithoutLabelProps {
  placeholder: string;
  type?: string;
  id?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const StyledInput = styled.input`
  font-family: 'Manrope';
  font-size: '14px';
  font-weight: '900';
  padding: 8px;
  background-color: #ffffff;
  color: #94a3b8;
  border: 1.5px solid #94a3b8;
  border-radius: 6px;
  outline: none;
`;

const InputWithoutLabel: React.FC<InputWithoutLabelProps> = ({
  placeholder,
  id,
  type = 'text',
  value,
  onChange,
  disabled = false
}) => {
  return (
    <StyledInput
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default InputWithoutLabel;
