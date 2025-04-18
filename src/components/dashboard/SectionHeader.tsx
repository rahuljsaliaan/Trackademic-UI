import React from 'react';
import styled from 'styled-components';
import Button from '@/components/formElements/buttons/Button';
import { AppRoute, RootColor } from '@/types/enum.types';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;
  line-height: 1;
  color: #282828;
  word-break: break-word;
  padding-right: 8px;
`;

const Tagline = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: #282828;
`;

interface SectionHeaderProps {
  title: string;
  tagline: string;
  buttonText?: string;
  showButton?: boolean;
  navigationLink?: AppRoute;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  tagline,
  buttonText = "more",
  showButton = true,
  navigationLink
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (!navigationLink) return;

    navigate(navigationLink);
  };

  return (
    <HeaderContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <Tagline>{tagline}</Tagline>
      </TitleContainer>
      {showButton && (
        <Button
          text={buttonText}
          color={RootColor.PrimaryColor}
          onClick={handleNavigate}
        />
      )}
    </HeaderContainer>
  );
};

export default SectionHeader;
