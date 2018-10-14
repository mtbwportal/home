import { RouterState } from 'connected-react-router';
import { HttpClient } from 'mmdb-client-factory';

export interface AsyncContext {
  http: HttpClient;
  env: string;
}

export const initialAppState: AppState = {};

export interface AppState {
  router?: RouterState;
}
