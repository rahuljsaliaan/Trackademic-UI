import styled from 'styled-components';

interface InputWithLabelProps {
  label: string;
  placeholder: string;
  type?: string;
  name?: string;
  id?: string;
}

const StyledInput = styled.input`
  font-family: 'Manrope';
  font-size: '14px';
  font-weight: '700';
`;

const StyledLabel = styled.label`
  /* Add styles for the label if needed */
`;

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  placeholder,
  type = 'text',
  name,
  id
}) => {
  return (
    <div className="input-with-label">
      <StyledLabel htmlFor={id || name}>{label}</StyledLabel>
      <StyledInput
        type={type}
        id={id || name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputWithLabel;
