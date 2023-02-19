import { History } from "./History";
import { Typo } from "./Typo";
import { workHistory } from "../data/WorkHistory.data";

export const WorkHistory = () => (
  <>
    <Typo.H2>Work History</Typo.H2>
    <History history={workHistory} />
  </>
);
