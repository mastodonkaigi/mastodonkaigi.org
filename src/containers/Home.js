import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Hero = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 2.75rem;
  margin: 0;
  padding: 0;
`;

const Description = styled.p`
  font-size: 0.95rem;
  margin: 0;
  padding: 1rem 0;
`;

export default function Home() {
  return (
    <Hero>
      <Title>
        <FormattedMessage id="home.title" />
      </Title>
      <Description>
        <FormattedMessage id="home.welcome" />
      </Description>
    </Hero>
  );
}
