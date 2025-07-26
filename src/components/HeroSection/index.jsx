import React from 'react';
import {
    HeroSectionWrapper,
    BgImage,
    HeroSectionContainer,
    HeroContent,
    SubHeading,
    Row,
    BigText,
    Paragraph,
    MediumText,
    Arrow,
    HeroContentMobile,
    Heading,
    ScrollingContent,
    ScrollingContentContainer, 
    ProductNameWrapper,
    ProductName,
    StarCircle
} from "./styles";
import { allseeProducts } from '../../utils/constants';

const HeroSection = () => {
  return (
  <HeroSectionWrapper>
    <BgImage  src='assets/hero_section_bg.png'/>
    <HeroSectionContainer>
        <HeroContent>
            <SubHeading>WELCOME TO ALLSEE</SubHeading>
            <Row>
                <BigText>Premium</BigText>
                <Paragraph>
                  Elevate your brand experience with Allsee’s high-quality textiles
                  — from custom T-shirts and uniforms to premium hotel and hospital
                  linen. Trusted by industry leaders for comfort, durability, and
                  timeless style.
                </Paragraph>
                <BigText>Textiles</BigText>
            </Row>
            <Row>
               <BigText>Solutions</BigText>
               <Arrow src="/assets/arrow.svg"/>
               <MediumText> for every industry</MediumText>
            </Row>
        </HeroContent>
      <HeroContentMobile>
        <SubHeading>WELCOME TO ALLSEE</SubHeading>
        <Heading>Premium Textiles Solutions for every industry</Heading>
        <Paragraph>
          Elevate your brand experience with Allsee’s high-quality textiles —
          from custom T-shirts and uniforms to premium hotel and hospital linen.
          Trusted by industry leaders for comfort, durability, and timeless style.
        </Paragraph>
        <Arrow src="/assets/arrow.svg"/>

      </HeroContentMobile>
    </HeroSectionContainer>
    <ScrollingContent>
      <ScrollingContentContainer>
        {
          allseeProducts.map((product, index) => {
            return(
              <ProductNameWrapper key={index}>
                <ProductName>{product}</ProductName>
                <StarCircle src='assets/star_circle.svg' alt='star circle' />
              </ProductNameWrapper>
            )
        })
      }
      </ScrollingContentContainer>
    </ScrollingContent>
  </HeroSectionWrapper>
  )
}

export default HeroSection;