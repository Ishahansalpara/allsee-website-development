import React, { useState } from 'react';
import{
  NavbarWrapper,
  NavbarContainer,
  Logo,
  NavLinks,
  NavItem,
  NavbarMobileMenuIcon,
  NavbarMobileMenu,
  NavbarMobileItem,
  Anchor,
  CTAEnquiryNow,
  Divider,
} from './styles';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  
  return <NavbarWrapper>
    <NavbarContainer>
      <Logo src="/assets/logo.svg"/>
      <NavLinks>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/contact">Contact</NavItem>
        <NavItem to="/categories">Categories</NavItem>
        <Anchor href="#">
          <CTAEnquiryNow>Enquiry now</CTAEnquiryNow>
        </Anchor>
      </NavLinks>

      <NavbarMobileMenuIcon onClick={toggleMenu} src ={isMenuOpen ? "/assets/close_circle.svg": "/assets/menu.svg"} />
      <NavbarMobileMenu className={isMenuOpen ? "active" : ""}>
        <NavbarMobileItem to="/"  onClick={toggleMenu}>Home</NavbarMobileItem>
        <NavbarMobileItem to="/about" onClick={toggleMenu}>About</NavbarMobileItem>
        <NavbarMobileItem to="/contact" onClick={toggleMenu}>Contact</NavbarMobileItem>
        <NavbarMobileItem to="/categories" onClick={toggleMenu}>Categories</NavbarMobileItem>
        <Anchor href="#">
          <CTAEnquiryNow>Enquiry now</CTAEnquiryNow>
        </Anchor>
      </NavbarMobileMenu>
    </NavbarContainer>
</NavbarWrapper>};

export default Navbar;