import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
import { AppPage, appUrl } from '../../state';

interface Props {
  gotoRules: () => void;
  gotoTeams: () => void;
  gotoPlayers: () => void;
  gotoResults: () => void;
  doStuff: () => void;
}

class Home extends Component<Props> {
  render() {
    const { gotoRules, gotoTeams, gotoPlayers, gotoResults, doStuff } = this.props;
    return (
      <div className="home">
        <h1>home page</h1>
        <div className="home-actions">
          <button className="home-actions-link" onClick={gotoRules}>
            rules
          </button>
          <button className="home-actions-link" onClick={gotoTeams}>
            teams
          </button>
          <button className="home-actions-link" onClick={gotoPlayers}>
            players
          </button>
          <button className="home-actions-link" onClick={gotoResults}>
            results
          </button>
          <button className="home-actions-link" onClick={doStuff}>do stuff</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  gotoRules: () => dispatch(push(appUrl(AppPage.RULES))),
  gotoTeams: () => dispatch(push(appUrl(AppPage.TEAMS))),
  gotoPlayers: () => dispatch(push(appUrl(AppPage.PLAYERS))),
  gotoResults: () => dispatch(push(appUrl(AppPage.RESULTS))),
  doStuff: () => {},
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(Home);
