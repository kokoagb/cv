import styled from "styled-components";

const H1 = styled.h1`
  color: var(--primary-color);
  font-size: 3rem;
  line-height: 1;
  transition: color 0.2s;
`;

const H2 = styled.h2`
  color: var(--primary-color);
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--secondary-color);
  transition: border-color 0.2s;
`;

const H3 = styled.h3`
  color: var(--primary-color);
  transition: color 0.2s;
`;

export const Typo = {
  H1,
  H2,
  H3,
};
