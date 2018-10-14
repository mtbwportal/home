import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
import { AppState } from '../../../state';

interface StateProps {
  location: string;
}

interface DispatchProps {
  gotoWelcome: () => void;
}

type Props = StateProps & DispatchProps;

class Header extends Component<Props> {
  render() {
    const { gotoWelcome } = this.props;
    return (
      <div className="app-header">
        <img src="static/logo.png" alt="mmdb" onClick={gotoWelcome} />
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  location: state.router!.location.pathname,
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    gotoWelcome: () => dispatch(push('/')),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
