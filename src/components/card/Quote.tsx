import styled from 'styled-components';

const QuoteContainer = styled.div`
  padding: 16px;
  border: 1px solid #4535ea;
  border-radius: 10px;
  width: 100%;
`;

const Heading = styled.h2`
  font-size: 14px;
  font-weight: 900;
  color: #d8dee7;
  margin-bottom: 16px;
`;

const QuoteText = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #282828;
  margin-bottom: 16px;
`;

const Author = styled.p`
  font-size: 12px;
  font-weight: 900;
  color: #282828;
  text-align: right;
`;

interface QuoteProps {
  heading: string;
  quote: string;
  author: string;
}

const Quote: React.FC<QuoteProps> = ({ heading, quote, author }) => {
  return (
    <QuoteContainer>
      <Heading>{heading}</Heading>
      <QuoteText>"{quote}"</QuoteText>
      <Author>- {author}</Author>
    </QuoteContainer>
  );
};

export default Quote;
