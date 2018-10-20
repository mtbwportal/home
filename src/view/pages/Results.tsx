import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { AppState, AllTimeResult, SeasonResult } from '../../state';
import { LeagueAllTimeTable, LeagueYearTable } from '../components';

interface StateProps {
  allTime: AllTimeResult[];
  seasons: { [key: number]: SeasonResult[] };
}

type Props = StateProps;

interface State {
  showAllTime: boolean;
  leagueYear: number;
}
const initialState = { showAllTime: false, leagueYear: 2018 };

class Results extends Component<Props, State> {
  state: State = initialState;

  viewAllTime = () => this.setState(() => ({ showAllTime: true }));

  viewYear = (leagueYear: number) => this.setState(() => ({ showAllTime: false, leagueYear }));

  yearPickerButton = (target: number) => {
    const { showAllTime, leagueYear } = this.state;
    const className = classNames({ 'is-active': !showAllTime && target === leagueYear });
    return (
      <button className={className} onClick={() => this.viewYear(target)}>
        {target}
      </button>
    );
  };

  render() {
    const { allTime, seasons } = this.props;
    const { showAllTime, leagueYear } = this.state;
    return (
      <div className="results">
        <h1>league results</h1>
        <div className="results-picker">
          <button className={classNames({ 'is-active': showAllTime })} onClick={this.viewAllTime}>
            all time
          </button>
          {this.yearPickerButton(2018)}
          {this.yearPickerButton(2017)}
          {this.yearPickerButton(2016)}
          {this.yearPickerButton(2015)}
          {this.yearPickerButton(2014)}
          {this.yearPickerButton(2013)}
        </div>
        {showAllTime ? (
          <LeagueAllTimeTable allTimeResults={allTime} />
        ) : (
          <LeagueYearTable year={leagueYear} seasonResults={seasons[leagueYear]} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ results }: AppState) => ({
  allTime: results.allTime,
  seasons: results.seasons.reduce(
    (acc, season) => {
      const yearResults = acc[season.year] || [];
      yearResults.push(season);
      acc[season.year] = yearResults;
      return acc;
    },
    {} as { [key: number]: SeasonResult[] }
  ),
});

export default connect(mapStateToProps)(Results);
