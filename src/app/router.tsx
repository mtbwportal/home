import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'

import {
  ErrorBoundary,
  // ErrorBoundaryRoute,
  Header,
  Sidebar,
  Footer,
  Home,
  Players,
  Teams,
  Welcome,
  NotFound,
} from '../view';
import { urls } from '../util';

export default class Router extends React.Component<any> {
  render() {
    const { history } = this.props;
    return (
      <ConnectedRouter history={history}>
        <ErrorBoundary>
          <div className="app">
            <Header />
            <div className="app-dashboard">
              <Sidebar />
              <div className="app-content">
                <Switch>
                    <Route exact path={urls.welcome()} component={Welcome} />
                    <Route path={urls.home()} component={Home} />
                    <Route path={urls.players()} component={Players} />
                    <Route path={urls.teams()} component={Teams} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
            <Footer />
          </div>
        </ErrorBoundary>
      </ConnectedRouter>
    );
  }
}
