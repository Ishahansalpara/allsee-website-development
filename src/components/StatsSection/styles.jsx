import styled from "styled-components";

export const StatsSectionWrapper = styled.section`
  width: 100%;
  position: relative;
  background:${({theme}) => 
    `linear-gradient(to bottom, ${theme.colors.stats1}, ${theme.colors.stats2})`};
  padding: 80px 20px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    padding: 60px 20px;
  }

  @media screen and (max-width: 480px) {
    padding: 40px 20px;
  }
`;

export const StatsSectionContainer = styled.div`
   max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  z-index: 2;

  @media screen and (max-width: 830px) {
    justify-content: center;
    gap: 35px;
  }

  @media screen and (max-width: 685px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

export const StatCard = styled.div`
background:${({theme}) => 
    `linear-gradient(to bottom, ${theme.colors.statscard1}, ${theme.colors.statscard2})`};  border-radius: 39px;
  padding: 50px 20px;
  flex: 1;
  min-width: 250px;
  max-width: 300px;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 2;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const DottedLine = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%); /* center align the line */
  width: 120%;   /* make line stretch a bit wider than container */
  height: auto;
  z-index: 1;
  pointer-events: none;
`;


export const StatLogo = styled.img`
  width: 80px;
  height: 70px;
  object-fit: cover;
`;

export const StatNumbers = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 10px;
`;

export const Span = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.accent};
`;

export const StatsTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 5px;
  font-family: "Lato", sans-serif;
`;

export const StatDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.desktopBody};
  color: ${({ theme }) => theme.colors.primaryText};
  line-height: ${({ theme }) => theme.typography.lineHeight};
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.tabletBody};
  }

  @media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.typography.mobileBody};
  }
`;