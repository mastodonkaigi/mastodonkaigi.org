import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  margin: 0;
  padding: 1rem 5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
  padding: 0 1rem 1rem;
`;

export default () => (
  <Root>
    <Title>404 Not Found</Title>
  </Root>
);
