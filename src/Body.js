import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledRow = styled.div`
  @media (min-width: 320px) {
    width: 100%;
  }
  @media (min-width: 360px) {
    width: 100%;
  }
  @media (min-width: 375px) {
    width: 100%;
  }
  @media (min-width: 425px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    width: 360px;
  }
`;

export default function BodyComponent({ children }) {
  return (
    <StyledContainer>
      <StyledRow>{children}</StyledRow>
    </StyledContainer>
  );
}
