import styled from "styled-components";

export const Page = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main";
  grid-template-columns: 200px 1fr;
  padding: 2rem;

  @media screen {
    max-width: 1200px;
    margin: 5rem auto;
    box-shadow: 0 0 3rem rgba(0, 0, 0, 0.3);
  }
`;
