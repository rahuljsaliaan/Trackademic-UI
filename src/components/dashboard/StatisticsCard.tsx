import styled from 'styled-components';

interface StatisticsCardProps {
  label: string;
  data: string | number;
  variant?: 'normal' | 'warning';
}

const cardVariants = {
  normal: {
    border: '2px solid #462EE8',
    backgroundColor: '#EEF5FF',
    headingColor: '#282828',
    subHeadingColor: '#282828'
  },
  warning: {
    border: '2px solid #F5B640',
    backgroundColor: 'linear-gradient(180deg, #F5B640 0%, #FFD689 100%)',
    headingColor: '#282828',
    subHeadingColor: '#282828'
  }
};

const CardContainer = styled.div<{ variant: 'normal' | 'warning' }>`
  border: ${(props) => cardVariants[props.variant].border};
  background: ${(props) => cardVariants[props.variant].backgroundColor};
  border-radius: 10px;
  padding: 8px;
  min-width: 70px;
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.h1<{ variant: 'normal' | 'warning' }>`
  color: ${(props) => cardVariants[props.variant].headingColor};
  font-size: 12px;
  font-weight: 700;
`;

const SubHeading = styled.h2<{ variant: 'normal' | 'warning' }>`
  font-size: 38px;
  font-weight: bold;
  color: ${(props) => cardVariants[props.variant].subHeadingColor};
`;

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  label,
  data,
  variant = 'normal'
}) => {
  return (
    <CardContainer variant={variant}>
      <Heading variant={variant}>{label}</Heading>
      <SubHeading variant={variant}>{data}</SubHeading>
    </CardContainer>
  );
};

export default StatisticsCard;
