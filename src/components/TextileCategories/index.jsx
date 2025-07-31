import React from "react";
import { categories } from "../../utils/constants";
import {
  TextileCategoriesWrapper,
  TextileCategoriesContainer,
  Heading,
  CategoriesContainer,
  CategoryCard,
  CategoryImage,
  Content,
  Title,
  Description,
  CTAExploreMore,
} from "./styles";

const TextileCategories = () => {
  return (
    <TextileCategoriesWrapper>
      <TextileCategoriesContainer>
        <Heading>Explore Our Textile Categories</Heading>
        <CategoriesContainer>
          {categories.map((category) => {
            return (
              <CategoryCard key={category.id}>
                <CategoryImage src={category.image} alt={category.title} />
                <Content>
                  <Title>{category.title}</Title>
                  <Description>{category.description}</Description>
                </Content>
                <CTAExploreMore to={category.link}>EXPLORE MORE</CTAExploreMore>
              </CategoryCard>
            );
          })}
        </CategoriesContainer>
      </TextileCategoriesContainer>
    </TextileCategoriesWrapper>
  );
};

export default TextileCategories;