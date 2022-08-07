import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
import { randomString } from 'mmdb-client-factory';
import { urls } from '../../util';

interface DispatchProps {
  gotoYear: (year: string) => void;
}

type Props = DispatchProps;

const years = [2018, 2017, 2016, 2015, 2014, 2013];

class Teams extends Component<Props> {
  render() {
    const { gotoYear } = this.props;
    return (
      <div className="teams">
        <h1>teams page</h1>
        <div className="teams-actions">
          {years.map(year => {
            return (
              <button key={randomString()} className="teams-actions-link" onClick={() => gotoYear(`${year}`)}>
                {year}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  gotoYear: (year: string) => dispatch(push(urls.team(year))),
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(Teams);
