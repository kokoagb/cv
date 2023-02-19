import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main";
  grid-template-columns: 200px 1fr;
  padding: 2rem;
  background-color: #fff;
  color: #000;
`;
