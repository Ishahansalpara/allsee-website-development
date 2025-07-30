import React from 'react';
import { stats } from '../../utils/constants';
import {
    StatsSectionWrapper,
    StatsSectionContainer,
    StatCard,
    StatLogo,
    StatNumbers,
    Span,
    StatsTitle,
    StatDescription
} from "./styles";

const StatsSection = () => {
  return (
    <StatsSectionWrapper>
        <StatsSectionContainer>
            {stats.map((stat) => {
                return(
                <StatCard>
                    <StatLogo src={stat.logo} />
                        <StatNumbers>
                            {stat.numbers}
                            <Span>{stat.span}</Span>
                        </StatNumbers>
                            <StatsTitle>{stat.title}</StatsTitle>
                        <StatDescription>{stat.description}</StatDescription>
                    </StatCard>
                ); 
            })}
    </StatsSectionContainer>
  </StatsSectionWrapper>
  );
};

export default StatsSection;