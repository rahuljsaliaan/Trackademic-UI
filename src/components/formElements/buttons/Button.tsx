import styled from 'styled-components';
import { RootColor } from '@/types/enum.types';

interface ButtonProps {
  text: string;
  color?: string;
  padding?: string;
  width?: string;
  type?: 'button' | 'submit' | 'reset';
  isVisible?: boolean;
  onClick?: () => void;
}

type StyledButtonProps = Omit<ButtonProps, 'text'>;

const StyledButton = styled.button<StyledButtonProps>`
  display: ${(props: StyledButtonProps) =>
    props.isVisible ? 'block' : 'none'};
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
  type = 'button',
  isVisible = true,
  onClick
}) => {
  return (
    <StyledButton
      isVisible={isVisible}
      type={type}
      color={color}
      padding={padding}
      width={width}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
