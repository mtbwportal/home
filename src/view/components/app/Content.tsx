import React, { Component } from 'react';
import { Route, Switch, withRouter, RouteComponentProps } from 'react-router-dom';
import { urls } from '../../../util';
import { NotFound, Welcome, Home, Players, Results, Rules, Team, Teams } from '../../pages';

class Content extends Component<RouteComponentProps> {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route exact path={urls.welcome()} component={Welcome} />
          <Route path={urls.home()} component={Home} />
          <Route path={urls.rules()} component={Rules} />
          <Route path={urls.players()} component={Players} />
          <Route exact path={urls.teams()} component={Teams} />
          <Route path={'/teams/:yearId'} render={({ match }) => <Team yearId={match.params.yearId} />} />
          <Route path={urls.results()} component={Results} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Content);
