import React from "react";
import {useTheme} from "styled-components";
import {
  AboutWrapper,
  AboutContainer,
  PlayButton,
  LeftContent,
  MainContent,
  SubHeading,
  Heading,
  Span,
  Arrow,
  Description,
  Paragraph,
  CTACheckOutOurCatalog,
  RightImage,
  AboutImage,
} from "./styles";

const About = () => {
  const theme = useTheme();
  console.log("theme in about:", theme);
  const isDarkMode = theme.colors.mode ==="dark";
  return (
    <AboutWrapper>
      <AboutContainer>
        <PlayButton src={ isDarkMode ? "/assets/play_button_1.png" : "/assets/play_button.svg" } />
        <LeftContent>
          <MainContent>
            <SubHeading>ABOUT US</SubHeading>
            <Heading>
              Crafting Quality, Building Trust
              <Span>
                <Arrow src={ isDarkMode ? "/assets/about_us_arrow_1.png" : "/assets/about_us_arrow.svg"} />
              </Span>
            </Heading>
            <Description>
              <Paragraph>
                Allsee is a leading textile manufacturing company based in
                India, specializing in customized textile solutions for
                corporate, hospitality, and healthcare sectors. Our mission is
                to deliver premium-quality textiles that blend comfort,
                durability, and design excellence.
              </Paragraph>
              <Paragraph>
                With a focus on ethical manufacturing, innovative fabrics, and
                client-first service, we help brands create unforgettable guest
                and customer experiences.
              </Paragraph>
              <Paragraph>
                Our textiles are crafted with precision and passion, whether
                it’s a crisp hospital bedsheet or a luxury hotel robe.
              </Paragraph>
            </Description>
          </MainContent>
          <CTACheckOutOurCatalog to="/categories">
            Check out our catalog
          </CTACheckOutOurCatalog>
        </LeftContent>
        <RightImage>
          <AboutImage src={isDarkMode ? "/assets/about_us_img_1.png" : "/assets/about_us_img.png"} />
        </RightImage>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default About;