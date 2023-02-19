import { useContext, useState } from "react";
import styled from "styled-components";
import { ColorMode, ThemeContext } from "../theme/ThemeContext";
import { Icons } from "./Icons";

export const Controls = () => {
  const { colorMode, switchColorMode } = useContext(ThemeContext);

  return (
    <ControlsContainer>
      <Button onClick={switchColorMode}>
        {colorMode === ColorMode.light ? <Icons.Moon /> : <Icons.Sun />}
      </Button>
      <Button onClick={() => window.print()}>
        <Icons.Print />
      </Button>
    </ControlsContainer>
  );
};

const ControlsContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 2rem;

  @media print {
    display: none;
  }
`;

const Button = styled.button`
  padding: 0.5rem;
  color: var(--primary-color);
  background-color: transparent;
  border-width: 0;
  cursor: pointer;

  :not(:last-of-type) {
    margin-right: 0.5rem;
  }

  :hover {
    opacity: 0.7;
  }
`;
