import { History } from "./History";
import { Typo } from "./Typo";
import { education } from "../data/Edication.data";

export const Education = () => (
  <>
    <Typo.H2>Education</Typo.H2>
    <History history={education} />
  </>
);
