import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
import { AppState } from '../../../state';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface DispatchProps {
  gotoHome: () => void;
  gotoPlayers: () => void;
  gotoTeams: () => void;
}

type Props = DispatchProps;

class Sidebar extends React.Component<Props> {
  render() {
    const { gotoHome, gotoPlayers, gotoTeams } = this.props;
    return (
      <div className="app-sidebar">
        <button onClick={gotoHome}>
          <FontAwesomeIcon icon="home" size="2x" />
        </button>
        <button onClick={gotoTeams}>
          <FontAwesomeIcon icon="grip-horizontal" size="2x" />
        </button>
        <button onClick={gotoPlayers}>
          <FontAwesomeIcon icon="male" size="2x" />
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  location: state.router!.location.pathname,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    gotoHome: () => dispatch(push('/home')),
    gotoPlayers: () => dispatch(push('/players')),
    gotoTeams: () => dispatch(push('/teams')),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
