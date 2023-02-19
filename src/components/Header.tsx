import React from "react";
import styled from "styled-components";
import { Typo } from "./Typo";
import { cv } from "../data/Header.data";

export const Header = () => (
  <HeaderContainer>
    <HeaderNameAndOccupation>
      <Typo.H1>{cv.name}</Typo.H1>
      <HeaderOccupation>{cv.occupation}</HeaderOccupation>
    </HeaderNameAndOccupation>
    {/* <HeaderSummary>{cv.summary}</HeaderSummary> */}
  </HeaderContainer>
);

const HeaderContainer = styled.header`
  grid-area: header;
  display: flex;
  margin-bottom: 1.5rem;
`;

const HeaderNameAndOccupation = styled.div`
  margin-right: auto;
`;

const HeaderOccupation = styled.div`
  color: var(--accent);
  font-size: 1.5rem;
  font-style: italic;
`;

const HeaderSummary = styled.div`
  width: 45vw;
`;
