import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from '@/components/dashboard/NavBar';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ProfileSection = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #D7E7FF;
  overflow: hidden;
`;

const ProfileIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GreetingsWIthNameSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Greetings = styled.div`
  font-family: 'Manrope';
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
  color: #282828;
`;

const UserName = styled.div`
  font-family: 'Manrope';
  font-size: 24px;
  font-weight: 900;
  line-height: 0.8;
  color: #282828;
`;

const NotificationSection = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderRightLeftContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const NotificationIcon = styled.img`
  cursor: pointer;
`;

const NotificationDot = styled.img<{ show: boolean }>`
  position: absolute;
  top: 8px;
  left: 8px;
  height: 8px;
  width: 8px;
  display: ${props => (props.show ? 'block' : 'none')};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  cursor: pointer;
`;

interface DashboardHeaderProps {
  profileSrc: string;
  greetingText: string;
  name: string;
  bellIconSrc: string;
  notificationDot: boolean;
  menuIconSrc: string;
  closeIconSrc: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  profileSrc,
  greetingText,
  name,
  notificationDot,
  bellIconSrc,
  menuIconSrc,
  closeIconSrc
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <>
      <HeaderContainer>
        <HeaderRightLeftContainer>
          <ProfileSection>
            <ProfileIcon src={profileSrc} alt="Profile" />
          </ProfileSection>
          <GreetingsWIthNameSection>
            <Greetings>{greetingText}</Greetings>
            <UserName>{name}</UserName>
          </GreetingsWIthNameSection>
        </HeaderRightLeftContainer>
        <HeaderRightLeftContainer>
          <NotificationSection>
            <NotificationIcon src={bellIconSrc} alt="Notifications" />
            <NotificationDot show={notificationDot} src="src/assets/icons/notificationDot.svg" alt="Notifications" />
          </NotificationSection>
          <IconContainer>
            <Icon src={menuIconSrc} alt="Menu" onClick={handleMenuToggle} />
          </IconContainer>
        </HeaderRightLeftContainer>
      </HeaderContainer>
      <NavBar 
        isVisible={isMenuOpen}
        onClose={handleMenuToggle}
        closeIconSrc={closeIconSrc}
      />
    </>
  );
};

export default DashboardHeader;
