import styled from "styled-components";

export const HeroSectionWrapper = styled.section`
width: 100%;
padding: 60px 0 40px 0;
overflow-x: hidden; 


@media screen and (max-width: 768px) {
    padding: 40px 0 40px 0;
}
`;

export const BgImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    filter: brightness(0.6);
`;

export const HeroSectionContainer = styled.div`
    max-width: 1250px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 100px;

    @media screen  and (max-width: 1220px) {
        max-width: 100%;
        padding: 0 20px;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 50px;
    }
`;

export const HeroContent = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;

@media screen and (max-width: 768px) {
    display: none;
}
`;

export const SubHeading = styled.h2`
width: 100%;
text-align: left;
font-size: calc(${({theme}) => theme.typography.tabletSubHeading} + 6px);
color: ${({theme})=> theme.colors.accent};
font-family: "Lato", serif;

@media screen and (max-width: 768px) {
    margin-bottom: 10px;
    font-size: calc(${({ theme }) => theme.typography.tabletSubHeading} + 6px);
  }

@media screen and (max-width: 480px) {
    font-size: calc(${({ theme }) => theme.typography.mobileSubHeading} + 6px);
  }
`;

export const Row = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
`;

export const BigText = styled.h1`
  font-family: "playfair display", serif;
  font-size: 100px;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin: 0;

  @media screen and (max-width: 1200px) {
    font-size: 60px;
  }

  @media screen and (max-width: 950px) {
    font-size: ${({ theme }) => theme.typography.desktopHeading};
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.tabletHeading};
  }
`;

export const Paragraph = styled.p`
  font-size: calc(${({ theme }) => theme.typography.desktopBody} + 2px);
  color: ${({ theme }) => theme.colors.secondaryText};
  margin: 0;
  font-family: "lato", serif;

  @media screen and (max-width: 768px) {
    font-size: calc(${({ theme }) => theme.typography.tabletBody} + 2px);
  }

  @media screen and (max-width: 480px) {
    font-size: calc(${({ theme }) => theme.typography.mobileBody} + 2px);
  }
`;

export const MediumText = styled.h2`
font-size: 60px;
color: ${({ theme }) => theme.colors.secondaryText};
margin: 0;
font-family: "playfair display", serif;

@media screen and (max-width: 1200px) {
    font-size: 50px;
    }

@media screen and (max-width: 950px) {
    font-size: 35px;
    }

@media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.tabletSubHeading};
    }
`;

export const Arrow = styled.img`
    height: 50px;
    width: auto;

@media screen and (max-width: 768px) {
    margin-top: 10px;
    height: 40px;
    width: auto;
}
`;

export const HeroContentMobile = styled.div`
    display: none;

@media screen and (max-width: 768px) {
    display: block;
    text-align: left;
}
`;

export const Heading = styled.h1`
    font-size: calc(${({ theme }) => theme.typography.desktopHeading} + 6px);
    color: ${({ theme }) => theme.colors.secondaryText};
    font-family: "playfair display", serif;
    margin-bottom: 10px;
    line-height: ${({ theme }) => theme.typography.lineHeight};

@media screen and (max-width: 768px) {
    font-size: calc(${({ theme }) => theme.typography.tabletHeading} + 6px);
    }

@media screen and (max-width: 480px) {
    font-size: calc(${({ theme }) => theme.typography.mobileHeading} + 6px);
  }
`;

export const ScrollingContent = styled.div`
display: flex;
padding: 20px 0;
overflow: hidden;
width: 110vw;
left: -5vw;
/* width: calc(100vw - 20px); */
gap: 20px;
white-space: nowrap;
scroll-behavior: smooth;
background-color: #333333a7;
position: relative;
transform: rotate(2deg);
z-index: 1;
scrollbar-width: none;

&::-webkit-scrollbar {
    display: none;
    }

@media screen  and (max-width: 768px) {
    padding: 15px 0;
    gap: 15px;
}
`;

export const ScrollingContentContainer = styled.div`
    display: flex;
    gap: 20px;
    animation: scroll 30s linear infinite backwards;

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }   
    }
`;

export const StarCircle = styled.img`
    height: 30px;
    width: 30px;
    margin-left: 10px;
    vertical-align: middle;

@media screen and (max-width: 768px) {
    height: 25px;
    width: 25px;
}

@media screen and (max-width: 480px) {
    height: 20px;
    width: 20px;
}
`;

export const ProductNameWrapper = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
`;

export const ProductName = styled.span`
    font-size: ${({ theme }) => theme.typography.desktopSubHeading};
    color: ${({ theme }) => theme.colors.secondaryText};
    font-family: "lato", serif;
    margin-right: 10px;

@media screen and (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.tabletSubHeading};
  }

@media screen and (max-width: 480px) {
    font-size: ${({ theme }) => theme.typography.mobileSubHeading};
  }
`;