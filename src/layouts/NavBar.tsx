import useLogout from '@/features/auth/hooks/useLogout';
import styled from 'styled-components';

const MenuOverlay = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: flex-end;
  opacity: ${(props) => (props.isVisible ? '1' : '0')};
  transition: opacity 0.3s ease;
  pointer-events: ${(props) => (props.isVisible ? 'auto' : 'none')};
`;

const NavContainer = styled.div<{ isVisible: boolean }>`
  margin-top: 16px;
  background-color: #4535ea;
  height: fit-content;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  transform: ${(props) =>
    props.isVisible ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease;
`;

const CloseIconContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px 32px 32px;
`;

const CloseIcon = styled.img`
  cursor: pointer;
`;

const NavListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: center;
  gap: 16px;
  padding: 32px 64px 64px;
`;

const NavLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  font-weight: 900;
  color: #ffffff;
  outline: none;
  &:hover {
    color: #ffffff;
  }
`;

const NavLinkIcon = styled.img`
  padding-left: 32px;
  visibility: hidden;
`;

const NavList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
  width: 100%;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #ffffff;
    cursor: pointer;
  }

  &:hover ${NavLinkIcon} {
    visibility: visible;
  }
`;

interface NavBarProps {
  isVisible: boolean;
  onClose: () => void;
  closeIconSrc: string;
}

const NavBar: React.FC<NavBarProps> = ({
  isVisible,
  onClose,
  closeIconSrc
}) => {
  const { mutate } = useLogout();

  const handleLogout = () => {
    mutate();
  };

  const handleOverlayClick = () => {
    onClose();
  };

  const handleNavContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <MenuOverlay isVisible={isVisible} onClick={handleOverlayClick}>
      <NavContainer isVisible={isVisible} onClick={handleNavContainerClick}>
        <CloseIconContainer>
          <CloseIcon src={closeIconSrc} alt="Close" onClick={onClose} />
        </CloseIconContainer>
        <NavListContainer>
          <NavList>
            <NavLink>Home</NavLink>
            <NavLinkIcon src="src/assets/icons/navArrow.svg" />
          </NavList>
          <NavList>
            <NavLink>Attendance</NavLink>
            <NavLinkIcon src="src/assets/icons/navArrow.svg" />
          </NavList>
          <NavList>
            <NavLink>Examinations</NavLink>
            <NavLinkIcon src="src/assets/icons/navArrow.svg" />
          </NavList>
          <NavList>
            <NavLink>Announcements</NavLink>
            <NavLinkIcon src="src/assets/icons/navArrow.svg" />
          </NavList>
          <NavList>
            <NavLink>Events & Calendar</NavLink>
            <NavLinkIcon src="src/assets/icons/navArrow.svg" />
          </NavList>
          <NavList>
            <NavLink>Time Table</NavLink>
            <NavLinkIcon src="src/assets/icons/navArrow.svg" />
          </NavList>
          <NavList onClick={handleLogout}>
            <NavLink>Logout</NavLink>
            <NavLinkIcon src="src/assets/icons/navArrow.svg" />
          </NavList>
        </NavListContainer>
      </NavContainer>
    </MenuOverlay>
  );
};

export default NavBar;
