import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #282828;
  padding: 32px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

const FooterLogo = styled.img`
  padding-bottom: 32px;
`;

const FooterText = styled.p`
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer className="dashboard-footer">
      <FooterLogo src="src/assets/logo/logo-dark.svg" alt="logo" />
      <FooterText>© 2024 Trackademic. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
