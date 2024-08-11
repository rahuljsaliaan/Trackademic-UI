import React from 'react';
import styled from 'styled-components';

import Button from '@/components/formElements/buttons/Button';

interface ContentCardProps {
  heading: string;
  paragraph: string;
  dateIconSrc: string;
  labelIconSrc: string;
  date: string;
  time: string;
  label: string;
  subLabel: string;
  buttonText?: string;
  onClick?: () => unknown;
  isButtonVisible?: boolean;
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  border: 2px solid #4535ea;
  border-radius: 10px;
  margin: 0 16px;
  padding: 16px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

const Heading = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: #4535ea;
`;

const Paragraph = styled.p`
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  padding-top: 8px;
`;

const CardBottomContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
`;

const IconDateTimeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const DateTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const Date = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #282828;
`;

const Time = styled.p`
  font-size: 10px;
  font-weight: 700;
  color: #94a3b8;
`;

const IconLabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.p`
  font-size: 12px;
  font-weight: 700;
  color: #282828;
`;

const SubLabel = styled.p`
  font-size: 10px;
  font-weight: 700;
  color: #94a3b8;
`;

const ContentCard: React.FC<ContentCardProps> = ({
  heading,
  paragraph,
  dateIconSrc,
  labelIconSrc,
  date,
  time,
  label,
  subLabel,
  buttonText = '',
  isButtonVisible = false,
  onClick
}) => {
  return (
    <CardContainer>
      <Content>
        <Heading>{heading}</Heading>
        <Paragraph>{paragraph}</Paragraph>
      </Content>
      <CardBottomContainer>
        <IconDateTimeContainer>
          <Icon src={dateIconSrc} alt="Date Icon" />
          <DateTimeContainer>
            <Date>{date}</Date>
            <Time>{time}</Time>
          </DateTimeContainer>
        </IconDateTimeContainer>
        <IconLabelContainer>
          <Icon src={labelIconSrc} alt="Label Icon" />
          <LabelContainer>
            <Label>{label}</Label>
            <SubLabel>{subLabel}</SubLabel>
          </LabelContainer>
        </IconLabelContainer>
      </CardBottomContainer>
      <div className="content-card-button">
        <Button
          width={'100%'}
          text={buttonText}
          isVisible={isButtonVisible}
          onClick={onClick}
        />
      </div>
    </CardContainer>
  );
};

export default ContentCard;
