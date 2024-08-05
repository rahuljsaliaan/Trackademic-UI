import styled from 'styled-components';

interface ErrorMessageProps {
  message: string;
}

const StyledErrorMessage = styled.div`
  color: red;
  font-size: 12px;
  font-weight: 600;
`;

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <StyledErrorMessage>{message}</StyledErrorMessage>;
};

export default ErrorMessage;
