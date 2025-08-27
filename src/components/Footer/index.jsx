import React from "react";

import {
  FooterWrapper,
  FooterContainer,
  LeftBlock,
  BrandRow,
  BrandLogo,
  BrandTitle,
  Tagline,
  Hint,
  EnquiryButton,
  Columns,
  Column,
  ColumnTitle,
  ItemLink,
  WaveImg
} from "./styles";

// assets (place them next to these files or adjust paths)
import logo from "/assets/Logo_1.svg";
import waveDark from "/assets/waves.svg";       // dark-mode waves
import waveLight from "/assets/waves_1.svg";  // light-mode waves

// dynamic links config
import { footerLinks } from "../../utils/footerLinks"; // or "../../themes/footerLinks"

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        {/* Left brand block */}
        <LeftBlock>
          <BrandRow>
            <BrandLogo src={logo} alt="Allsee logo" />
            <BrandTitle>ALLSEE TEXTILES</BrandTitle>
          </BrandRow>

          <Tagline>We never run out of fabrics.</Tagline>
          <Hint>Contact us for more details</Hint>
          <EnquiryButton>Enquiry now</EnquiryButton>
        </LeftBlock>

        {/* Right columns (dynamic) */}
        <Columns>
          {footerLinks.map((section) => (
            <Column key={section.title}>
              <ColumnTitle>{section.title}</ColumnTitle>
              {section.items.map((item) => (
                <ItemLink key={item.label} href={item.href}>
                  {item.label}
                </ItemLink>
              ))}
            </Column>
          ))}
        </Columns>
      </FooterContainer>

      {/* Decorative waves.
          Pass both theme variants via data attributes; the styled component chooses the right src. */}
      <WaveImg
        data-wave-dark={waveDark}
        data-wave-light={waveLight}
        alt=""
        aria-hidden="true"
      />
    </FooterWrapper>
  );
};

export default Footer;
