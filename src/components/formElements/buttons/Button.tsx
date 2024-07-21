import styled from 'styled-components';
import { RootColor } from '@/types/enum.types';

interface ButtonProps {
  text: string;
  color?: RootColor;
  padding?: string;
  width?: string;
}

type StyledButtonProps = Omit<ButtonProps, 'text'>;

const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props: StyledButtonProps) =>
    props.color || RootColor.ACCENT_COLOR};
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
  color = RootColor.ACCENT_COLOR,
  padding = '10px 20px',
  width = 'auto'
}) => {
  return (
    <StyledButton color={color} padding={padding} width={width}>
      {text}
    </StyledButton>
  );
};

export default Button;
