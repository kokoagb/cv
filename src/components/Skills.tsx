import React from "react";
import styled from "styled-components";
import { skills } from "../data/Skills.data";
import { Typo } from "./Typo";

export const Skills = () => (
  <>
    <Typo.H2>Skills</Typo.H2>
    <SkillsList>
      {skills.map((skill) => (
        <SkillsListItem>{skill}</SkillsListItem>
      ))}
    </SkillsList>
  </>
);

const SkillsList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const SkillsListItem = styled.li``;
