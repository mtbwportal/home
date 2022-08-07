import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { push } from 'connected-react-router';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppState, AppPage, appPage, appUrl, setCurrentPage } from '../../../state';

interface StateProps {
  path: string;
  hash: string;
}

interface DispatchProps {
  setCurrentPage: (page: AppPage) => void;
  gotoHome: () => void;
  gotoPlayers: () => void;
  gotoTeams: () => void;
  gotoResults: () => void;
  gotoRules: () => void;
}

type Props = StateProps & DispatchProps;

const initialState = { activeTab: AppPage.NOT_FOUND };

type State = typeof initialState;

class Sidebar extends React.Component<Props, State> {
  state: State = initialState;

  componentWillReceiveProps({ path }: Props) {
    if (this.props.path !== path) {
      const activeTab = appPage(path);

      this.setState(() => ({ activeTab }));
      this.props.setCurrentPage(activeTab);
    }
  }

  render() {
    const { gotoHome, gotoRules, gotoTeams, gotoPlayers, gotoResults } = this.props;
    const { activeTab } = this.state;
    return (
      <div className="sidebar">
        <button className={classNames({ 'sidebar-link-active': activeTab === AppPage.HOME })} onClick={gotoHome}>
          <FontAwesomeIcon icon="home" size="2x" />
        </button>
        <button className={classNames({ 'sidebar-link-active': activeTab === AppPage.RULES })} onClick={gotoRules}>
          <FontAwesomeIcon icon="list-ul" size="2x" />
        </button>
        <button className={classNames({ 'sidebar-link-active': activeTab === AppPage.TEAMS })} onClick={gotoTeams}>
          <FontAwesomeIcon icon="grip-horizontal" size="2x" />
        </button>
        <button
          className={classNames({ 'sidebar-link-active': activeTab === AppPage.PLAYERS })}
          onClick={gotoPlayers}
        >
          <FontAwesomeIcon icon="male" size="2x" />
        </button>
        <button
          className={classNames({ 'sidebar-link-active': activeTab === AppPage.RESULTS })}
          onClick={gotoResults}
        >
          <FontAwesomeIcon icon="trophy" size="2x" />
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => {
  const {
    location: { hash, pathname: path },
  } = state.router || { location: { hash: '', pathname: '' } };
  return { hash, path };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setCurrentPage: (page: AppPage) => dispatch(setCurrentPage(page)),
    gotoHome: () => dispatch(push(appUrl(AppPage.HOME))),
    gotoPlayers: () => dispatch(push(appUrl(AppPage.PLAYERS))),
    gotoTeams: () => dispatch(push(appUrl(AppPage.TEAMS))),
    gotoResults: () => dispatch(push(appUrl(AppPage.RESULTS))),
    gotoRules: () => dispatch(push(appUrl(AppPage.RULES))),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
