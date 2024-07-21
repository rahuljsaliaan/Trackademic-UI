import styled from 'styled-components';
import Button from '@/components/formElements/buttons/Button';
import { RootColor } from '@/types/enum.types';

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
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, tagline }) => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <Tagline>{tagline}</Tagline>
      </TitleContainer>
      <Button text="More" color={RootColor.PRIMARY_COLOR} />
    </HeaderContainer>
  );
};

export default SectionHeader;
