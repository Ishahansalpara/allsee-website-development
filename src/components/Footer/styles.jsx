import styled from "styled-components";

/* Root wrapper: dark canvas like the design */
export const FooterWrapper = styled.footer`
  width: 100%;
  position: relative;
  background: #0b0909;
  color: ${({ theme }) => theme?.colors?.secondaryText || "#ffffff"};
  overflow: hidden;
`;

export const FooterContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  /* Added more bottom padding to create space above the waves */
  padding: 56px 24px 190px;
  display: grid;
  grid-template-columns: 1.3fr 2fr;
  gap: 64px;
  align-items: start;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 32px;
    padding-bottom: 210px; /* keep extra space on small screens */
  }
`;

export const LeftBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const BrandLogo = styled.img`
  width: 45px;
  height: 45px;
  object-fit: contain;
`;

export const BrandTitle = styled.h4`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.desktopSubHeading};
  letter-spacing: 1.1px;
  font-weight: 600;
  font-family: "Playfair Display";
  color:${({ theme }) => theme?.colors?.secondaryText};
`;

export const Tagline = styled.p`
  margin: 8px 0 4px;
  font-size: 18px;
  color: ${({ theme }) => theme?.colors?.secondaryText};
`;

export const Hint = styled.p`
  margin: 0 0 8px;
  font-size: 14px;
  font-family: "Lato", serif;
  color: #b7b6b6;
`;

export const EnquiryButton = styled.button`
  width: max-content;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px 16px;
  color: ${({ theme }) => theme?.colors?.secondaryText};
  background: ${({ theme }) => theme?.colors?.accent};
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  transition: background 0.2s ease;

  &:hover {
    filter: brightness(1.05);
  }
`;

export const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(160px, 1fr));
  gap: 48px;

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(2, minmax(140px, 1fr));
    gap: 28px 36px;
  }
`;

export const Column = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ColumnTitle = styled.h5`
  margin: 0 0 10px 0;
  color: ${({ theme }) => theme?.colors?.secondaryText};
  font-size: 18px;
  font-weight: 700;
  font-family: "Playfair Display";
`;

export const ItemLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme?.colors?.secondaryText};
  font-size: ${({ theme }) => theme.typography.mobileBody};
  opacity: 0.9;
  font-family: "Lato", serif;
  transition: color 0.2s ease, opacity 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme?.colors?.accent };
    opacity: 1;
  }
`;

/* Wave image pinned bottom, behind content, with a subtle downward shift to show a gap */
export const WaveImg = styled.img.attrs(({ theme, ["data-wave-dark"]: darkSrc, ["data-wave-light"]: lightSrc }) => ({
  // choose src at runtime based on theme mode; fallback to dark
  src: theme?.colors?.mode === "light" ? lightSrc || darkSrc : darkSrc
}))`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  width: 100%;
  height: 160px; /* a bit taller for richer curve */
  object-fit: cover;
  pointer-events: none;
  z-index: 1;

  /* push the waves slightly down to create a visible gap above them */
  transform: translateY(12px);

  @media screen and (max-width: 768px) {
    height: 125px;
    transform: translateY(10px);
  }
`;
