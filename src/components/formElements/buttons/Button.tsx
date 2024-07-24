import styled from 'styled-components';
import { RootColor } from '@/types/enum.types';

interface ButtonProps {
  text: string;
  color?: RootColor;
  padding?: string;
  width?: string;
  type?: 'button' | 'submit' | 'reset';
}

type StyledButtonProps = Omit<ButtonProps, 'text'>;

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props: StyledButtonProps) =>
    props.color || RootColor.AccentColor};
  padding: ${(props: StyledButtonProps) => props.padding || '10px 20px'};
  width: ${(props: StyledButtonProps) => props.width || 'auto'};
  border: none;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
`;

const Button: React.FC<ButtonProps> = ({
  text,
  color = RootColor.AccentColor,
  padding = '10px 20px',
  width = 'auto',
  type = 'button'
}) => {
  return (
    <StyledButton type={type} color={color} padding={padding} width={width}>
      {text}
    </StyledButton>
  );
};

export default Button;
