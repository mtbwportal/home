import AppActions from '../../app/actions';

import { YahooOauth, State } from './types';

const factory = AppActions.forNamespace<State>('yahoo');

export const getToken = factory
  .withType('get oauth token')
  .asThunk<[string], YahooOauth>(code => (_dispatch, _getState, stitch) =>
    stitch.stitch.callFunction('getYahooOauthToken', [code])
  )
  .withReducer((state, action) => {
    if (action.status === 'success') {
      return { ...state, oauth: action.payload };
    }
    return state;
  });

export const getLeagues = factory
  .withType('get leagues')
  .asThunk<[string], any>(accessToken => (_dispatch, _getState, stitch) =>
    stitch.stitch.callFunction('getLeagues', [accessToken]).then(res => {
      console.log(res);
      return res;
    })
  );
