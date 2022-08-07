import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
import { StitchUser } from 'mongodb-stitch-browser-sdk';
import { AppState } from '../../../state';
import { urls } from '../../../util';

interface StateProps {
  location: string;
  user?: StitchUser;
}

interface DispatchProps {
  gotoWelcome: () => void;
}

type Props = StateProps & DispatchProps;

class Header extends Component<Props> {
  render() {
    const { gotoWelcome, user } = this.props;
    return (
      <div className="header">
        <img src="/static/logo.png" alt="mmdb" onClick={gotoWelcome} />
        {!!user && <button className="header-session-mgmt">Log out</button>}
        {!user && <button className="header-session-mgmt">Log in</button>}
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  location: state.router!.location.pathname,
  user: state.session.user
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  gotoWelcome: () => dispatch(push(urls.welcome())),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
