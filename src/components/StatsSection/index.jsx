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
    StatDescription,
    DottedLine
} from "./styles";

const StatsSection = () => {
    return (
        <StatsSectionWrapper>
            <DottedLine src="/assets/dotted_line.png" alt="dotted line" />
            <StatsSectionContainer>
                {stats.map((stat, index) => (
                    <StatCard key={index}>
                        <StatLogo src={stat.logo} />
                        <StatNumbers>
                            {stat.numbers}
                            <Span>{stat.span}</Span>
                        </StatNumbers>
                        <StatsTitle>{stat.title}</StatsTitle>
                        <StatDescription>{stat.description}</StatDescription>
                    </StatCard>
                ))}
            </StatsSectionContainer>
        </StatsSectionWrapper>
    );
};

export default StatsSection;