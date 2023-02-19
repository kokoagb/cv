import styled from "styled-components";
import { contactDetails } from "../data/ContactDetails.data";
import { Typo } from "./Typo";

export const ContactDetails = () => (
  <>
    <Typo.H2>Contact</Typo.H2>
    <ContactDetailsList>
      {contactDetails.map(({ label, text }) => (
        <>
          <ContactDetailsLabel>{label}</ContactDetailsLabel>
          <ContactDetailsText>{text}</ContactDetailsText>
        </>
      ))}
    </ContactDetailsList>
  </>
);

const ContactDetailsList = styled.dl``;

const ContactDetailsLabel = styled.dt`
  font-weight: bold;
`;

const ContactDetailsText = styled.dd`
  margin-left: 0;
  margin-bottom: 1rem;
`;
