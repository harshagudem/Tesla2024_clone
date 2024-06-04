import React, { useState } from 'react';
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  const [burgerNav, setBurgerNav] = useState(false);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt=""/>
      </a>
      <Menu>
        <a href="#">Vehicles</a>
        <a href="#">Energy</a>
        <a href="#">Charging</a>
        <a href="#">Discover</a>
        <a href="#">Shop</a>
      </Menu>
      <RightMenu>
        <a href="#"><span className="material-symbols-outlined">help</span></a>
        <a href="#"><span className="material-symbols-outlined">language</span></a>
        <a href="#"><span className="material-symbols-outlined">account_circle</span></a>
      </RightMenu>
      <CustomMenu onClick={() => setBurgerNav(true)} />
      <BurgerNav show={burgerNav}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerNav(false)} />
        </CloseWrapper>
        <li><a href="#">Vehicles</a></li>
        <li><a href="#">Energy</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Discover</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Language</a></li>
        <li><a href="#">Account</a></li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  padding: 15px 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 700;
    padding: 0 20px;
    font-size: 15px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    padding: 0 5px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  @media (min-width: 769px) {
    display: none;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 2;

  li {
    padding: 15px 0;
    

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
