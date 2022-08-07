import { StitchAppClient } from 'mongodb-stitch-browser-sdk';
import { RouterState } from 'connected-react-router';
import { HttpClient } from 'mmdb-client-factory';
import {
  AdminState,
  initialAdminState as admin,
  SessionState,
  initialSessionState as session,
  ResultsState,
  initialResultsState as results,
  TeamsState,
  initialTeamsState as teams,
  PlayersState,
  initialPlayersState as players,
} from '.';

export interface AsyncContext {
  stitch: StitchAppClient;
  http: HttpClient;
}

export interface AppState {
  admin: AdminState;
  session: SessionState;
  teams: TeamsState;
  players: PlayersState;
  results: ResultsState;
  router: RouterState;
}

export const initialAppState: AppState = {
  admin,
  session,
  teams,
  players,
  results,
  router: {
    location: { pathname: '', search: '', state: {}, hash: '' },
    action: 'PUSH',
  },
};
