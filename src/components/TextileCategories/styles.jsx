import { Link } from "react-router";
import styled from "styled-components";

export const TextileCategoriesWrapper = styled.section`
  width: 100%;
  padding: 80px 20px;
  background-image: url("/assets/categories_section_bg.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    padding: 60px 20px;
  }

  @media screen and (max-width: 480px) {
    padding: 40px 20px;
  }
`;

export const TextileCategoriesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;

  @media screen and (max-width: 768px) {
    gap: 40px;
  }

  @media screen and (max-width: 480px) {
    gap: 20px;
  }
`;

export const Heading = styled.h2`
  font-size: ${({ theme }) => theme.typography.desktopHeading};
  color: ${({ theme }) => theme.colors.primaryText};
  text-align: center;
  font-family: "playfair display", serif;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.tabletHeading};
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.typography.mobileHeading};
  }
`;

export const CategoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  @media screen and (max-width: 803px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CategoryImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  filter: brightness(0.6);
  transition: transform 0.3s ease;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  top: 40%;
  transition: top 0.3s ease;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.desktopSubHeading};
  color: ${({ theme }) => theme.colors.secondaryText};
  text-align: center;
  font-family: "Lato", serif;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.tabletSubHeading};
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.typography.mobileSubHeading};
  }
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.desktopBody};
  color: ${({ theme }) => theme.colors.secondaryText};
  text-align: center;
  line-height: ${({ theme }) => theme.colors.lineHeight};

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.tabletBody};
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.typography.mobileBody};
  }
`;

export const CTAExploreMore = styled(Link)`
  position: relative;
  z-index: 1;
  width: fit-content;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.secondaryText};
  color: ${({ theme }) => theme.colors.primaryText};
  text-decoration: none;
  text-align: center;
  font-size: ${({ theme }) => theme.colors.desktopBody};
  transition: all 0.3s ease;
  opacity: 0;

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.secondaryText};
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.colors.tabletBody};
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.colors.mobileBody};
  }
`;

export const CategoryCard = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 50px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;

  &:hover ${Content} {
    top: 0%;
  }

  &:hover ${CategoryImage} {
    transform: scale(1.1);
  }

  &:hover ${CTAExploreMore} {
    opacity: 1;
  }

  @media screen and (max-width: 803px) {
    width: 100%;
  }
`;