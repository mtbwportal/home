import { combineReducers, Reducer } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { AppState } from '../state';
import adminReducer from './admin/reducer';
import sessionReducer from './session/reducer';
import teamsReducer from './teams/reducer';
import playersReducer from './players/reducer';
import resultsReducer from './results/reducer';

const buildRootReducers: (h: History) => Reducer<AppState> = history =>
  combineReducers({
    admin: adminReducer,
    session: sessionReducer,
    teams: teamsReducer,
    players: playersReducer,
    results: resultsReducer,
    router: connectRouter(history),
  });

export default buildRootReducers;
