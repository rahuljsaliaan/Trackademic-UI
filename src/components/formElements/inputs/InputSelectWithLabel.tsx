import React from 'react';
import styled from 'styled-components';

interface DropdownOption {
  value: number;
  label: string;
}

interface InputSelectWithLabelProps {
  label: string;
  placeholder?: string;
  options: DropdownOption[];
  value?: number;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const StyledLabel = styled.label`
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #282828;
`;

const StyledSelect = styled.select`
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 500;
  padding: 16px;
  color: #94a3b8;
  border: 2px solid #94a3b8;
  border-radius: 4px;
  background-color: #ffffff;

  &:focus {
    outline: none;
    border-color: #4535ea;
  }
`;

const Option = styled.option`
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
`;

const InputSelectWithLabel: React.FC<InputSelectWithLabelProps> = ({
  label,
  placeholder,
  options,
  value,
  onChange
}) => {
  return (
    <Container>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect value={value} onChange={onChange} defaultValue="">
        {placeholder && (
          <Option value="" disabled>
            {placeholder}
          </Option>
        )}
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </StyledSelect>
    </Container>
  );
};

export default InputSelectWithLabel;
