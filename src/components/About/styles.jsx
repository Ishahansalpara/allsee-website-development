import { Link } from "react-router";
import styled from "styled-components";

export const AboutWrapper = styled.section`
  padding: 80px 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;

  @media screen and (max-width: 860px) {
    padding: 40px 20px 0 40px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px 10px 0 20px;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 860px) {
    flex-direction: column;
  }
`;

export const PlayButton = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 57%;
  left: 50%;
  width: 150px;

  @media screen and (max-width: 1180px) {
    width: 120px;
    left: 52%;
  }

  @media screen and (max-width: 1100px) {
    width: 100px;
  }

  @media screen and (max-width: 1090px) {
    display: none;
  }
`;

export const LeftContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space;
  min-height: 550px;
  padding-right: 20px;

  @media screen and (max-width: 860px) {
    width: 100%;
    padding-right: 0;
    margin-bottom: 50px;
    min-height: fit-content;
  }
`;

export const MainContent = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;

export const SubHeading = styled.h2`
  font-size: ${({ theme }) => theme.typography.desktopSubHeading};
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 10px;
  font-family: "Lato", serif;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.tabletSubHeading};
    margin-bottom: 8px;
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.typography.mobileSubHeading};
    margin-bottom: 6px;
  }
`;

export const Heading = styled.h2`
  font-family: "playfair display", sans-serif;
  font-size: ${({ theme }) => theme.typography.desktopHeading};
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 20px;
  max-width: 570px;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.tabletHeading};
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.typography.mobileHeading};
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.colors.accent};
  font-weight: bold;
  margin-left: 5px;
`;

export const Arrow = styled.img`
  width: 50px;
  height: 50px;
  vertical-align: middle;

  @media screen and (max-width: 768px) {
    width: 45px;
    height: 45px;
  }

  @media screen and (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

export const Description = styled.div`
  font-size: ${({ theme }) => theme.typography.desktopBody};
  color: ${({ theme }) => theme.colors.primaryText};
  line-height: ${({ theme }) => theme.typography.lineHeight};
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.tabletBody};
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.typography.mobileBody};
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.desktopBody};
  color: ${({ theme }) => theme.colors.primaryText};
  line-height: ${({ theme }) => theme.typography.lineHeight};

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.tabletBody};
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.typography.mobileBody};
  }
`;

export const CTACheckOutOurCatalog = styled(Link)`
  font-family: "Playwrite US Modern", sans-serif;
  font-size: ${({ theme }) => theme.typography.desktopSubHeading};
  color: ${({ theme }) => theme.colors.primaryText};
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  &::after {
    content: " →";
    color: ${({ theme }) => theme.colors.accent};
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.tabletSubHeading};
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.typography.mobileSubHeading};
  }
`;

export const RightImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 860px) {
    width: 100%;
    padding-right: 0;
    margin-bottom: 50px;
    min-height: fit-content;
  }
`;

export const AboutImage = styled.img`
  max-width: 100%;
  height: auto;
`;