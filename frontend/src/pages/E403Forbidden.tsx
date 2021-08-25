import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: red;
  width: 100%;
  height: 100vh;
  .h1 {
    font-size: 30px;
  }
`;

function E403Forbidden() {
  return (
    <Container>
      <h1>403 Forbidden</h1>
    </Container>
  );
}

export default E403Forbidden;
