import styled from "styled-components";
import { Typo } from "./Typo";

type Props = {
  history: {
    position: string;
    company: string;
    location: string;
    dateStart: Date;
    dateEnd: Date | null;
    responsibilities: string[];
  }[];
};

export const History = ({ history }: Props) => (
  <HistoryList>
    {history.map(
      ({
        position,
        company,
        location,
        dateStart,
        dateEnd,
        responsibilities,
      }) => (
        <HistoryListItem key={`${position}-${company}`}>
          <HistoryDate>
            {dateStart.toLocaleString("EN-en", {
              year: "numeric",
              month: "2-digit",
            })}{" "}
            -{" "}
            {dateEnd
              ? dateEnd.toLocaleString("EN-en", {
                  year: "numeric",
                  month: "2-digit",
                })
              : "Currently"}
          </HistoryDate>
          <HistoryMain>
            <Typo.H3>{position}</Typo.H3>
            <HistoryPositionAndLocation>
              {company}, {location}
            </HistoryPositionAndLocation>
            <HistoryResponsibilitiesList>
              {responsibilities.map((responsibility) => (
                <HistoryResponsibilitiesListItem>
                  {responsibility}
                </HistoryResponsibilitiesListItem>
              ))}
            </HistoryResponsibilitiesList>
          </HistoryMain>
        </HistoryListItem>
      )
    )}
  </HistoryList>
);

const HistoryList = styled.ul`
  padding-left: 0;
`;

const HistoryListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const HistoryDate = styled.time`
  font-weight: bold;
`;

const HistoryMain = styled.div`
  width: 50vw;
  min-width: 50vw;
`;

const HistoryPositionAndLocation = styled.div`
  margin-bottom: 0.5rem;
  font-style: italic;
`;

const HistoryResponsibilitiesList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
`;

const HistoryResponsibilitiesListItem = styled.li``;
