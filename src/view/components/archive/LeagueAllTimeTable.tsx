import React from 'react';
import { AllTimeResult } from '../../../state';

interface Props {
  allTimeResults: AllTimeResult[];
}

const LeagueAllTimeTable = ({ allTimeResults }: Props) => (
  <table className="results-table">
    <caption>a summary of the league's all-time results.</caption>
    <thead>
      <tr>
        <th scope="col">place</th>
        <th scope="col">managerId</th>
        <th scope="col">championships</th>
        <th scope="col">wins</th>
        <th scope="col">losses</th>
        <th scope="col">ties</th>
        <th scope="col">win %</th>
        <th scope="col">gb</th>
      </tr>
    </thead>
    <tbody>
      {allTimeResults.map(lr => (
        <tr key={lr._id}>
          <td>{lr.place}</td>
          <td>{lr.managerId}</td>
          <td>{lr.championships}</td>
          <td>{lr.wins}</td>
          <td>{lr.losses}</td>
          <td>{lr.ties}</td>
          <td>{lr.winPct}</td>
          <td>{lr.gb}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default LeagueAllTimeTable;
