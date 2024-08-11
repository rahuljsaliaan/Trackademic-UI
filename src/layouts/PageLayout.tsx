import React from 'react';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import notificationBell from '@/assets/icons/notificationBell.svg';
import menu from '@/assets/icons/menu.svg';
import menuClose from '@/assets/icons/menuClose.svg';
import profile from '@/assets/images/profile.png';

interface IPageLayoutProps {
  children: React.ReactElement[];
}

const PageLayout: React.FC<IPageLayoutProps> = ({ children }) => {
  return (
    <div className="dashboard">
      <div className="dashboard-contents">
        <Header
          profileSrc={profile}
          greetingText="Namasthe!"
          bellIconSrc={notificationBell}
          notificationDot={true}
          menuIconSrc={menu}
          closeIconSrc={menuClose}
        />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
