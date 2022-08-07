import thunk from 'redux-thunk';
import { createBrowserHistory, createMemoryHistory, History } from 'history';
import { applyMiddleware, createStore, compose, Middleware, Store } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { StitchAppClient, StitchAuth } from 'mongodb-stitch-browser-sdk';
import { HttpClient } from 'mmdb-client-factory';
import { isProd, publicUrl } from '../util';
import {
  AppState,
  initialAppState,
  setUser,
  listTeams,
  listTeamManagers,
  listPlayers,
  listAllTimeResults,
  listSeasosnResults,
} from '../state';
import buildRootReducers from '../state/reducers';

export default class Harness {
  public history: History;
  private middlewares: Middleware[];
  public store: Store<AppState>;

  constructor(public stitch: StitchAppClient, public http: HttpClient) {
    this.history =
      typeof window !== 'undefined' ? createBrowserHistory({ basename: publicUrl }) : createMemoryHistory();

    this.middlewares = [routerMiddleware(this.history), thunk.withExtraArgument({ stitch, http })];

    let composeEnhancers: <R>(a: R) => R;
    if (isProd()) {
      composeEnhancers = compose;
    } else {
      this.setupLoggerMiddleware();
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }

    this.store = createStore(
      buildRootReducers(this.history),
      initialAppState,
      composeEnhancers(applyMiddleware(...this.middlewares))
    );

    const dispatchSetUser = (auth: StitchAuth) => this.store.dispatch(setUser(auth.user))

    dispatchSetUser(stitch.auth);
    stitch.auth.addAuthListener({ onAuthEvent: dispatchSetUser });

    // FIXME: these should probably only load once auth'd (at least some of them)
    this.store.dispatch<any>(listTeams.action());
    this.store.dispatch<any>(listTeamManagers.action());
    this.store.dispatch<any>(listPlayers.action());
    this.store.dispatch<any>(listAllTimeResults.action());
    this.store.dispatch<any>(listSeasosnResults.action());
  }

  setupLoggerMiddleware() {
    const { createLogger } = require('redux-logger');
    this.middlewares.push(createLogger({ duration: true }));
  }
}