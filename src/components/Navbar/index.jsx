// Navbar.jsx
import React, { useState } from "react";
import {
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
  ThemeToggleButton,
} from "./styles";
import { Sun, Moon } from "lucide-react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <NavbarWrapper>
      <NavbarContainer>
        {/* Logo */}
        <Logo src="/assets/Logo_1.svg" />

        {/* Desktop Links */}
        <NavLinks>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/categories">Categories</NavItem>
          <Anchor href="#">
            <CTAEnquiryNow>Enquiry now</CTAEnquiryNow>
          </Anchor>

          {/* 🌙/☀️ Theme Toggle */}
          <ThemeToggleButton onClick={toggleTheme}>
            {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
          </ThemeToggleButton>


        </NavLinks>

        {/* Mobile Menu Icon */}
        <NavbarMobileMenuIcon
          onClick={toggleMenu}
          src={isMenuOpen ? "/assets/close_circle.svg" : "/assets/menu.svg"}
        />

        {/* Mobile Menu */}
        <NavbarMobileMenu className={isMenuOpen ? "active" : ""}>
          <NavbarMobileItem to="/" onClick={toggleMenu}>
            Home
          </NavbarMobileItem>
          <Divider />
          <NavbarMobileItem to="/about" onClick={toggleMenu}>
            About
          </NavbarMobileItem>
          <Divider />
          <NavbarMobileItem to="/contact" onClick={toggleMenu}>
            Contact
          </NavbarMobileItem>
          <Divider />
          <NavbarMobileItem to="/categories" onClick={toggleMenu}>
            Categories
          </NavbarMobileItem>


          {/* 🌙/☀️ Theme Toggle in mobile menu */}
          <Divider />
          <ThemeToggleButton onClick={toggleTheme}>
            {isDarkMode ? <Sun size={22} /> : <Moon size={22} />}
          </ThemeToggleButton>
          <Divider />

          <Anchor href="#">
            <CTAEnquiryNow>Enquiry now</CTAEnquiryNow>
          </Anchor>

        </NavbarMobileMenu>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;
