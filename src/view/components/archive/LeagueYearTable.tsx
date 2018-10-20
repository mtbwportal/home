import React from 'react';
import { SeasonResult } from '../../../state';

interface Props {
  year: number;
  seasonResults: SeasonResult[];
}

const LeagueYearTable = ({ year, seasonResults }: Props) => (
  <table className="results-table">
    <caption>{`a summary of the league's ${year} results.`}</caption>
    <thead>
      <tr>
        <th>place</th>
        <th>managerId</th>
        <th>teamId</th>
        <th>wins</th>
        <th>losses</th>
        <th>ties</th>
        <th>win %</th>
        <th>gb</th>
        <th>moves</th>
      </tr>
    </thead>
    <tbody>
      {seasonResults.map(lr => (
        <tr key={lr._id}>
          <td>{lr.place}</td>
          <td>{lr.managerId}</td>
          <td>{lr.teamId}</td>
          <td>{lr.wins}</td>
          <td>{lr.losses}</td>
          <td>{lr.ties}</td>
          <td>{lr.winPct}</td>
          <td>{lr.gb}</td>
          <td>{lr.moves}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default LeagueYearTable;
