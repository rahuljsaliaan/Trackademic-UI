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

const StyledInput = styled.input`
  font-family: 'Manrope';
  font-size: '14px';
  font-weight: '700';
`;

const StyledLabel = styled.label`
  /* Add styles for the label if needed */
`;

const InputWithLabel = <T extends FieldValues>({
  label,
  placeholder,
  id,
  type,
  register,
  field,
  disabled = false
}: InputWithLabelProps<T>) => {
  return (
    <div className="input-with-label">
      <StyledLabel htmlFor={id || field}>{label}</StyledLabel>
      <StyledInput
        id={id || field}
        type={type}
        placeholder={placeholder}
        {...register(field)}
        disabled={disabled}
      />
    </div>
  );
};

export default InputWithLabel;
