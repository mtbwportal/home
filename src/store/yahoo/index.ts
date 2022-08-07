import {YahooFantasyUser, YahooOauth} from '../../types'
import * as actions from './actions';


export interface YahooActions {
  getToken: (code: string) => YahooOauth;
  getUserBaseballTeams: () => YahooFantasyUser[]
}

export const yahooActions = {
  getToken: actions.getToken.creator.worker,
  getUserBaseballTeams: actions.getUserBaseballTeams.creator.worker,
}

export { default as yahooReducer } from './reducer';
